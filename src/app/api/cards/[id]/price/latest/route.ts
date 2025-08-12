// app/api/cards/[id]/price/latest/route.ts
import { NextResponse } from "next/server";
import { prismaTimescale } from "@/lib/prismaTimescale";
import { verifyGoogleIdToken } from "@/lib/auth";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const row = await prismaTimescale.priceHistory.findFirst({
    where: { cardId: params.id },
    orderBy: { time: "desc" },
  });

  if (!row) return NextResponse.json({ cardId: params.id, latest: null });

  return NextResponse.json({
    cardId: row.cardId,
    time: row.time.toISOString(),
    averageSellPrice: row.averageSellPrice,
    source: row.source ?? "unknown",
  });
}
