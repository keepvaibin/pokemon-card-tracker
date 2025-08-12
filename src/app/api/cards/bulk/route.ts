// app/api/cards/bulk/route.ts
import { NextResponse } from "next/server";
import { prismaCards } from "@/lib/prismaCards";
import { verifyGoogleIdToken } from "@/lib/auth";
import { serializeCardFull } from "@/server/services/cards";

export async function POST(req: Request) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const ids: string[] = Array.isArray(body?.ids) ? body.ids.filter((s: any) => typeof s === "string" && s.trim()) : [];
  if (!ids.length) return NextResponse.json({ error: "No valid IDs provided" }, { status: 400 });

  const cards = await prismaCards.card.findMany({
    where: { id: { in: ids } },
    include: {
      abilities: true, attacks: true, weaknesses: true, resistances: true,
      legalities: true, images: true, cardmarket: true,
      tcgplayer: { include: { prices: true } },
      set: { include: { legalities: true } },
    },
  });

  return NextResponse.json({ count: cards.length, cards: cards.map(serializeCardFull) });
}
