"use client";

import { SessionProvider, useSession, signIn } from "next-auth/react";
import { ReactNode, useEffect } from "react";

function SessionRefresher() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    const accessTokenExpires = (session as any).accessTokenExpires;
    if (!accessTokenExpires) return;

    const now = Date.now();

    // If token expires in less than 1 minute, trigger refresh
    if (now > accessTokenExpires - 60 * 1000) {
      signIn(undefined, { redirect: false });
    }
  }, [session]);

  return null;
}

export function ClientSessionProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <SessionRefresher />
      {children}
    </SessionProvider>
  );
}
