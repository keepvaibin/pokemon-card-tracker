// lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { OAuth2Client } from "google-auth-library";

const clientId = process.env.GOOGLE_CLIENT_ID!;
const client = new OAuth2Client(clientId);

export type AuthContext = {
  email?: string | null;
  sub?: string | null;
  source?: "session" | "id_token";
};

/**
 * Authorize a request using EITHER:
 *  1) NextAuth session cookie (server-side validation), or
 *  2) Google ID token in Authorization: Bearer <id_token> (verified via Google)
 *
 * Returns minimal identity or null if unauthorized.
 */
export async function verifyGoogleIdToken(bearer?: string | null): Promise<AuthContext | null> {
  // 1) Prefer the NextAuth server session (no headers required)
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    return {
      email: session.user.email,
      sub: (session as { sub?: string })?.sub ?? null,
      source: "session",
    };
  }

  // 2) Fallback: verify Google ID token from Authorization header
  if (!bearer || !bearer.startsWith("Bearer ")) return null;
  const token = bearer.slice("Bearer ".length).trim();
  if (!token) return null;

  try {
    const ticket = await client.verifyIdToken({ idToken: token, audience: clientId });
    const payload = ticket.getPayload();
    if (!payload) return null;

    const iss = payload.iss;
    if (iss !== "accounts.google.com" && iss !== "https://accounts.google.com") return null;

    return { email: payload.email ?? null, sub: payload.sub ?? null, source: "id_token" };
  } catch {
    return null;
  }
}
