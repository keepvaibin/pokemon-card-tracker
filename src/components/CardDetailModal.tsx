// components/CardDetailModal.tsx
'use client';

import React, {
  useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useId,
} from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import AddToListPopup from '@/components/AddToListPopup';
import Image from "next/image";

type FullPrice = { market?: number; mid?: number; low?: number; high?: number };

type HistoryValueKey = keyof Pick<
  HistoryEntry,
  | "tcgplayer_normal_market"
  | "tcgplayer_holofoil_market"
  | "tcgplayer_reverse_holofoil_market"
  | "cardmarket_average_sell_price"
>;


export type FullCard = {
  id: string;
  name: string;
  number?: string;
  rarity?: string | null;
  hp?: string | null;
  supertype?: string | null;
  subtypes?: string[];
  types?: string[];
  evolvesFrom?: string | null;
  evolvesTo?: string[];
  rules?: string[];
  flavorText?: string | null;
  artist?: string | null;
  legalities?: Record<string, string>;
  images: { small: string; large?: string };
  set?: { id?: string; name?: string; series?: string; legalities?: Record<string,string> };
  abilities?: Array<{ name: string; text: string; type?: string }>;
  attacks?: Array<{ name: string; text?: string; damage?: string; cost?: string[] }>;
  weaknesses?: Array<{ type: string; value: string }>;
  resistances?: Array<{ type: string; value: string }>;
  retreatCost?: string[];
  convertedRetreatCost?: number | null;

  cardmarket?: {
    averageSellPrice?: number;
    avg1?: number;
    avg7?: number;
    avg30?: number;
  };

  tcgplayer?: { prices?: Record<string, FullPrice> };
};

type HistoryEntry = {
  cardId: string;
  time: string; // ISO
  tcgplayer_normal_market: number | null;
  tcgplayer_holofoil_market: number | null;
  tcgplayer_reverse_holofoil_market: number | null;
  cardmarket_average_sell_price: number | null;
  no_tcgplayer_prices: boolean;
};

// ---- Series keys/labels
const SERIES_KEYS = [
  'tcgplayer_holofoil_market',
  'tcgplayer_reverse_holofoil_market',
  'tcgplayer_normal_market',
  'cardmarket_average_sell_price',
] as const;

const SERIES_LABELS: Record<typeof SERIES_KEYS[number], string> = {
  tcgplayer_holofoil_market: 'TCGplayer Holofoil Market',
  tcgplayer_reverse_holofoil_market: 'TCGplayer Reverse Holo Market',
  tcgplayer_normal_market: 'TCGplayer Normal Market',
  cardmarket_average_sell_price: 'Cardmarket Avg. Selling Price',
};

