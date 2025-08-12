// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { prismaCards } from "@/lib/prismaCards";
import { verifyGoogleIdToken } from "@/lib/auth";
import { serializeCardBasic } from "@/server/services/cards";

const NUMERIC_KEYS = new Set([
  "averageSellPrice", "trendPrice", "lowPrice",
  "normalMarket", "holofoilMarket", "reverseHolofoilMarket",
]);

export async function GET(req: Request) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const pageSize = Math.min(100, Math.max(1, Number(searchParams.get("page_size") || 15)));

  const where: any = { };
  const AND: any[] = [];

  const directMap: Record<string,string> = {
    id: "id",
    name: "name",
    supertype: "supertype",
    rarity: "rarity",
    hp: "hp",
    level: "level",
    number: "number",
    setId: "setId",
    artist: "artist",
  };

  for (const [key, value] of searchParams.entries()) {
    if (key === "page" || key === "page_size") continue;

    if (directMap[key]) {
      AND.push({ [directMap[key]]: value });
      continue;
    }

    for (const suffix of ["_gte", "_lte", "_gt", "_lt"] as const) {
      if (key.endsWith(suffix)) {
        const base = key.slice(0, -suffix.length);
        if (!NUMERIC_KEYS.has(base)) break;
        const num = Number(value);
        if (Number.isNaN(num)) {
          return NextResponse.json({ error: `Invalid numeric value for ${key}` }, { status: 400 });
        }

        const op = suffix === "_gte" ? "gte"
                : suffix === "_lte" ? "lte"
                : suffix === "_gt"  ? "gt"
                : "lt";

        if (base === "averageSellPrice" || base === "trendPrice" || base === "lowPrice") {
          AND.push({ cardmarket: { [base]: { [op]: num } } });
        } else {
          AND.push({ tcgplayer: { prices: { [base]: { [op]: num } } } });
        }
        break;
      }
    }
  }

  if (AND.length) where.AND = AND;

  const [total, items] = await Promise.all([
    prismaCards.card.count({ where } as any),
    prismaCards.card.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        images: true,
        cardmarket: true,
        tcgplayer: { include: { prices: true } },
        set: { select: { id: true, name: true, series: true } },
      },
      orderBy: { id: "asc" },
    } as any),
  ]);

  const total_pages = Math.ceil(total / pageSize);
  const cards = items.map(serializeCardBasic);

  return NextResponse.json({ page, page_size: pageSize, total, total_pages, cards });
}
