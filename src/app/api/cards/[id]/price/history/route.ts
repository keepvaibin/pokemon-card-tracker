// app/api/cards/[id]/price/history/route.ts
import { NextResponse } from "next/server";
import { prismaTimescale } from "@/lib/prismaTimescale";
import { verifyGoogleIdToken } from "@/lib/auth";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const order = (searchParams.get("order") || "asc").toLowerCase();
  const limit = searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined;

  const where: any = { cardId: params.id };
  if (from) where.time = { ...(where.time || {}), gte: new Date(from) };
  if (to)   where.time = { ...(where.time || {}), lt:  new Date(to) };

  const rows = await prismaTimescale.priceHistory.findMany({
    where,
    orderBy: { time: order === "desc" ? "desc" : "asc" },
    ...(limit ? { take: limit } : {}),
  });

  return NextResponse.json({
    cardId: params.id,
    count: rows.length,
    history: rows.map((r: any) => ({
      time: r.time.toISOString(),
      averageSellPrice: r.averageSellPrice,
      source: r.source ?? "unknown",
    })),
  });
}
