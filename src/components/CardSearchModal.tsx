
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from 'next-themes';
import { useSession, getSession, signIn } from 'next-auth/react';
import Image from 'next/image';

// ⬇️ NEW imports
import CardDetailModal from '@/components/CardDetailModal';
import usePersistentPageSize from '@/hooks/usePersistentPageSize';

interface Card {
  id: string;
  name: string;
  hp: string | null;
  types?: string[];
  supertype?: string | null;
  subtypes?: string[];
  set?: { id?: string; name?: string; series?: string };
  images: { small: string; large?: string };
  rarity?: string | null;
  artist?: string | null;
}

type HistoryEntry = {
  cardId: string;
  time: string; // ISO
  tcgplayer_normal_market: number | null;
  tcgplayer_holofoil_market: number | null;
  tcgplayer_reverse_holofoil_market: number | null;
  cardmarket_average_sell_price: number | null;
  no_tcgplayer_prices: boolean;
};

type FiltersResponse = Partial<{
  // option arrays
  supertype: string[];
  rarity: string[];
  types: string[];
  subtypes: string[];
  setId: string[];
  setSeries: string[];
  artist: string[];

  // numeric ranges
  hp: [number, number] | null;
  retreat: [number, number] | null;
  averageSellPrice: [number, number] | null;

  // legalities
  legalities: {
    standard: string[];
    expanded: string[];
    unlimited: string[];
  };
}>;

type ToggleState = 'has' | 'hasNot' | null;

const API_URL = '/api/cards';
const FILTERS_URL = '/api/cards/filters';

// ---------- small helpers ----------
function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return m ? decodeURIComponent(m.pop() as string) : undefined;
}
function getFallbackIdToken(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  const S = sessionStorage, L = localStorage;
  const keys = ['google_id_token', 'g_id_token', 'id_token'];
  for (const k of keys) {
    const s = S.getItem(k); if (s) return s;
    const l = L.getItem(k); if (l) return l;
    const c = readCookie(k); if (c) return c;
  }
  return undefined;
}
// removed arraysEqual (unused)
const rangesEqual = (a: [number, number] | null, b: [number, number] | null) =>
  (!a && !b) || (!!a && !!b && a[0] === b[0] && a[1] === b[1]);

// ---- LocalStorage cache (JSON) for FILTERS only ----
const FILTERS_CACHE_KEY = 'cards:filters:v1';
const FILTERS_CACHE_TTL = 30 * 24 * 60 * 60 * 1000; // 30 days
type CacheBox<T> = { ts: number; data: T };
function cacheRead<T>(key: string, ttlMs: number): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const box = JSON.parse(raw) as CacheBox<T>;
    if (!box?.ts) return null;
    if (Date.now() - box.ts > ttlMs) return null;
    return box.data;
  } catch { return null; }
}
function cacheWrite<T>(key: string, data: T): void {
  try {
    const box: CacheBox<T> = { ts: Date.now(), data };
    localStorage.setItem(key, JSON.stringify(box));
  } catch { /* ignore quota errors */ }
}

// ---------- Dropdown primitives ----------
type SelectOption = { value: string; label: string };

function useClickOutside(close: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) close();
    };
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onEsc);
    };
  }, [close]);
  return ref;
}