// ---- Dropdown (extracted so it doesn’t remount on parent renders)
function SeriesDropdown({
  value, onChange, options, labelMap, dark, theme,
}: {
  value: typeof SERIES_KEYS[number];
  onChange: (v: typeof SERIES_KEYS[number]) => void;
  options: Array<typeof SERIES_KEYS[number]>;
  labelMap: Record<typeof SERIES_KEYS[number], string>;
  dark: boolean;
  theme: { pop: string; popHover: string };
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  const openNow = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 150); // hover intent delay
  };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className={`text-sm rounded-lg px-2.5 py-1.5 border shadow-sm transition-colors ${
          dark ? 'bg-slate-900/70 border-slate-700 text-slate-100 hover:border-indigo-400'
               : 'bg-white border-slate-300 text-slate-900 hover:border-indigo-500'
        }`}
      >
        {labelMap[value]}
      </button>

      {/* hover guard bridging the gap */}
      {open && (
        <div aria-hidden className="absolute left-0 right-0 top-full h-2" style={{ pointerEvents: 'auto' }} />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.12 }}
            className={`absolute right-0 top-full mt-2 min-w-[240px] rounded-xl border ${theme.pop} shadow-2xl overflow-hidden z-[30]`}
            role="listbox"
          >
            <div className="p-2 grid gap-1">
              {options.map(k => (
                <button
                  key={k}
                  type="button"
                  role="option"
                  aria-selected={value === k}
                  onClick={() => { onChange(k); setOpen(false); }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm ${theme.popHover}`}
                >
                  {labelMap[k]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---- Line chart (area reveal tied to line pathLen; re-animates on series change)
function LineChart({
  pts, xMin, xMax, dark,
}: { pts: Array<{x: Date; y: number}>; xMin: number; xMax: number; dark: boolean }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(600);
  const uid = useId();

  const H = 280;
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el);
    setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const leftPad = 64, rightPad = 12, bottomPad = 36, topPad = 32;
  const innerW = Math.max(1, w - leftPad - rightPad);
  const innerH = Math.max(1, H - topPad - bottomPad);

  const yMin = 0;
  const yMaxData = pts.length ? Math.max(...pts.map(p => p.y)) : 1;
  const yMax = Math.max(1, yMaxData * 1.2);

  const xToPx = (t: number) =>
    leftPad + ((t - xMin) / Math.max(1, xMax - xMin)) * innerW;
  const yToPx = (v: number) =>
    topPad + (1 - (v - yMin) / Math.max(1e-9, yMax - yMin)) * innerH;

  const d = pts
    .map((p, i) => `${i ? 'L' : 'M'} ${xToPx(p.x.getTime()).toFixed(2)} ${yToPx(p.y).toFixed(2)}`)
    .join(' ');
  const areaPath = pts.length > 1
    ? `${d} L ${xToPx(pts[pts.length - 1].x.getTime())} ${yToPx(0)} L ${xToPx(pts[0].x.getTime())} ${yToPx(0)} Z`
    : '';

  // ticks
  const makeDateTicks = (min: number, max: number, maxTicks = 5) => {
    if (min >= max) return [min, max];
    const want = Math.max(2, Math.min(maxTicks, 5));
    const ticks: number[] = [];
    for (let i = 0; i < want; i++)
      ticks.push(min + Math.round((i / (want - 1)) * (max - min)));
    const fmt = (t: number) => new Date(t).toISOString().slice(0, 10);
    const out: number[] = [];
    let last: string | null = null;
    for (let i = 0; i < ticks.length; i++) {
      const lab = fmt(ticks[i]);
      if (i === 0 || i === ticks.length - 1 || lab !== last) {
        out.push(ticks[i]);
        last = lab;
      }
    }
    if (out[0] !== min) out.unshift(min);
    if (out[out.length - 1] !== max) out.push(max);
    while (out.length > 5) out.splice(2, 1);
    return out;
  };
  const xtRaw = makeDateTicks(xMin, xMax, 5);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);

  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
    const mx = e.clientX - rect.left;
    if (!pts.length) { setHoverIdx(null); return; }
    const rel = Math.min(1, Math.max(0, (mx - leftPad) / innerW));
    const mxTime = xMin + rel * (xMax - xMin);
    let best = 0, bestDist = Infinity;
    for (let i = 0; i < pts.length; i++) {
      const d = Math.abs(pts[i].x.getTime() - mxTime);
      if (d < bestDist) { best = i; bestDist = d; }
    }
    setHoverIdx(best);
  };
  const onLeave = () => setHoverIdx(null);

  const cursorX = hoverIdx != null ? xToPx(pts[hoverIdx].x.getTime()) : null;
  const cursorY = hoverIdx != null ? yToPx(pts[hoverIdx].y) : null;

  // --- Animation values
  const pathLen = useMotionValue(0);     // drives the line stroke
  const clipW = useMotionValue(0);       // drives the area reveal (in X)
  const animDoneRef = useRef(false);

  // We derive clip width from the line's ACTUAL head X along the path:
  const pathRef = useRef<SVGPathElement | null>(null);
  const totalLenRef = useRef<number>(0);

  // Subscribe line progress -> compute head X via getPointAtLength -> update clipW
  useEffect(() => {
    const unsub = pathLen.on('change', (t) => {
      const path = pathRef.current;
      const total = totalLenRef.current;
      if (!path || !total) return;
      const pt = path.getPointAtLength(total * t);
      // Width: clamp to the chart inner bounds
      const wX = Math.min(innerW, Math.max(0, pt.x - leftPad));
      clipW.set(wX);
    });
    return () => unsub();
  }, [clipW, innerW, leftPad, pathLen]);

  // Measure the path and run the animation once per mount (we remount on series change)
  useEffect(() => {
    // delay to ensure DOM path exists with final "d"
    requestAnimationFrame(() => {
      if (pathRef.current) {
        try {
          totalLenRef.current = pathRef.current.getTotalLength();
        } catch {
          totalLenRef.current = 0;
        }
      }
      animDoneRef.current = false;
      pathLen.set(0);
      clipW.set(0);
      const stop = animate(pathLen, 1, { duration: 2.0, ease: [0.4, 0, 0.2, 1] });
      const doneTimer = window.setTimeout(() => { animDoneRef.current = true; clipW.set(innerW); }, 2050);
      return () => { stop.stop(); clearTimeout(doneTimer); };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mount/remount only

  // After animation finishes, keep the area fully revealed on resize
  useEffect(() => {
    if (!animDoneRef.current) return;
    clipW.set(innerW);
  }, [innerW, clipW]);

  return (
    <div ref={wrapRef} className="w-full">
      <svg width="100%" height={H} role="img" onMouseMove={onMove} onMouseLeave={onLeave}>
        <defs>
          <linearGradient id={`${uid}-grad`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopOpacity="0.22" stopColor={dark ? '#a5b4fc' : '#4f46e5'} />
            <stop offset="100%" stopOpacity="0" stopColor={dark ? '#a5b4fc' : '#4f46e5'} />
          </linearGradient>
          {/* Clip rectangle revealed up to the line head X */}
          <clipPath id={`${uid}-clip`}>
            <motion.rect
              initial={false}
              x={leftPad}
              y={topPad}
              height={innerH}
              width={clipW}
            />
          </clipPath>
        </defs>

        {/* y labels */}
        <text x={10} y={topPad + innerH} fontSize="12" className="fill-current opacity-70" dominantBaseline="central">
          ${yMin.toFixed(2)}
        </text>
        <text x={10} y={topPad + 4} fontSize="12" className="fill-current opacity-70" dominantBaseline="hanging">
          ${yMax.toFixed(2)}
        </text>

        {/* x ticks */}
        {xtRaw.map((t, i) => {
          const X = xToPx(t);
          const date = new Date(t);
          return (
            <g key={i}>
              <line x1={X} x2={X} y1={topPad} y2={topPad + innerH}
                    stroke={dark ? 'rgba(148,163,184,0.12)' : 'rgba(15,23,42,0.06)'} />
              <text x={X} y={topPad + innerH + 18} fontSize="11" textAnchor="middle"
                    className="fill-current opacity-70">{fmt(date)}</text>
            </g>
          );
        })}

        {/* area + line (revealed together) */}
        {pts.length > 1 && (
          <>
            <path
              d={areaPath}
              fill={`url(#${uid}-grad)`}
              clipPath={`url(#${uid}-clip)`}
              opacity={0.9}
            />
            <motion.path
              ref={pathRef}
              d={d}
              initial={false}
              style={{ pathLength: pathLen }}
              fill="none"
              stroke={dark ? '#a5b4fc' : '#4f46e5'}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}

        {/* single point */}
        {pts.length === 1 && (
          <circle cx={xToPx(pts[0].x.getTime())} cy={yToPx(pts[0].y)} r="5" fill={dark ? '#a5b4fc' : '#4f46e5'} />
        )}

        {/* dots */}
        {pts.map((p, i) => (
          <circle key={i} cx={xToPx(p.x.getTime())} cy={yToPx(p.y)} r="3.8" fill={dark ? '#a5b4fc' : '#4f46e5'} />
        ))}

        {/* hover marker */}
        {hoverIdx != null && cursorX != null && cursorY != null && (
          <>
            <line x1={cursorX} x2={cursorX} y1={topPad} y2={topPad + innerH}
                  stroke={dark ? 'rgba(99,102,241,0.6)' : 'rgba(79,70,229,0.6)'} strokeDasharray="3 4" />
            <circle cx={cursorX} cy={cursorY} r="5" fill={dark ? '#a5b4fc' : '#4f46e5'} />
            <g transform={`translate(${Math.min(w - 170, Math.max(10, cursorX + 8))}, ${Math.max(10, cursorY - 35)})`}>
              <rect width="160" height="42" rx="8"
                    fill={dark ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.95)'}
                    stroke={dark ? 'rgba(99,102,241,0.35)' : 'rgba(79,70,229,0.25)'} />
              <text x={10} y={17} fontSize="12" className="fill-current opacity-80">
                {new Date(pts[hoverIdx].x).toISOString().slice(0,10)}
              </text>
              <text x={10} y={32} fontSize="12" className="fill-current font-medium">
                ${pts[hoverIdx].y.toFixed(2)}
              </text>
            </g>
          </>
        )}
      </svg>
    </div>
  );
}


export default function CardDetailModal({
  id,
  dark,
  fetchWithAuth,
  onClose,
  prefetch,
  prefetchHistory,
}: {
  id: string;
  dark: boolean;
  fetchWithAuth: typeof fetch;
  onClose: () => void;
  prefetch?: Partial<FullCard> | null;
  prefetchHistory?: HistoryEntry[];
}) {
  const [card, setCard] = useState<FullCard | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    if (prefetch && prefetch.id === id) {
      setCard((prev) => prev ?? (prefetch as FullCard));
    }
  }, [prefetch, id]);

  const needsDetails = useMemo(() => {
    if (!prefetch || prefetch.id !== id) return true;
    const p = prefetch as FullCard;
    const missingAttacks = !(p.attacks && p.attacks.length);
    const missingAbilities = !(p.abilities && p.abilities.length);
    const missingLarge = !(p.images && p.images.large);
    const missingTCG = !(p.tcgplayer && p.tcgplayer.prices && Object.keys(p.tcgplayer.prices).length);
    return missingAttacks || missingAbilities || missingLarge || missingTCG;
  }, [prefetch, id]);

  // Stable fetch ref so we don't refetch on focus when function identity changes
  const fetchWithAuthRef = useRef(fetchWithAuth);
  useEffect(() => { fetchWithAuthRef.current = fetchWithAuth; }, [fetchWithAuth]);

  useEffect(() => {
    if (!needsDetails) return;
    let cancelled = false;
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetchWithAuthRef.current(`/api/cards/${id}`, {
          credentials: 'same-origin',
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = await res.json();
        if (!cancelled) setCard(data as FullCard);
      } catch (e: unknown) {
        // ignore user-initiated aborts
        if (e instanceof DOMException && e.name === 'AbortError') return;
        if (!cancelled) {
          const msg = e instanceof Error ? e.message : 'Failed to load card';
          setError(msg);
        }
      }
    })();
    return () => { cancelled = true; controller.abort(); };
  }, [id, needsDetails]);

  const theme = dark ? {
    shell: 'bg-slate-900/95 border-slate-700',
    panel: 'bg-slate-950/40',
    chip: 'bg-slate-800/70',
    chipBorder: 'border-slate-700/70',
    textMuted: 'text-slate-300/80',
    border: 'border-slate-700',
    subtle: 'text-slate-400',
    divider: 'border-slate-700/70',
    headerBg: 'from-slate-900/95 to-slate-900/60',
    pop: 'bg-slate-900/90 border-slate-700',
    popHover: 'hover:bg-slate-800',
  } : {
    shell: 'bg-white border-slate-200',
    panel: 'bg-slate-50',
    chip: 'bg-slate-50',
    chipBorder: 'border-slate-200',
    textMuted: 'text-slate-600',
    border: 'border-slate-200',
    subtle: 'text-slate-500',
    divider: 'border-slate-200',
    headerBg: 'from-white to-slate-50',
    pop: 'bg-white/95 border-slate-300',
    popHover: 'hover:bg-slate-100',
  };

  const base: FullCard | undefined = card ?? (prefetch ? (prefetch as FullCard) : undefined);

  const history = useMemo(
    () => (prefetchHistory ?? []).slice().sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()),
    [prefetchHistory]
  );

  const availableSeries = useMemo(() => {
    const avail: Array<typeof SERIES_KEYS[number]> = [];
    for (const k of SERIES_KEYS) if (history.some(h => h[k as HistoryValueKey] != null)) avail.push(k);
    return avail;
  }, [history]);

  const preferredDefault = useMemo(
    () => SERIES_KEYS.find(k => availableSeries.includes(k)) ?? availableSeries[0] ?? 'cardmarket_average_sell_price',
    [availableSeries]
  );

  const [seriesKey, setSeriesKey] = useState<typeof SERIES_KEYS[number]>(preferredDefault);
  useEffect(() => {
    if (!availableSeries.includes(seriesKey)) setSeriesKey(preferredDefault);
  }, [availableSeries, preferredDefault, seriesKey]);

  const points = useMemo(
    () =>
      history
        .map(h => ({ x: new Date(h.time), y: h[seriesKey as HistoryValueKey] }))
        .filter(p => p.y != null) as Array<{ x: Date; y: number }>,
    [history, seriesKey]
  );

  const xDomain = useMemo(() => {
    if (!history.length) return { xMin: 0, xMax: 1 };
    const ts = history.map(h => new Date(h.time).getTime());
    return { xMin: Math.min(...ts), xMax: Math.max(...ts) };
  }, [history]);

  // header price & links reflect selected series
  const headerSeriesLabel = SERIES_LABELS[seriesKey];
  const headerPrice = points.length ? points[points.length - 1].y : null;
  const headerPriceStr = headerPrice != null ? `$${headerPrice.toFixed(2)}` : 'N/A';
  const tcgUrl = `https://prices.pokemontcg.io/tcgplayer/${id}`;
  const cmUrl  = `https://prices.pokemontcg.io/cardmarket/${id}`;
  const activeUrl = seriesKey === 'cardmarket_average_sell_price' ? cmUrl : tcgUrl;
  const activeUrlLabel = seriesKey === 'cardmarket_average_sell_price' ? 'Open on Cardmarket' : 'Open on TCGplayer';

  const headerSubtitle = useMemo(() => {
    if (!base) return '';
    const parts: string[] = [];
    if (base.set?.series) parts.push(base.set.series);
    if (base.set?.name || base.set?.id) parts.push(base.set?.name || base.set?.id || '');
    if (base.number) parts.push(`#${base.number}`);
    return parts.filter(Boolean).join(' • ');
  }, [base]);

  const attrBlocks = useMemo(() => {
    if (!base) return [] as Array<{ label: string; value: string }>;
    const items: Array<{ label: string; value: string }> = [];
    if (base.hp) items.push({ label: 'HP', value: base.hp });
    if (base.rarity) items.push({ label: 'Rarity', value: String(base.rarity) });
    if (base.types?.length) items.push({ label: 'Types', value: base.types.join(', ') });
    if (base.subtypes?.length) items.push({ label: 'Subtypes', value: base.subtypes.join(', ') });
    const retreatNum = (typeof base.convertedRetreatCost === 'number' ? base.convertedRetreatCost : (base.retreatCost?.length ?? 0));
    if (retreatNum) {
      const txt = base.retreatCost?.length ? `(${base.retreatCost.join(', ')})` : '';
      items.push({ label: 'Retreat', value: `${retreatNum} ${txt}`.trim() });
    }
    if (base.artist) items.push({ label: 'Artist', value: base.artist });
    return items;
  }, [base]);

  const imgNatural = useRef<{w:number;h:number}|null>(null);
  const [modalHeight, setModalHeight] = useState<number | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [footerH, setFooterH] = useState(0);

  useLayoutEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setFooterH(el.clientHeight));
    ro.observe(el);
    setFooterH(el.clientHeight);
    return () => ro.disconnect();
  }, []);

  const recomputeHeight = useCallback(() => {
    const nat = imgNatural.current;
    const vw = typeof window !== 'undefined' ? window.innerWidth : 1280;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 720;
    if (!nat) { setModalHeight(Math.round(vh * 0.68)); return; }
    const modalW = 0.60 * vw;
    const panelW = 0.42 * modalW - 32;
    const scale = Math.max(0, panelW / nat.w);
    const renderedImgH = Math.min(nat.h * scale, vh * 0.9 - 32);
    const desired = Math.min(Math.max(420, renderedImgH + 32), vh * 0.92);
    setModalHeight(Math.round(desired));
  }, []);

  useEffect(() => {
    const onResize = () => recomputeHeight();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [recomputeHeight]);

  const label = (s: string) => <div className="text-[11px] uppercase tracking-wide opacity-60">{s}</div>;
  const isLoading = !error && (!base || (needsDetails && !card));

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={(e) => { e.stopPropagation(); onClose(); }}
    >
      <motion.div
        initial={{ scale: 0.96, y: 8, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.98, y: 8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 36, mass: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className={`w-[60vw] rounded-2xl overflow-hidden border shadow-2xl flex relative ${theme.shell}`}
        style={{ height: modalHeight ?? '68vh' }}
      >
        {/* Loading overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 z-[5] flex items-center justify-center"
              style={{ background: dark ? 'rgba(2,6,23,0.7)' : 'rgba(255,255,255,0.75)' }}
            >
              <div className="text-base font-medium opacity-90">Loading card…</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LEFT: image */}
        <div className={`w-[42%] h-full ${theme.panel} flex items-center justify-center p-4`}>
          {!base ? (
            <div className="opacity-70 text-sm">—</div>
          ) : (
            <Image
              src={base.images.large || base.images.small}
              alt={base.name}
              width={500}
              height={700}
              className="h-full w-auto rounded-xl object-contain shadow"
              onLoadingComplete={(el) => {
                imgNatural.current = { w: el.naturalWidth, h: el.naturalHeight };
                recomputeHeight();
              }}
            />
          )}
        </div>

        {/* RIGHT: details */}
        <div className="flex-1 overflow-y-auto relative">
          {/* Sticky header */}
          <div className={`px-6 pt-5 pb-3 bg-gradient-to-b ${theme.headerBg} border-b ${theme.border}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-2xl font-semibold truncate">{base?.name ?? '—'}</div>
                {headerSubtitle && <div className={`text-sm ${theme.subtle} mt-0.5 truncate`}>{headerSubtitle}</div>}
              </div>

              <div className="text-right shrink-0">
                <div className="text-[11px] uppercase tracking-wide opacity-60">{headerSeriesLabel}</div>
                <div className="text-xl font-semibold">{headerPriceStr}</div>
                <div className="mt-1">
                  <a
                    href={activeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-block text-xs px-2 py-1 rounded-md border transition-colors ${
                      dark
                        ? 'border-slate-700 text-slate-200 hover:border-indigo-400'
                        : 'border-slate-300 text-slate-800 hover:border-indigo-500'
                    }`}
                  >
                    {activeUrlLabel}
                  </a>
                </div>
              </div>
            </div>

            {/* Chart card */}
            <div
              className="mt-3 rounded-xl border overflow-hidden relative px-3 pt-14 pb-2"
              style={{ borderColor: dark ? 'rgba(99,70,241,.35)' : 'rgba(79,70,229,.25)' }}
            >
              <div className="absolute right-3 top-2 z-[31]">
                <SeriesDropdown
                  value={seriesKey}
                  onChange={(v) => setSeriesKey(v)}
                  options={availableSeries}
                  labelMap={SERIES_LABELS}
                  dark={dark}
                  theme={{ pop: theme.pop, popHover: theme.popHover }}
                />
              </div>

              {points.length > 0 ? (
                // Re-animate on series change by remounting just the chart
                <LineChart key={seriesKey} pts={points} xMin={xDomain.xMin} xMax={xDomain.xMax} dark={dark} />
              ) : (
                <div className="h-[280px] flex items-center justify-center text-sm opacity-70">
                  No data for this series.
                </div>
              )}
            </div>
          </div>

          {/* Body (padding bottom matches sticky footer height) */}
          <div className="px-6 pt-4 space-y-6" style={{ paddingBottom: footerH + 16 }}>
            {/* Attributes */}
            {attrBlocks.length > 0 && (
              <section>
                <div className="grid grid-cols-2 gap-4">
                  {attrBlocks.map((it) => (
                    <div key={it.label} className="p-3 rounded-xl border bg-transparent"
                         style={{ borderColor: dark ? 'rgba(148,163,184,.16)' : 'rgba(15,23,42,.06)' }}>
                      {label(it.label)}
                      <div className="text-sm mt-1">{it.value}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Evolutions */}
            {(base?.evolvesFrom || (base?.evolvesTo && base.evolvesTo.length > 0)) && (
              <section>
                <div className="text-sm font-semibold mb-2">Evolutions</div>
                <div className="grid grid-cols-2 gap-4">
                  {base?.evolvesFrom && (
                    <div className="p-3 rounded-xl border"
                         style={{ borderColor: dark ? 'rgba(148,163,184,.16)' : 'rgba(15,23,42,.06)' }}>
                      {label('Evolves From')}
                      <div className="text-sm mt-1">{base.evolvesFrom}</div>
                    </div>
                  )}
                  {!!base?.evolvesTo?.length && (
                    <div className="p-3 rounded-xl border"
                         style={{ borderColor: dark ? 'rgba(148,163,184,.16)' : 'rgba(15,23,42,.06)' }}>
                      {label('Evolves To')}
                      <div className="text-sm mt-1">{base.evolvesTo.join(', ')}</div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Abilities */}
            {!!base?.abilities?.length && (
              <section>
                <div className="text-sm font-semibold mb-2">Abilities</div>
                <div className="space-y-2">
                  {base!.abilities!.map((a, i) => (
                    <div key={i} className={`p-3 rounded-lg border ${theme.chipBorder} ${theme.chip}`}>
                      <div className="text-sm font-medium">{a.name}</div>
                      {a.type && <div className="text-xs opacity-60">{a.type}</div>}
                      {a.text && <div className="text-sm mt-1">{a.text}</div>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Attacks */}
            {!!base?.attacks?.length && (
              <section>
                <div className="text-sm font-semibold mb-2">Attacks</div>
                <div className="space-y-2">
                  {base!.attacks!.map((a, i) => (
                    <div key={i} className={`p-3 rounded-lg border ${theme.chipBorder} ${theme.chip}`}>
                      <div className="text-sm font-medium flex items-center justify-between gap-3">
                        <span>{a.name}{a.damage ? ` — ${a.damage}` : ''}</span>
                        {!!a.cost?.length && <span className="text-xs opacity-70">Cost: {a.cost.join(', ')}</span>}
                      </div>
                      {a.text && <div className="text-sm mt-1">{a.text}</div>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Modifiers */}
            {(!!base?.weaknesses?.length || !!base?.resistances?.length) && (
              <section>
                <div className="text-sm font-semibold mb-2">Battle Modifiers</div>
                <div className="grid grid-cols-2 gap-4">
                  {!!base?.weaknesses?.length && (
                    <div className="p-3 rounded-xl border"
                         style={{ borderColor: dark ? 'rgba(148,163,184,.16)' : 'rgba(15,23,42,.06)' }}>
                      {label('Weaknesses')}
                      <div className="text-sm mt-1">{base!.weaknesses!.map(w => `${w.type} ${w.value}`).join(', ')}</div>
                    </div>
                  )}
                  {!!base?.resistances?.length && (
                    <div className="p-3 rounded-xl border"
                         style={{ borderColor: dark ? 'rgba(148,163,184,.16)' : 'rgba(15,23,42,.06)' }}>
                      {label('Resistances')}
                      <div className="text-sm mt-1">{base!.resistances!.map(r => `${r.type} ${r.value}`).join(', ')}</div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Flavor */}
            {base?.flavorText && (
              <section>
                <div className="text-sm font-semibold mb-2">Flavor Text</div>
                <div className="text-sm italic opacity-90">{base.flavorText}</div>
              </section>
            )}

            {/* TCGplayer Prices */}
            {!!(base?.tcgplayer?.prices) && Object.keys(base!.tcgplayer!.prices!).length > 0 && (
              <section>
                <div className="text-sm font-semibold mb-2">TCGplayer Prices</div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(base!.tcgplayer!.prices!).map(([k, v]) => {
                    const parts: string[] = [];
                    if (typeof v?.market === 'number') parts.push(`M $${v.market.toFixed(2)}`);
                    if (typeof v?.mid === 'number') parts.push(`Md $${v.mid.toFixed(2)}`);
                    if (typeof v?.low === 'number') parts.push(`L $${v.low.toFixed(2)}`);
                    if (typeof v?.high === 'number') parts.push(`H $${v.high.toFixed(2)}`);
                    if (parts.length === 0) return null;
                    return (
                      <div key={k} className={`text-xs px-2.5 py-1 rounded-full border ${theme.chipBorder} ${theme.chip}`}>
                        <span className="font-medium">{k}</span>: {parts.join(' · ')}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sticky footer: + Add Card */}
          <div
            ref={footerRef}
            className={`sticky bottom-0 px-6 pb-4 pt-3 border-t ${
              dark ? 'border-slate-700 bg-slate-900/90' : 'border-slate-200 bg-white/90'
            } backdrop-blur supports-[backdrop-filter]:backdrop-blur-md`}
          >
            {base && (
              <>
                <button
                  onClick={() => setShowAdd(s => !s)}
                  className="w-full py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  + Add Card
                </button>

                <AnimatePresence>
                  {showAdd && (
                    <AddToListPopup
                      cardId={base.id}
                      dark={dark}
                      fetchWithAuth={fetchWithAuth}
                      onClose={() => setShowAdd(false)}
                    />
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
