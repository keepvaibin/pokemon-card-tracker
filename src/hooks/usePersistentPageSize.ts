// src/hooks/usePersistentPageSize.ts
'use client';

import { useCallback, useRef, useState } from 'react';

export default function usePersistentPageSize(
  key: string,
  defaultValue: number,
  active: boolean,
  allowed: number[] = [20, 50, 100]
): [number, (n: number) => void] {
  // Read synchronously from localStorage once
  const initial = (() => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const raw = localStorage.getItem(key);
      const n = raw ? Number(JSON.parse(raw)) : NaN;
      if (allowed.includes(n)) return n;
    } catch {}
    return defaultValue;
  })();

  const [value, _setValue] = useState<number>(initial);
  const writeTimer = useRef<number | null>(null);

  const setValue = useCallback((next: number) => {
    const coerced = allowed.includes(next) ? next : defaultValue;
    _setValue((prev) => {
      if (prev === coerced) return prev;
      // write-through (debounced a tick)
      if (typeof window !== 'undefined') {
        if (writeTimer.current) window.clearTimeout(writeTimer.current);
        writeTimer.current = window.setTimeout(() => {
          try {
            localStorage.setItem(key, JSON.stringify(coerced));
          } catch {}
        }, 0);
      }
      return coerced;
    });
  }, [allowed, defaultValue, key]);

  return [active ? value : defaultValue, setValue];
}
