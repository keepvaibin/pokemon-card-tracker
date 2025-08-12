// lib/prismaCards.ts
import { PrismaClient } from "../../generated/cards";

declare global {
  // eslint-disable-next-line no-var
  var prismaCards: PrismaClient | undefined;
}

export const prismaCards =
  global.prismaCards ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prismaCards = prismaCards;
