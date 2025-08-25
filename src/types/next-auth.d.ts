import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    idToken?: string;
    // keep user typed the same as the default session
    user?: DefaultSession["user"];
  }
}
