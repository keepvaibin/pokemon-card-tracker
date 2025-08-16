import { NextResponse } from "next/server";
import { verifyGoogleIdToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: auth.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = params;
  const body = await req.json().catch(() => ({}));
  const cardId = String(body?.cardId ?? "").trim();
  if (!cardId) return NextResponse.json({ error: "Missing cardId" }, { status: 400 });

  const list = await prisma.list.findUnique({ where: { id } });
  if (!list || list.userId !== user.id) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (list.cards.includes(cardId)) return NextResponse.json({ list }, { status: 200 });
  const updated = await prisma.list.update({
    where: { id },
    data: { cards: { push: cardId } },
  });
  return NextResponse.json({ list: updated });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: auth.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = params;
  const body = await req.json().catch(() => ({}));
  const cardId = String(body?.cardId ?? "").trim();
  if (!cardId) return NextResponse.json({ error: "Missing cardId" }, { status: 400 });

  const list = await prisma.list.findUnique({ where: { id } });
  if (!list || list.userId !== user.id) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const updated = await prisma.list.update({
    where: { id },
    data: { cards: list.cards.filter(c => c !== cardId) },
  });
  return NextResponse.json({ list: updated });
}
