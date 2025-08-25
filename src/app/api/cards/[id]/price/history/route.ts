// app/api/cards/[id]/price/history/route.ts
import { NextResponse } from "next/server";
import { prismaTimescale } from "@/lib/prismaTimescale";
import { verifyGoogleIdToken } from "@/lib/auth";

type Params = { id: string };

export async function GET(req: Request, ctx: { params: Promise<Params> }) {
  const { id } = await ctx.params;

  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const order = (searchParams.get("order") || "asc").toLowerCase() === "desc" ? "desc" : "asc";
  const limitQ = Number(searchParams.get("limit") ?? NaN);

  const timeFilter: { gte?: Date; lt?: Date } | undefined =
    from || to
      ? {
          ...(from ? { gte: new Date(from) } : {}),
          ...(to ? { lt: new Date(to) } : {}),
        }
      : undefined;

  const where = {
    cardId: id,
    ...(timeFilter ? { time: timeFilter } : {}),
  };

  const rows = await prismaTimescale.priceHistory.findMany({
    where,
    orderBy: { time: order },
    ...(Number.isFinite(limitQ) ? { take: limitQ } : {}),
    // Explicit select = only schema fields
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

  const history = rows.map((r) => ({
    cardId: r.cardId,
    time: r.time.toISOString(),
    tcgplayer_normal_market: r.tcgplayer_normal_market,
    tcgplayer_holofoil_market: r.tcgplayer_holofoil_market,
    tcgplayer_reverse_holofoil_market: r.tcgplayer_reverse_holofoil_market,
    cardmarket_average_sell_price: r.cardmarket_average_sell_price,
    no_tcgplayer_prices: r.no_tcgplayer_prices,
  }));

  return NextResponse.json({ cardId: id, count: history.length, history });
}
