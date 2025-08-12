// next-auth.d.ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    idToken?: string
    // add other custom session fields here if needed
  }
}
