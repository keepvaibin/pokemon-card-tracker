import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import axios from "axios";
import type { JWT } from "next-auth/jwt";

interface ExtendedToken extends JWT {
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpires?: number;
  error?: string;
  user?: any;
  idToken?: string;
}

async function refreshAccessToken(token: ExtendedToken): Promise<ExtendedToken> {
  try {
    const url = "https://oauth2.googleapis.com/token";

    const response = await axios.post(
      url,
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken!,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const refreshedTokens = response.data;

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      // If no new refresh token is returned, fall back to old one
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      error: undefined,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          access_type: "offline",  // Important for refresh tokens
          prompt: "consent",       // Forces consent to ensure refresh token is returned once
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn({ user }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: user.email! },
      });

      if (!dbUser) {
        await prisma.user.create({
          data: { email: user.email! },
        });
      }
      return true;
    },
    async jwt({ token, account, user }) {
      const extendedToken = token as ExtendedToken;

      // Initial sign in: save tokens and expiry
      if (account && user) {
        return {
          ...extendedToken,
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + (Number(account.expires_in) || 3600) * 1000,
          refreshToken: account.refresh_token,
          user,
          idToken: account.id_token,
          error: undefined,
        };
      }

      // Return previous token if access token is still valid
      if (Date.now() < (extendedToken.accessTokenExpires ?? 0)) {
        return extendedToken;
      }

      // Access token expired, try to refresh it
      return await refreshAccessToken(extendedToken);
    },
    async session({ session, token }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user?.email! },
      });
      if (dbUser) {
        (session.user as any).id = dbUser.id;
      }

      // Pass tokens and error info to the client session
      (session as any).idToken = (token as ExtendedToken).idToken;
      (session as any).accessToken = (token as ExtendedToken).accessToken;
      (session as any).error = (token as ExtendedToken).error;

      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/dashboard";
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
