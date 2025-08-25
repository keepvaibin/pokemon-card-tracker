// components/AddToListPopup.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type List = { id: string; name: string; count?: number };

export default function AddToListPopup({
  cardId,
  dark,
  fetchWithAuth,
  onClose,
}: {
  cardId: string;
  dark: boolean;
  fetchWithAuth: typeof fetch;
  onClose: () => void;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const res = await fetchWithAuth('/api/lists', { credentials: 'same-origin' });
        if (res.ok) {
          const data = await res.json();
          if (!cancelled) setLists(Array.isArray(data?.lists) ? data.lists : []);
        } else if (!cancelled) {
          setLists([]);
        }
      } catch {
        if (!cancelled) setLists([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [fetchWithAuth]);

  const themeBox = dark ? 'bg-slate-900/95 border-slate-700' : 'bg-white border-slate-200';

  const confirm = async () => {
    if (!selected) return;
    try {
      const res = await fetchWithAuth(`/api/lists/${encodeURIComponent(selected)}/cards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ cardId }),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || `Failed (${res.status})`);
      }
      setDone(true);
      setTimeout(onClose, 550);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Failed to add card');
      }
    }

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 450, damping: 32, mass: 0.9 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/30"
      onClick={(e) => { e.stopPropagation(); onClose(); }}  // close ONLY this popup
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-[560px] max-w-[92vw] rounded-2xl border shadow-xl ${themeBox}`}
      >
        <div className="p-5 border-b border-slate-200/20 flex items-center justify-between">
          <div className="text-lg font-semibold">Add to List</div>
          <button onClick={onClose} className="text-sm opacity-70 hover:opacity-100">Close</button>
        </div>

        <div className="p-5">
          {loading ? (
            <div className="opacity-70 text-sm">Loading your lists…</div>
          ) : lists.length === 0 ? (
            <div className="opacity-80 text-sm">
              You have no lists yet. Create one in your dashboard, then come back here.
            </div>
          ) : (
            <>
              <AnimatePresence initial={false} mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-3"
                  >
                    <div className="text-sm opacity-80">Choose a list:</div>
                    <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-1">
                      {lists.map((l) => {
                        const active = selected === l.id;
                        return (
                          <button
                            key={l.id}
                            type="button"
                            onClick={() => setSelected(l.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border transition-colors ${
                              active
                                ? (dark ? 'border-indigo-500 bg-indigo-500/10' : 'border-indigo-600 bg-indigo-50')
                                : (dark ? 'border-slate-700 hover:border-slate-500' : 'border-slate-300 hover:border-slate-400')
                            }`}
                          >
                            <div className="text-left">
                              <div className="font-medium">{l.name}</div>
                              {typeof l.count === 'number' && (
                                <div className="text-xs opacity-70">{l.count} cards</div>
                              )}
                            </div>
                            <div className={`w-5 h-5 rounded-full border ${active ? (dark ? 'border-indigo-400 bg-indigo-500' : 'border-indigo-500 bg-indigo-600') : (dark ? 'border-slate-600' : 'border-slate-400')}`} />
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        disabled={!selected}
                        onClick={() => setStep(2)}
                        className={`px-4 py-2 rounded-lg text-white ${selected ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-400 cursor-not-allowed'}`}
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="text-sm opacity-80">Confirm add to list:</div>
                    <div className={`p-3 rounded-xl border ${dark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`}>
                      <div className="text-sm">List</div>
                      <div className="text-lg font-semibold">{lists.find(l => l.id === selected)?.name ?? ''}</div>
                      <div className="text-xs opacity-70 mt-1">Card ID: {cardId}</div>
                    </div>

                    {error && <div className="text-sm text-red-500">{error}</div>}
                    {done && <div className="text-sm text-green-600">Added! Closing…</div>}

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setStep(1)}
                        className={`px-4 py-2 rounded-lg ${dark ? 'bg-slate-700 text-slate-100 hover:bg-slate-600' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
                      >
                        Back
                      </button>
                      <button
                        onClick={confirm}
                        className="px-4 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Add
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
