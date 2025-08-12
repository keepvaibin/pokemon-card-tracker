// app/api/cards/[id]/route.ts
import { NextResponse } from "next/server";
import { prismaCards } from "@/lib/prismaCards";
import { verifyGoogleIdToken } from "@/lib/auth";
import { serializeCardFull } from "@/server/services/cards";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = params.id;
  const c = await prismaCards.card.findUnique({
    where: { id },
    include: {
      abilities: true,
      attacks: true,
      weaknesses: true,
      resistances: true,
      legalities: true,
      images: true,
      cardmarket: true,
      tcgplayer: { include: { prices: true } },
      set: { include: { legalities: true } },
    },
  });

  if (!c) return NextResponse.json({ error: "Card not found" }, { status: 404 });
  return NextResponse.json(serializeCardFull(c));
}
