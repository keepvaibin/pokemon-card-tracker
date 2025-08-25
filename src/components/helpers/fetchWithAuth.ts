// 'use client' module: typed, lint-clean fetch wrapper with 401 refresh.
'use client';
import { getSession, signIn } from 'next-auth/react';

type GetTok = () => string | undefined;

function cleanseHeaders(init?: RequestInit): Headers {
  const base: HeadersInit = init?.headers ?? {};
  // Normalize to Headers so deletes are case-insensitive
  const h = new Headers(base);
  h.delete('authorization');
  h.delete('Authorization');
  return h;
}

export default async function fetchWithAuth(
  input: RequestInfo | URL,
  init: RequestInit = {},
  getIdToken?: GetTok
): Promise<Response> {
  const makeHeaders = (tok?: string): HeadersInit => {
    const h = cleanseHeaders(init);
    const t =
      tok ??
      getIdToken?.() ??
      (init as unknown as { idToken?: string })?.idToken;
    if (t) h.set('Authorization', `Bearer ${t}`);
    return h;
  };

  const res = await fetch(input, { ...init, headers: makeHeaders() });
  if (res.status !== 401) return res;

  try {
    const refreshed = await getSession();
    const newTok = (refreshed as { idToken?: string } | null)?.idToken;
    if (newTok) {
      const retry = await fetch(input, { ...init, headers: makeHeaders(newTok) });
      if (retry.status !== 401) return retry;
    }
  } catch {
    // ignore
  }

  if (typeof window !== 'undefined') {
    await signIn(undefined, { callbackUrl: window.location.href });
  }
  return res;
}
