// lib/prismaTimescale.ts
import { PrismaClient } from "../../generated/timescale";

declare global {
  var prismaTimescale: PrismaClient | undefined;
}

export const prismaTimescale =
  global.prismaTimescale ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prismaTimescale = prismaTimescale;
