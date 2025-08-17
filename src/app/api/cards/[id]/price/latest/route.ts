// app/api/cards/[id]/price/latest/route.ts
import { NextResponse } from "next/server";
import { prismaTimescale } from "@/lib/prismaTimescale";
import { verifyGoogleIdToken } from "@/lib/auth";

type Params = { id: string };

export async function GET(
  req: Request,
  ctx: { params: Promise<Params> } // Next 15: params is a Promise
) {
  const { id } = await ctx.params;

  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const from   = searchParams.get("from");
  const to     = searchParams.get("to");
  // You can accept 'order' for consistency, but "latest" always picks the most recent in the range.
  // We'll still parse it so the endpoint tolerates the same parameters.
  const _order = (searchParams.get("order") || "asc").toLowerCase() === "desc" ? "desc" : "asc";
  // limit is irrelevant for "latest", but accept it so callers can reuse code.
  // (We don't use it.)
  void Number(searchParams.get("limit") ?? NaN);

  const where: any = { cardId: id };
  if (from) where.time = { ...(where.time || {}), gte: new Date(from) };
  if (to)   where.time = { ...(where.time || {}), lt:  new Date(to) };

  // Always fetch the most recent datapoint in the filtered window.
  const row = await prismaTimescale.priceHistory.findFirst({
    where,
    orderBy: { time: "desc" },
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

  if (!row) {
    return NextResponse.json({
      cardId: id,
      latest: null,
    });
  }

  return NextResponse.json({
    cardId: row.cardId,
    latest: {
      cardId: row.cardId,
      time: row.time.toISOString(),
      tcgplayer_normal_market: row.tcgplayer_normal_market,
      tcgplayer_holofoil_market: row.tcgplayer_holofoil_market,
      tcgplayer_reverse_holofoil_market: row.tcgplayer_reverse_holofoil_market,
      cardmarket_average_sell_price: row.cardmarket_average_sell_price,
      no_tcgplayer_prices: row.no_tcgplayer_prices,
    },
  });
}
