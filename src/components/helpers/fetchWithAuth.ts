// src/lib/fetchWithAuth.ts
'use client';
import { getSession, signIn } from 'next-auth/react';

export async function fetchWithAuth(input: RequestInfo | URL, init?: RequestInit, opts?: { getToken?: () => string | undefined }) {
  const getTok = opts?.getToken ?? (() => undefined);

  const makeHeaders = (tok?: string): HeadersInit => {
    const base = (init && init.headers) ? (init.headers as HeadersInit) : {};
    return tok ? { ...base, authorization: `Bearer ${tok}`, Authorization: `Bearer ${tok}` } : base;
  };

  const tok1 = getTok();
  let res = await fetch(input, { ...init, headers: makeHeaders(tok1) });
  if (res.status !== 401) return res;

  try {
    const refreshed = await getSession();
    const newTok = (refreshed as any)?.idToken;
    if (newTok) {
      const retry = await fetch(input, { ...init, headers: makeHeaders(newTok) });
      if (retry.status !== 401) return retry;
    }
  } catch {}

  if (typeof window !== 'undefined') {
    await signIn(undefined, { callbackUrl: window.location.href });
  }
  return res;
}
