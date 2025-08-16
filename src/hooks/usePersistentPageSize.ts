'use client';

import { useEffect, useState } from 'react';

/**
 * Persists a pageSize value in localStorage indefinitely.
 * Usage:
 *   const [pageSize, setPageSize] = usePersistentPageSize('cards:pageSize', 20, isOpen, [20,50,100]);
 */
export default function usePersistentPageSize(
  key: string,
  defaultValue: number,
  when: boolean,
  allowed: number[] = [20, 50, 100],
) {
  const [value, setValue] = useState<number>(defaultValue);

  useEffect(() => {
    if (!when) return;
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const n = Number(raw);
        if (Number.isFinite(n) && (allowed.length ? allowed.includes(n) : true)) setValue(n);
      }
    } catch {}
  }, [key, when, allowed.join(',')]);

  useEffect(() => {
    try { localStorage.setItem(key, String(value)); } catch {}
  }, [key, value]);

  return [value, setValue] as const;
}
