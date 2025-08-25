// src/components/ClientSessionProvider.tsx
"use client";

import { SessionProvider, useSession, getSession } from "next-auth/react";
import { useEffect, useRef } from "react";

function SessionRefresher() {
  const { data: session } = useSession();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // clear any previous timer
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // read ms epoch you attach in session() callback
    const exp = (session as { accessTokenExpires?: number } | null)?.accessTokenExpires;
    if (!exp) return;

    const BUFFER_MS = 60_000; // refresh 1 min early
    const delay = Math.max(0, exp - BUFFER_MS - Date.now());

    // schedule one-shot silent refresh
    timerRef.current = window.setTimeout(() => {
      void getSession();
    }, delay);

    // also refresh when tab becomes visible and near/over expiry
    const onVisibility = () => {
      if (document.visibilityState === "visible" && Date.now() > exp - BUFFER_MS) {
        void getSession();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [session]);

  return null;
}

export function ClientSessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider
      refetchOnWindowFocus={false}
      refetchInterval={0}
    >
      <SessionRefresher />
      {children}
    </SessionProvider>
  );
}