function MultiSelect({
  values, onChange, options, placeholder = 'Select...', dark,
}: {
  values: string[];
  onChange: (v: string[]) => void;
  options: SelectOption[];
  placeholder?: string;
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const labels = values.length ? options.filter(o => values.includes(o.value)).map(o => o.label).join(', ') : placeholder;
  const boxRef = useClickOutside(() => setOpen(false));
  const toggle = (v: string) => values.includes(v) ? onChange(values.filter(x => x !== v)) : onChange([...values, v]);

  return (
    <div className="relative" ref={boxRef}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full px-3 py-2 rounded-lg border text-left transition-colors ${
          dark ? 'bg-slate-800 border-slate-700 text-slate-100 hover:border-indigo-500' : 'bg-white border-slate-300 text-slate-900 hover:border-indigo-500'
        }`}
      >
        {labels}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 mt-2 w-full rounded-xl shadow-xl max-h-64 overflow-y-auto ${
              dark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
            }`}
          >
            {options.map(opt => {
              const active = values.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="menuitemcheckbox"
                  aria-checked={active}
                  onClick={() => toggle(opt.value)}
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 cursor-pointer transition-colors ${
                    dark ? 'hover:bg-slate-700 text-slate-100' : 'hover:bg-slate-100 text-slate-900'
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 rounded border ${active ? (dark ? 'bg-indigo-500 border-indigo-400' : 'bg-indigo-600 border-indigo-500') : (dark ? 'border-slate-500' : 'border-slate-400')}`}
                    aria-hidden
                  />
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ====== Dual/Single slider with row-under layout (checkbox | inputL | inputR) ======

// CSS variables helper
type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number };

function RangeSlider({
  label,
  range,
  value,
  onChange,
  dark,
  step = 1,
  format = (n: number) => String(n),
  single = false,
  exactToggle,
}: {
  label: string;
  range: [number, number];
  value: [number, number];
  onChange: (v: [number, number]) => void;
  dark: boolean;
  step?: number;
  format?: (n: number) => string;
  single?: boolean;
  exactToggle?: { checked: boolean; onChange: (b: boolean) => void };
}) {
  const [min, max] = range;
  const [lo, hi] = value;
  const clamp = (v: number) => Math.min(Math.max(v, min), max);

  // handlers
  const onLo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = clamp(Number(e.target.value));
    if (single) onChange([v, v]);
    else onChange([Math.min(v, hi), hi]);
  };
  const onHi = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = clamp(Number(e.target.value));
    if (single) onChange([v, v]);
    else onChange([lo, Math.max(v, lo)]);
  };

  // track which thumb is being dragged to set z-index
  const [drag, setDrag] = React.useState<null | "lo" | "hi">(null);
  React.useEffect(() => {
    const up = () => setDrag(null);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up, { passive: true });
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const p = (n: number) => ((n - min) / (max - min)) * 100;
  const val = single ? lo : undefined;

  const vars: CSSVars = { '--trackH': '8px', '--thumb': '22px' };

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="text-sm font-medium">{label}</label>
        <div className="text-xs opacity-70">
          {single ? format(lo) : `${format(lo)} – ${format(hi)}`}
        </div>
      </div>

      {/* Slider track */}
      <div className="relative h-8" style={vars}>
        {/* full track */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-full rounded-full ${dark ? 'bg-slate-700' : 'bg-slate-200'}`}
          style={{ height: 'var(--trackH)' }}
        />
        {/* active segment */}
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full"
          style={{
            height: 'var(--trackH)',
            left: single ? `${p(lo)}%` : `${p(Math.min(lo, hi))}%`
            ,
            width: single ? '0%' : `${Math.max(0, p(Math.max(lo, hi)) - p(Math.min(lo, hi)))}%`,
            background: dark ? '#6366f1' : '#4f46e5',
          }}
        />

        {/* LEFT thumb / Single thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={single ? val : lo}
          onChange={onLo}
          onMouseDown={() => setDrag("lo")}
          onTouchStart={() => setDrag("lo")}
          className="absolute w-full appearance-none bg-transparent top-1/2 -translate-y-1/2"
          style={{ zIndex: drag === "lo" ? 40 : 30, height: 'var(--thumb)' }}
        />

        {/* RIGHT thumb (hidden when single) */}
        {!single && (
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={hi}
            onChange={onHi}
            onMouseDown={() => setDrag("hi")}
            onTouchStart={() => setDrag("hi")}
            className="absolute w-full appearance-none bg-transparent top-1/2 -translate-y-1/2"
            style={{ zIndex: drag === "hi" ? 40 : 30, height: 'var(--thumb)' }}
          />
        )}

        <style jsx>{`
          input[type="range"] {
            pointer-events: none;
            -webkit-appearance: none;
            appearance: none;
          }
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none; appearance: none;
            pointer-events: auto;
            width: var(--thumb); height: var(--thumb); border-radius: 9999px;
            background: ${dark ? '#a5b4fc' : '#4f46e5'};
            border: 2px solid ${dark ? '#312e81' : '#c7d2fe'};
            box-shadow: 0 1px 2px rgba(0,0,0,0.25);
            cursor: pointer;
            margin-top: calc((var(--thumb) - var(--trackH)) / -2);
          }
          input[type="range"]::-moz-range-thumb {
            pointer-events: auto;
            width: var(--thumb); height: var(--thumb); border-radius: 9999px;
            background: ${dark ? '#a5b4fc' : '#4f46e5'};
            border: 2px solid ${dark ? '#312e81' : '#c7d2fe'};
            box-shadow: 0 1px 2px rgba(0,0,0,0.25);
            cursor: pointer;
          }
          input[type="range"]::-ms-thumb {
            pointer-events: auto;
            width: var(--thumb); height: var(--thumb); border-radius: 9999px;
            background: ${dark ? '#a5b4fc' : '#4f46e5'};
            border: 2px solid ${dark ? '#312e81' : '#c7d2fe'};
            box-shadow: 0 1px 2px rgba(0,0,0,0.25);
            cursor: pointer;
          }
          input[type="range"]::-webkit-slider-runnable-track {
            background: transparent;
            height: var(--trackH);
          }
          input[type="range"]::-moz-range-track {
            background: transparent;
            height: var(--trackH);
          }
          input[type="range"]::-ms-track {
            background: transparent;
            color: transparent;
            height: var(--trackH);
          }
        `}</style>
      </div>

      {/* Under-row: [checkbox] [left input] [right input] in ONE row */}
      <div
        className="mt-2"
        style={{
          display: 'grid',
          gridTemplateColumns: single ? 'auto 1fr 0fr' : 'auto 1fr 1fr',
          gap: '0.5rem',
          alignItems: 'center',
          transition: 'grid-template-columns 200ms ease',
        }}
      >
        {/* animated checkbox (tiny) */}
        {exactToggle ? (
          <motion.button
            type="button"
            role="checkbox"
            aria-checked={exactToggle.checked}
            onClick={() => exactToggle.onChange(!exactToggle.checked)}
            className={`w-5 h-5 rounded-md border flex items-center justify-center ${
              dark ? 'border-slate-600' : 'border-slate-300'
            }`}
            whileTap={{ scale: 0.9 }}
            animate={{ backgroundColor: exactToggle.checked ? (dark ? '#4f46e5' : '#4f46e5') : 'rgba(0,0,0,0)' }}
          >
            <AnimatePresence initial={false}>
              {exactToggle.checked && (
                <motion.svg
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-white"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        ) : (
          <div />
        )}

        {/* left numeric input (naturally expands when single because col3 collapses) */}
        <input
          type="number"
          value={lo}
          min={range[0]}
          max={single ? range[1] : hi}
          step={step}
          onChange={(e) => {
            const v = clamp(Number(e.target.value));
            onChange(single ? [v, v] : [v, hi]);
          }}
          className={`w-full p-1.5 rounded border text-xs ${dark ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'}`}
        />

        {/* right numeric input (width collapses smoothly via grid) */}
        <div className="overflow-hidden">
          <input
            type="number"
            value={hi}
            min={lo}
            max={range[1]}
            step={step}
            onChange={(e) => onChange([lo, clamp(Number(e.target.value))])}
            className={`w-full p-1.5 rounded border text-xs ${
              dark ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
            }`}
            aria-hidden={single}
            tabIndex={single ? -1 : 0}
          />
        </div>
      </div>
    </div>
  );
}


// ====== Tri-state toggle: live-drag to any of the three positions ======
function TriState({
  label, value, onChange, dark,
}: {
  label: string;
  value: ToggleState;
  onChange: (v: ToggleState) => void;
  dark: boolean;
}) {
  const states: ToggleState[] = ['hasNot', null, 'has'];
  const idx = states.indexOf(value);
  const next = () => onChange(states[(idx + 1) % states.length]);

  const railRef = useRef<HTMLDivElement | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // compute which third the pointer is in and update highlight while dragging
  const setIndexFromPoint = (clientX: number) => {
    const el = railRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const newIndex = ratio < 1 / 3 ? 0 : ratio < 2 / 3 ? 1 : 2;
    setHoverIndex(newIndex);
  };

  const handleDrag = (_: unknown, info: PanInfo) => setIndexFromPoint(info.point.x);
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setIndexFromPoint(info.point.x);
    const i = hoverIndex ?? (idx >= 0 ? idx : 1);
    onChange(states[i]);
    setHoverIndex(null);
  };

  const effectiveIndex = hoverIndex ?? (idx >= 0 ? idx : 1);

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="text-sm font-medium">{label}</label>
        <div className="text-xs opacity-70">
          {value === 'has' ? 'Has' : value === 'hasNot' ? 'Does not have' : 'Both'}
        </div>
      </div>

      <div ref={railRef} className="relative w-full select-none">
        <div
          className={`grid grid-cols-3 rounded-xl overflow-hidden border ${dark ? 'border-slate-700 bg-slate-800' : 'border-slate-300 bg-white'}`}
        >
          {['Does not have', 'Both', 'Has'].map((txt, i) => (
            <button
              key={txt}
              type="button"
              onClick={() => onChange(states[i])}
              className={`px-3 py-2 text-sm transition-colors ${dark ? 'text-slate-100 hover:bg-slate-700' : 'text-slate-900 hover:bg-slate-100'}`}
            >
              {txt}
            </button>
          ))}
        </div>

        {/* live-moving highlight */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.7 }}
          className="absolute top-0 h-full rounded-xl pointer-events-none"
          style={{
            left: `${effectiveIndex * 33.3333}%`,
            width: '33.3333%',
            background: dark ? 'rgba(99,102,241,0.25)' : 'rgba(79,70,229,0.15)',
            border: dark ? '1px solid rgba(99,102,241,.35)' : '1px solid rgba(79,70,229,.25)',
          }}
        />

        {/* drag layer scoped to its own container only */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab"
          onClick={next}
        />
      </div>
    </div>
  );
}

// ---------- Component ----------

type AppliedFilters = {
  query: string;
  // multi-select everywhere
  types: string[];
  supertypes: string[];
  subtypes: string[];
  rarities: string[];
  setIds: string[];
  setSeriesList: string[];
  artists: string[];
  // legalities
  legalStd: string[];
  legalExp: string[];
  legalUnl: string[];
  // toggles
  hasAbility: ToggleState;
  hasAttack: ToggleState;
  // ranges applied
  hpSel: [number, number] | null;
  retreatSel: [number, number] | null;
  avgPriceSel: [number, number] | null;
  // exact flags
  hpExact: boolean;
  retreatExact: boolean;
};

const EMPTY_APPLIED: AppliedFilters = {
  query: '',
  types: [],
  supertypes: [],
  subtypes: [],
  rarities: [],
  setIds: [],
  setSeriesList: [],
  artists: [],
  legalStd: [],
  legalExp: [],
  legalUnl: [],
  hasAbility: null,
  hasAttack: null,
  hpSel: null,
  retreatSel: null,
  avgPriceSel: null,
  hpExact: false,
  retreatExact: false,
};

type SessionWithIdToken = { idToken?: string };

export default function CardSearchModal({
  isOpen,
  onClose,
}: { isOpen: boolean; onClose: () => void; }) {
  const { resolvedTheme } = useTheme();
  const { data: session } = useSession();
  const isDark = resolvedTheme === 'dark';
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // token (optional) — server now prefers NextAuth session cookie
  const idToken = useMemo(() => (session as SessionWithIdToken | null | undefined)?.idToken || getFallbackIdToken(), [session]);

  // ====== fetch wrapper that refreshes on 401 then retries once ======
  const fetchWithAuth = useCallback(
    async (input: RequestInfo | URL, init?: RequestInit) => {
      const makeHeaders = (tok?: string): HeadersInit => {
        const base = (init && init.headers) ? (init.headers as HeadersInit) : {};
        const t = tok ?? (session as SessionWithIdToken | null | undefined)?.idToken ?? idToken ?? undefined;
        return t ? { ...base, authorization: `Bearer ${t}`, Authorization: `Bearer ${t}` } : base;
      };

      // 1) first attempt with current token (or just cookies if none)
      const first = await fetch(input, { ...init, headers: makeHeaders() });
      if (first.status !== 401) return first;

      // 2) try to refresh session → get a new idToken, then retry once
      try {
        const refreshed = await getSession();
        const newTok = (refreshed as SessionWithIdToken | null | undefined)?.idToken;
        if (newTok) {
          const retry = await fetch(input, { ...init, headers: makeHeaders(newTok) });
          if (retry.status !== 401) return retry;
        }
      } catch {
        // ignore; we’ll fall through
      }

      // 3) still unauthorized → kick to sign-in
      if (typeof window !== 'undefined') {
        await signIn(undefined, { callbackUrl: window.location.href });
      }
      return first;
    },
    [session, idToken]
  );

  // Keep fetcher stable in effects (prevents refire on focus)
  const fetchWithAuthRef = useRef(fetchWithAuth);
  useEffect(() => { fetchWithAuthRef.current = fetchWithAuth; }, [fetchWithAuth]);

  // live filters (UI)
  const [query, setQuery] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const [supertypes, setSupertypes] = useState<string[]>([]);
  const [subtypes, setSubtypes] = useState<string[]>([]);
  const [rarities, setRarities] = useState<string[]>([]);
  const [setIds, setSetIds] = useState<string[]>([]);
  const [setSeriesList, setSetSeriesList] = useState<string[]>([]);
  const [artists, setArtists] = useState<string[]>([]);
  const [hasAbility, setHasAbility] = useState<ToggleState>(null);
  const [hasAttack, setHasAttack] = useState<ToggleState>(null);

  // legalities (values like 'legal','banned')
  const [legalStd, setLegalStd] = useState<string[]>([]);
  const [legalExp, setLegalExp] = useState<string[]>([]);
  const [legalUnl, setLegalUnl] = useState<string[]>([]);

  // applied filters (what the API uses)
  const [applied, setApplied] = useState<AppliedFilters>(EMPTY_APPLIED);

  // data from /filters
  const [filters, setFilters] = useState<FiltersResponse>({});
  const [filtersLoaded, setFiltersLoaded] = useState<boolean>(false);

  // ranges (full + selected)
  const [hpRange, setHpRange] = useState<[number, number] | null>(null);
  const [hpSel, setHpSel] = useState<[number, number] | null>(null);
  const [hpExactMode, setHpExactMode] = useState<boolean>(false);

  const [retreatRange, setRetreatRange] = useState<[number, number] | null>(null);
  const [retreatSel, setRetreatSel] = useState<[number, number] | null>(null);
  const [retreatExactMode, setRetreatExactMode] = useState<boolean>(false);

  const [avgPriceRange, setAvgPriceRange] = useState<[number, number] | null>(null);
  const [avgPriceSel, setAvgPriceSel] = useState<[number, number] | null>(null);

  // Ensure when toggling to exact, we collapse to a single value (keep current lower bound)
  useEffect(() => {
    if (hpExactMode) {
      setHpSel((prev) => {
        if (!prev) return prev;
        const [lo] = prev;
        return [lo, lo];
      });
    } else {
      // on uncheck → thumbs snap back to full ends
      setHpSel(hpRange ?? null);
    }
  }, [hpExactMode, hpRange]);
  useEffect(() => {
    if (retreatExactMode) {
      setRetreatSel((prev) => {
        if (!prev) return prev;
        const [lo] = prev;
        return [lo, lo];
      });
    } else {
      // on uncheck → thumbs snap back to full ends
      setRetreatSel(retreatRange ?? null);
    }
  }, [retreatExactMode, retreatRange]);

  // paging
  const [page, setPage] = useState(1);
  // ⬇️ REPLACED with persistent page size
  const [pageSize, setPageSize] = usePersistentPageSize('cards:pageSize', 20, isOpen, [20, 50, 100]);

  const [cards, setCards] = useState<Card[]>([]);
  const [histories, setHistories] = useState<Record<string, HistoryEntry[]>>({});
  const histAbortRef = useRef<AbortController | null>(null); 
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [emptyReady, setEmptyReady] = useState(false);

  useEffect(() => {
    if (!loading && cards.length === 0) {
      const t = setTimeout(() => setEmptyReady(true), 600);
      return () => clearTimeout(t);
    } else {
      setEmptyReady(false);
    }
  }, [loading, cards]);

  // ---------- FILTERS: serve from cache (30d) or fetch ONCE; no refire on focus ----------
  useEffect(() => {
    if (!isOpen) return;

    (async () => {
      setFiltersLoaded(false);

      // 1) Try cache first
      const cached = cacheRead<FiltersResponse>(FILTERS_CACHE_KEY, FILTERS_CACHE_TTL);
      if (cached) {
        setFilters(cached);

        if (cached.hp?.length === 2) { setHpRange(cached.hp); setHpSel(cached.hp); } else { setHpRange(null); setHpSel(null); }
        if (cached.retreat?.length === 2) { setRetreatRange(cached.retreat); setRetreatSel(cached.retreat); } else { setRetreatRange(null); setRetreatSel(null); }
        if (cached.averageSellPrice?.length === 2) { setAvgPriceRange(cached.averageSellPrice); setAvgPriceSel(cached.averageSellPrice); } else { setAvgPriceRange(null); setAvgPriceSel(null); }

        setApplied({
          ...EMPTY_APPLIED,
          hpSel: cached.hp ?? null,
          retreatSel: cached.retreat ?? null,
          avgPriceSel: cached.averageSellPrice ?? null,
          hpExact: false,
          retreatExact: false,
        });

        setFiltersLoaded(true);
        return; // cached; do not refetch on focus
      }

      // 2) No cache → fetch once (cookies carry the NextAuth session; header added if available)
      try {
        const res = await fetchWithAuthRef.current(FILTERS_URL, { credentials: 'same-origin' });
        if (!res.ok) throw new Error(`filters ${res.status}`);
        const f: FiltersResponse = await res.json();
        setFilters(f);
        cacheWrite(FILTERS_CACHE_KEY, f); // save for 30 days

        if (f.hp?.length === 2) { setHpRange(f.hp); setHpSel(f.hp); } else { setHpRange(null); setHpSel(null); }
        if (f.retreat?.length === 2) { setRetreatRange(f.retreat); setRetreatSel(f.retreat); } else { setRetreatRange(null); setRetreatSel(null); }
        if (f.averageSellPrice?.length === 2) { setAvgPriceRange(f.averageSellPrice); setAvgPriceSel(f.averageSellPrice); } else { setAvgPriceRange(null); setAvgPriceSel(null); }

        setApplied({
          ...EMPTY_APPLIED,
          hpSel: f.hp ?? null,
          retreatSel: f.retreat ?? null,
          avgPriceSel: f.averageSellPrice ?? null,
          hpExact: false,
          retreatExact: false,
        });
      } catch {
        setFilters({});
      } finally {
        setFiltersLoaded(true);
      }
    })();
  }, [isOpen]); // only when modal opens

  // Build query params from APPLIED (not live UI) - memoized to satisfy deps
  const buildParams = useCallback((f: AppliedFilters) => {
    const p = new URLSearchParams();
    if (f.query) p.append('q', f.query);

    f.types.forEach(t => p.append('types', t));
    f.subtypes.forEach(s => p.append('subtypes', s));
    f.rarities.forEach(r => p.append('rarity', r));
    f.supertypes.forEach(v => p.append('supertype', v));
    f.setIds.forEach(v => p.append('setId', v));
    f.setSeriesList.forEach(v => p.append('setSeries', v));
    f.artists.forEach(v => p.append('artist', v));

    // legalities (values like 'legal','banned')
    f.legalStd.forEach(v => p.append('legal.standard', v));
    f.legalExp.forEach(v => p.append('legal.expanded', v));
    f.legalUnl.forEach(v => p.append('legal.unlimited', v));

    // toggles
    if (f.hasAbility) p.append('hasAbility', f.hasAbility);
    if (f.hasAttack) p.append('hasAttack', f.hasAttack);

    // ranges & exacts
    const sendRange = (
      sel: [number, number] | null,
      full: [number, number] | null,
      minKey: string,
      maxKey: string
    ) => {
      if (!sel || !full) return;
      const [smin, smax] = sel, [fmin, fmax] = full;
      if (smin > fmin) p.append(minKey, String(smin));
      if (smax < fmax) p.append(maxKey, String(smax));
    };

    // HP: exact uses hp=, otherwise hpMin/hpMax deltas
    if (f.hpExact && f.hpSel) {
      p.append('hp', String(f.hpSel[0]));
    } else {
      sendRange(f.hpSel, hpRange, 'hpMin', 'hpMax');
    }

    // Retreat: exact uses retreat=, otherwise retreatMin/retreatMax deltas
    if (f.retreatExact && f.retreatSel) {
      p.append('retreat', String(f.retreatSel[0]));
    } else {
      sendRange(f.retreatSel, retreatRange, 'retreatMin', 'retreatMax');
    }

    // Avg price always range
    sendRange(f.avgPriceSel, avgPriceRange, 'averageSellPriceMin', 'averageSellPriceMax');

    p.append('page', String(page));
    p.append('page_size', String(pageSize));
    return p;
  }, [hpRange, retreatRange, avgPriceRange, page, pageSize]);

  // ---------- CARDS: fetch on applied/paging change ONLY; no refire on focus ----------
  useEffect(() => {
    if (!isOpen) return;

    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const params = buildParams(applied);
    const url = `${API_URL}?${params.toString()}`;

    setLoading(true);
    (async () => {
      try {
        const res = await fetchWithAuthRef.current(url, { signal: controller.signal, credentials: 'same-origin' });
        if (!res.ok) throw new Error(`cards ${res.status}`);
        const data = await res.json();
        setCards(Array.isArray(data?.cards) ? data.cards : []);
        setTotalPages(Math.max(1, Number(data?.total_pages ?? 1)));
      } catch (e: unknown) {
        if (!(e instanceof DOMException && e.name === 'AbortError')) { setCards([]); setTotalPages(1); }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [isOpen, applied, page, pageSize, buildParams]); // include buildParams

  // ---------- HISTORIES: batch fetch for current page cards (one POST) ----------
  useEffect(() => {
    if (!isOpen) return;

    // cancel any in-flight history request
    if (histAbortRef.current) histAbortRef.current.abort();
    const controller = new AbortController();
    histAbortRef.current = controller;

    const ids = cards.map(c => c.id);
    if (ids.length === 0) { setHistories({}); return; }

    (async () => {
      try {
        const res = await fetchWithAuthRef.current(
          '/api/cards/price/batch',
          {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ ids, order: 'asc' }),
            credentials: 'same-origin',
            signal: controller.signal,
          }
        );
        if (!res.ok) throw new Error(`price batch ${res.status}`);
        const data = await res.json();
        const h = (data?.histories ?? {}) as Record<string, HistoryEntry[]>;
        setHistories(h);
      } catch (e: unknown) {
        if (!(e instanceof DOMException && e.name === 'AbortError')) setHistories({});
      }
    })();

    return () => controller.abort();
  }, [isOpen, cards]);

  // initial focus
  useEffect(() => {
    if (!isOpen) return;
    setTimeout(() => inputRef.current?.focus(), 0);
  }, [isOpen]);

  // Apply (commit UI to applied & fetch)
  const applySearch = useCallback(() => {
    setPage(1);
    setApplied({
      query: query.trim(),
      types, supertypes, subtypes, rarities, setIds, setSeriesList, artists,
      legalStd, legalExp, legalUnl,
      hasAbility, hasAttack,
      hpSel, retreatSel, avgPriceSel,
      hpExact: hpExactMode,
      retreatExact: retreatExactMode,
    });
  }, [query, types, supertypes, subtypes, rarities, setIds, setSeriesList, artists, legalStd, legalExp, legalUnl, hasAbility, hasAttack, hpSel, retreatSel, avgPriceSel, hpExactMode, retreatExactMode]);

  // Reset all
  const resetAll = useCallback(() => {
    setQuery('');
    setTypes([]); setSupertypes([]); setSubtypes([]); setRarities([]);
    setSetIds([]); setSetSeriesList([]); setArtists([]);
    setHasAbility(null); setHasAttack(null);
    setLegalStd([]); setLegalExp([]); setLegalUnl([]);
    setHpExactMode(false); setRetreatExactMode(false);
    if (hpRange) setHpSel(hpRange); else setHpSel(null);
    if (retreatRange) setRetreatSel(retreatRange); else setRetreatSel(null);
    if (avgPriceRange) setAvgPriceSel(avgPriceRange); else setAvgPriceSel(null);
    setPage(1);
    setApplied({
      ...EMPTY_APPLIED,
      hpSel: hpRange,
      retreatSel: retreatRange,
      avgPriceSel: avgPriceRange,
      hpExact: false,
      retreatExact: false,
    });
  }, [hpRange, retreatRange, avgPriceRange]);

  // pagination helpers
  const getPageItems = (current: number, total: number, maxVisible = 7) => {
    if (total <= 1) return [{ type: 'page' as const, value: 1, key: 'page-1' }];
    const items: Array<{ type: 'page' | 'dots'; value?: number; key: string }> = [];
    const windowSize = Math.max(3, maxVisible - 2);
    let start = Math.max(2, current - Math.floor((windowSize - 1) / 2));
    const end = Math.min(total - 1, start + windowSize - 1);
    start = Math.max(2, Math.min(start, Math.max(2, total - 1 - (windowSize - 1))));
    items.push({ type: 'page', value: 1, key: 'page-1' });
    if (start > 2) items.push({ type: 'dots', key: 'dots-left' });
    for (let i = start; i <= end; i++) items.push({ type: 'page', value: i, key: `page-${i}` });
    if (end < total - 1) items.push({ type: 'dots', key: 'dots-right' });
    items.push({ type: 'page', value: total, key: `page-${total}` });
    const seen = new Set<string>();
    return items.filter((it) => (seen.has(it.key) ? false : (seen.add(it.key), true)));
  };
  const pageItems = getPageItems(page, totalPages, 7);

  // modal style
  const isDarkBg = isDark;
  const modalStyle = useMemo<React.CSSProperties>(() => ({
    background: isDarkBg ? 'linear-gradient(180deg,#0b1020,#0f172a)' : 'linear-gradient(180deg,#ffffff,#f8fafc)',
    color: isDarkBg ? '#e2e8f0' : '#111827',
    width: '86vw',
    height: '82vh',
    borderRadius: '20px',
    boxShadow: isDarkBg ? '0 20px 60px rgba(0,0,0,0.6)' : '0 20px 60px rgba(15,23,42,0.15)',
    display: 'flex',
    overflow: 'hidden',
    border: isDarkBg ? '1px solid rgba(148,163,184,.2)' : '1px solid rgba(15,23,42,.08)',
    backdropFilter: 'saturate(140%)',
  }), [isDarkBg]);

  // ⬇️ NEW: state for details modal
  const [detailId, setDetailId] = useState<string | null>(null);
  const selectedCard = useMemo(() => cards.find(c => c.id === detailId) ?? null, [cards, detailId]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 36, mass: 0.9 }}
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
            className="flex"
          >
            {/* left (filters) */}
            <motion.div
              className="p-6 overflow-y-auto"
              style={{
                backgroundColor: isDarkBg ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.9)',
                borderRight: isDarkBg ? '1px solid rgba(148,163,184,.16)' : '1px solid rgba(15,23,42,.06)',
                flexBasis: '26%',
                minWidth: 292,
              }}
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              {/* Apply bar (animated) */}
              <AnimatePresence initial={false}>
                {(() => {
                  const anyArrays =
                    types.length || supertypes.length || subtypes.length || rarities.length ||
                    setIds.length || setSeriesList.length || artists.length ||
                    legalStd.length || legalExp.length || legalUnl.length;
                  const anyRanges =
                    (hpRange && hpSel && !rangesEqual(hpSel, hpRange)) ||
                    (retreatRange && retreatSel && !rangesEqual(retreatSel, retreatRange)) ||
                    (avgPriceRange && avgPriceSel && !rangesEqual(avgPriceSel, avgPriceRange));
                  const anyToggles = hasAbility !== null || hasAttack !== null;
                  const anyQuery = !!query.trim();
                  const anyExact = hpExactMode || retreatExactMode;
                  const anySelectedNow = !!(anyArrays || anyRanges || anyToggles || anyQuery || anyExact);
                  return anySelectedNow ? (
                    <motion.div
                      key="apply-bar"
                      initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginBottom: 12 }}
                      exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                      transition={{ duration: 0.18 }}
                      className="sticky top-0 z-50"
                      style={{ background: (typeof window !== "undefined" && document.documentElement.classList.contains("dark")) ? "rgba(2,6,23,0.98)" : "rgba(255, 255, 255, 0)" }}
                    >
                      <button
                        className="w-full py-2.5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow"
                        onClick={applySearch}
                      >
                        Apply
                      </button>
                    </motion.div>
                  ) : null;
                })()}
              </AnimatePresence>

              {/* Only render filters AFTER the filters API responded */}
              {!filtersLoaded ? (
                <p className="text-sm opacity-70">Loading filters…</p>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.05 } }} className="space-y-4">
                  {!!filters.types?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Types</label>
                      <MultiSelect
                        values={types}
                        onChange={setTypes}
                        options={(filters.types || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}

                  {!!filters.supertype?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Supertypes</label>
                      <MultiSelect
                        values={supertypes}
                        onChange={setSupertypes}
                        options={(filters.supertype || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}

                  {!!filters.subtypes?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Subtypes</label>
                      <MultiSelect
                        values={subtypes}
                        onChange={setSubtypes}
                        options={(filters.subtypes || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}

                  {!!filters.rarity?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Rarities</label>
                      <MultiSelect
                        values={rarities}
                        onChange={setRarities}
                        options={(filters.rarity || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}

                  {!!filters.setId?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Set IDs</label>
                      <MultiSelect
                        values={setIds}
                        onChange={setSetIds}
                        options={(filters.setId || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}

                  {!!filters.setSeries?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Set Series</label>
                      <MultiSelect
                        values={setSeriesList}
                        onChange={setSetSeriesList}
                        options={(filters.setSeries || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}

                  {!!filters.artist?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Artists</label>
                      <MultiSelect
                        values={artists}
                        onChange={setArtists}
                        options={(filters.artist || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}

                  {!!hpRange && !!hpSel && (
                    <RangeSlider
                      label="HP"
                      range={hpRange}
                      value={hpSel}
                      onChange={setHpSel}
                      dark={isDarkBg}
                      step={10}
                      single={hpExactMode}
                      exactToggle={{ checked: hpExactMode, onChange: setHpExactMode }}
                    />
                  )}

                  {!!retreatRange && !!retreatSel && (
                    <RangeSlider
                      label="Retreat"
                      range={retreatRange}
                      value={retreatSel}
                      onChange={setRetreatSel}
                      dark={isDarkBg}
                      step={1}
                      single={retreatExactMode}
                      exactToggle={{ checked: retreatExactMode, onChange: setRetreatExactMode }}
                    />
                  )}

                  {!!avgPriceRange && !!avgPriceSel && (
                    <RangeSlider
                      label="Cardmarket Avg Sell Price"
                      range={avgPriceRange}
                      value={avgPriceSel}
                      onChange={setAvgPriceSel}
                      dark={isDarkBg}
                      step={0.5}
                      format={(n) => `$${n.toFixed(2)}`}
                    />
                  )}

                  {/* Legalities (values) */}
                  {!!filters.legalities?.standard?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Standard (Legalities)</label>
                      <MultiSelect
                        values={legalStd}
                        onChange={setLegalStd}
                        options={(filters.legalities?.standard || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}
                  {!!filters.legalities?.expanded?.length && (
                    <div>
                      <label className="block text	sm font-medium mb-1.5">Expanded (Legalities)</label>
                      <MultiSelect
                        values={legalExp}
                        onChange={setLegalExp}
                        options={(filters.legalities?.expanded || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}
                  {!!filters.legalities?.unlimited?.length && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Unlimited (Legalities)</label>
                      <MultiSelect
                        values={legalUnl}
                        onChange={setLegalUnl}
                        options={(filters.legalities?.unlimited || []).map(x => ({ value: x, label: x }))}
                        dark={isDarkBg}
                      />
                    </div>
                  )}

                  {/* Tri-state toggles */}
                  <TriState label="Ability" value={hasAbility} onChange={setHasAbility} dark={isDarkBg} />
                  <TriState label="Attack" value={hasAttack} onChange={setHasAttack} dark={isDarkBg} />

                  {/* Bottom reset (only when something is APPLIED) */}
                  <AnimatePresence initial={false}>
                    {(() => {
                      const noArrays =
                        applied.types.length === 0 &&
                        applied.supertypes.length === 0 &&
                        applied.subtypes.length === 0 &&
                        applied.rarities.length === 0 &&
                        applied.setIds.length === 0 &&
                        applied.setSeriesList.length === 0 &&
                        applied.artists.length === 0 &&
                        applied.legalStd.length === 0 &&
                        applied.legalExp.length === 0 &&
                        applied.legalUnl.length === 0;

                      const noRanges =
                        rangesEqual(applied.hpSel, hpRange ?? null) &&
                        rangesEqual(applied.retreatSel, retreatRange ?? null) &&
                        rangesEqual(applied.avgPriceSel, avgPriceRange ?? null);

                      const noToggles = applied.hasAbility === null && applied.hasAttack === null;
                      const noQuery = !applied.query;
                      const noExact = !applied.hpExact && !applied.retreatExact;

                      const anythingApplied = !(noArrays && noRanges && noToggles && noQuery && noExact);
                      return anythingApplied ? (
                        <motion.div
                          key="reset-row"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="pt-2 relative z-50"
                        >
                          <button
                            className="w-full py-2.5 rounded-lg text-white bg-gray-500 hover:bg-gray-600 transition-colors"
                            onClick={resetAll}
                          >
                            Reset
                          </button>
                        </motion.div>
                      ) : null;
                    })()}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>

            {/* right (results) */}
            <motion.div
              className="flex flex-col p-6"
              style={{ backgroundColor: isDarkBg ? 'rgba(15,23,42,0.9)' : 'rgba(255,255,255,0.9)', flexBasis: '74%' }}
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              {/* search row (name contains) */}
              <div className="flex mb-4 gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search name…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') applySearch(); }}
                  className={`flex-1 p-3 border rounded-xl text-base transition-colors ${
                    isDarkBg ? 'bg-slate-900/60 border-slate-700 text-slate-100 focus:border-indigo-500' : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-500'
                  }`}
                />
                <button
                  onClick={applySearch}
                  className="px-4 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow"
                >
                  Go
                </button>
              </div>

              {/* results */}
              <div className="flex-1 overflow-y-auto">
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center"><p className="text-center opacity-80">Fetching cards…</p></div>
                ) : cards.length === 0 && emptyReady ? (
                  <div className="w-full h-full flex items-center justify-center"><p className="text-center opacity-80">No cards found.</p></div>
                ) : (
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(148px,1fr))] gap-4">
                    {cards.map((card) => (
                      <motion.div
                        key={card.id}
                        className={`rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${isDarkBg ? 'bg-slate-900/60' : 'bg-white'}`}
                        whileHover={{ scale: 1.02 }}
                        // ⬇️ NEW: open detail modal
                        onClick={() => setDetailId(card.id)}
                      >
                        <Image
                          src={card.images.small}
                          alt={card.name}
                          width={300}
                          height={420}
                          className="w-full h-auto rounded-md"
                        />
                        <div className="mt-2 font-semibold text-sm">{card.name}</div>
                        <div className="text-xs opacity-70">
                          {card.hp ?? ''}{card.hp ? ' HP' : ''}{card.rarity ? ` • ${card.rarity}` : ''}
                        </div>
                        <div className="text-xs opacity-70">{card.set?.name ?? card.set?.id ?? ''}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* pagination + page size */}
              <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                {totalPages > 1 ? (
                  <div className="flex flex-wrap justify-center gap-2">
                    {pageItems.map((item) =>
                      item.type === 'dots' ? (
                        <span key={item.key} className="px-2">…</span>
                      ) : (
                        <button
                          key={item.key}
                          disabled={item.value === page}
                          onClick={() => item.value && setPage(item.value)}
                          className={`px-3 py-1.5 rounded-lg transition-colors ${
                            item.value === page
                              ? 'bg-indigo-600 text-white'
                              : 'bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-700'
                          }`}
                        >
                          {item.value}
                        </button>
                      )
                    )}
                  </div>
                ) : <div />}

                <div className="flex items-center gap-2">
                  <span className="text-sm opacity-80">Page size</span>
                  <div className="flex gap-2">
                    {[20, 50, 100].map(size => (
                      <button
                        key={size}
                        className={`px-3 py-1.5 rounded-lg transition-colors ${
                          pageSize === size
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-700'
                        }`}
                        onClick={() => { setPageSize(size); setPage(1); }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {detailId && (
              <CardDetailModal
                key={detailId}
                id={detailId}
                dark={isDarkBg}
                fetchWithAuth={fetchWithAuthRef.current}
                onClose={() => setDetailId(null)}
                prefetch={selectedCard || undefined}
                /* NEW: pass prefetched history map entry for the clicked card */
                prefetchHistory={detailId ? histories[detailId] : undefined}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
