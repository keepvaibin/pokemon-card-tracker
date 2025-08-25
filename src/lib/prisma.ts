// src/lib/prisma.ts
import { PrismaClient } from "../../generated/user";

// Create a typed handle to globalThis so TS knows about `prisma`.
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // Keep logs tame; remove "query" to avoid noisy consoles & perf hit.
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : [],
  });

// Persist the client in dev to avoid connection explosions on HMR.
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
