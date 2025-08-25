import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";
import axios from "axios";

/** Extend the JWT we store client-side */
interface ExtendedToken extends JWT {
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpires?: number; // ms timestamp
  idToken?: string;
  idTokenExpires?: number;     // ms timestamp
  error?: string;
  user?: { email?: string | null; name?: string | null; image?: string | null };
  userId?: string;
}

/** Decode a JWT's exp (seconds) into ms timestamp */
function decodeJwtExpiry(idToken?: string): number | undefined {
  try {
    if (!idToken) return undefined;
    const payload = JSON.parse(
      Buffer.from(idToken.split(".")[1], "base64").toString("utf8")
    );
    if (payload?.exp) return Number(payload.exp) * 1000;
  } catch {
    // ignore
  }
  return undefined;
}

/** Refresh Google tokens (access + possibly id_token) using the refresh_token */
async function refreshAccessToken(token: ExtendedToken): Promise<ExtendedToken> {
  if (!token.refreshToken) {
    // No refresh token available → force re-auth
    return { ...token, error: "NoRefreshToken" };
  }

  try {
    const url = "https://oauth2.googleapis.com/token";

    const response = await axios.post(
      url,
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const refreshed = response.data as {
      access_token: string;
      expires_in: number;
      scope?: string;
      token_type?: string;
      id_token?: string;       // present when original scope included "openid"
      refresh_token?: string;  // may be omitted; keep the old one if absent
    };

    const nextIdToken = refreshed.id_token ?? token.idToken;
    const nextIdTokenExp =
      refreshed.id_token ? decodeJwtExpiry(refreshed.id_token) : token.idTokenExpires;

    return {
      ...token,
      accessToken: refreshed.access_token,
      accessTokenExpires: Date.now() + refreshed.expires_in * 1000,
      refreshToken: refreshed.refresh_token ?? token.refreshToken,
      idToken: nextIdToken,
      idTokenExpires: nextIdTokenExp,
      error: undefined,
    };
  } catch (err) {
    console.error("Error refreshing Google tokens:", err);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

export const authOptions: NextAuthOptions = {
  // Explicitly use JWT sessions
  session: { strategy: "jwt" },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          // Ensure we get a refresh_token and OIDC id_token
          scope: "openid email profile",
          access_type: "offline",
          prompt: "consent",
          // response_type left as default "code"
        },
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/sign-in",
  },

  callbacks: {
    /** Ensure a user row exists */
    async signIn({ user }) {
      const email = typeof user.email === "string" && user.email.trim().length > 0
        ? user.email
        : undefined;

      if (!email) {
        // No usable email → deny sign-in (or redirect to error page if you prefer)
        return false;
      }

      const dbUser = await prisma.user.upsert({
        where: { email },
        create: { email },
        update: {},
        select: { id: true },
      });
      user.id = dbUser.id;
      return true;
    },

    /** Attach/refresh tokens on the JWT we store client-side */
    async jwt({ token, account, user }) {
      const t = token as ExtendedToken;

      // Initial sign-in
      if (account && user) {
        const idToken = typeof account.id_token === "string" ? account.id_token : undefined;
        const accessToken = typeof account.access_token === "string" ? account.access_token : undefined;
        const refreshToken = typeof account.refresh_token === "string" ? account.refresh_token : undefined;

        const expiresInSec =
          typeof account.expires_in === "number"
            ? account.expires_in
            : Number(account.expires_in ?? 3600);

        return {
          ...t,
          accessToken,
          accessTokenExpires: Date.now() + expiresInSec * 1000,
          refreshToken,
          idToken,
          idTokenExpires: decodeJwtExpiry(idToken),
          user,
          userId: typeof user.id === "string" ? user.id : undefined,
          error: undefined,
        };
      }

      // If tokens are still valid, return previous token
      const now = Date.now();
      const ACCESS_EXP = t.accessTokenExpires ?? 0;
      const ID_EXP = t.idTokenExpires ?? 0;

      // small buffer to refresh a bit before expiry
      const BUFFER_MS = 30_000;

      const accessValid = now + BUFFER_MS < ACCESS_EXP;
      const idValid = now + BUFFER_MS < ID_EXP || !ID_EXP; // if we don't have an id exp, don't block refresh on it

      if (accessValid && idValid) {
        return t;
      }

      // Otherwise refresh
      return await refreshAccessToken(t);
    },

    /** Expose what the client needs */
    async session({ session, token }) {
      const ext = token as ExtendedToken;

      return {
        ...session,
        user: {
          ...session.user,
          id: ext.userId,
        },
        idToken: ext.idToken,
        accessToken: ext.accessToken,
        error: ext.error,
      };
    },

    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },

  // Optional: add some logging during development
  // debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
