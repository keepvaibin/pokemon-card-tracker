// src/components/ClientSessionProvider.tsx
"use client";

import { SessionProvider, useSession, getSession } from "next-auth/react";
import { useEffect, useRef } from "react";

/**
 * Refreshes the NextAuth session ~1 minute before access token expiry
 * (you must attach accessTokenExpires (ms epoch) to the session in your NextAuth callbacks).
 */
function SessionRefresher() {
  const { data: session } = useSession();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const exp = (session as { accessTokenExpires?: number } | null)?.accessTokenExpires;
    if (!exp) return;

    const BUFFER_MS = 60_000; // refresh 1 min early
    const delay = Math.max(0, exp - BUFFER_MS - Date.now());

    timerRef.current = window.setTimeout(() => {
      void getSession();
    }, delay);

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
    <SessionProvider refetchOnWindowFocus={false} refetchInterval={0}>
      <SessionRefresher />
      {children}
    </SessionProvider>
  );
}
