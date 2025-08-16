import { NextResponse } from "next/server";
import { prismaTimescale } from "@/lib/prismaTimescale";
import { verifyGoogleIdToken } from "@/lib/auth";

type Body = {
  ids: string[];
  from?: string; // ISO
  to?: string;   // ISO
  order?: "asc" | "desc";
};

export async function POST(req: Request) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const ids = Array.from(new Set((body.ids ?? []).filter(Boolean)));
  if (!ids.length) return NextResponse.json({ error: "ids[] required" }, { status: 400 });

  const order: "asc" | "desc" = body.order === "desc" ? "desc" : "asc";
  const from = body.from ? new Date(body.from) : undefined;
  const to   = body.to   ? new Date(body.to)   : undefined;

  const rows = await prismaTimescale.priceHistory.findMany({
    where: {
      cardId: { in: ids },
      ...(from || to ? { time: { gte: from ?? new Date(0), lt: to ?? new Date(8640000000000000) } } : {}),
    },
    orderBy: [{ cardId: order }, { time: order }],
    select: {
      cardId: true,
      time: true,
      tcgplayer_normal_market: true,
      tcgplayer_holofoil_market: true,
      tcgplayer_reverse_holofoil_market: true,
      cardmarket_average_sell_price: true,
      no_tcgplayer_prices: true,
    },
  });

  const histories: Record<string, Array<{
    cardId: string;
    time: string;
    tcgplayer_normal_market: number | null;
    tcgplayer_holofoil_market: number | null;
    tcgplayer_reverse_holofoil_market: number | null;
    cardmarket_average_sell_price: number | null;
    no_tcgplayer_prices: boolean;
  }>> = Object.fromEntries(ids.map(id => [id, []]));

  for (const r of rows) {
    histories[r.cardId].push({
      cardId: r.cardId,
      time: r.time.toISOString(),
      tcgplayer_normal_market: r.tcgplayer_normal_market,
      tcgplayer_holofoil_market: r.tcgplayer_holofoil_market,
      tcgplayer_reverse_holofoil_market: r.tcgplayer_reverse_holofoil_market,
      cardmarket_average_sell_price: r.cardmarket_average_sell_price,
      no_tcgplayer_prices: r.no_tcgplayer_prices,
    });
  }

  return NextResponse.json({ ids: ids.length, totalRows: rows.length, order, histories });
}
