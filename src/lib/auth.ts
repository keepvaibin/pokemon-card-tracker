// lib/auth.ts
import { OAuth2Client } from "google-auth-library";

const clientId = process.env.GOOGLE_CLIENT_ID!;
const client = new OAuth2Client(clientId);

export async function verifyGoogleIdToken(bearer?: string) {
  if (!bearer || !bearer.startsWith("Bearer ")) return null;
  const token = bearer.slice("Bearer ".length);
  try {
    const ticket = await client.verifyIdToken({ idToken: token, audience: clientId });
    const payload = ticket.getPayload();
    if (!payload) return null;
    const iss = payload.iss;
    if (iss !== "accounts.google.com" && iss !== "https://accounts.google.com") return null;
    return payload;
  } catch {
    return null;
  }
}
