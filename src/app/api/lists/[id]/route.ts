import { NextResponse } from "next/server";
import { verifyGoogleIdToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: auth.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = params;
  const body = await req.json().catch(() => ({}));
  const name = String(body?.name ?? "").trim();
  if (!name) return NextResponse.json({ error: "Missing name" }, { status: 400 });

  const list = await prisma.list.findUnique({ where: { id } });
  if (!list || list.userId !== user.id) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (list.isDefault && name !== "Collection") return NextResponse.json({ error: "Cannot rename default list" }, { status: 400 });

  try {
    const updated = await prisma.list.update({ where: { id }, data: { name } });
    return NextResponse.json({ list: updated });
  } catch {
    return NextResponse.json({ error: "Name already used" }, { status: 409 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: auth.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = params;
  const list = await prisma.list.findUnique({ where: { id } });
  if (!list || list.userId !== user.id) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (list.isDefault) return NextResponse.json({ error: "Cannot delete default list" }, { status: 400 });

  await prisma.list.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
