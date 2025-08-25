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
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  // Accept order/limit for API compatibility but don’t use them
  void (searchParams.get("order") || "asc");
  void Number(searchParams.get("limit") ?? NaN);

  // Build time filter if provided
  const timeFilter: { gte?: Date; lt?: Date } | undefined =
    from || to
      ? {
          ...(from ? { gte: new Date(from) } : {}),
          ...(to ? { lt: new Date(to) } : {}),
        }
      : undefined;

  const where: {
    cardId: string;
    time?: { gte?: Date; lt?: Date };
  } = {
    cardId: id,
    ...(timeFilter ? { time: timeFilter } : {}),
  };

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
