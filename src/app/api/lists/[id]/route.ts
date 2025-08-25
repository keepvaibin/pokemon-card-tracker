// app/api/lists/[id]/route.ts
import { NextResponse } from "next/server";
import { verifyGoogleIdToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type RouteParams = { params: Promise<{ id: string }> };

function ensureEmail(maybeEmail: string | null | undefined): string | undefined {
  return typeof maybeEmail === "string" && maybeEmail.trim().length > 0
    ? maybeEmail
    : undefined;
}

export async function PATCH(req: Request, ctx: RouteParams) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const email = ensureEmail(auth.email);
  if (!email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await ctx.params;

  const body = (await req.json().catch(() => ({}))) as { name?: unknown };
  const name = String(body?.name ?? "").trim();
  if (!name) return NextResponse.json({ error: "Missing name" }, { status: 400 });

  const list = await prisma.list.findUnique({ where: { id } });
  if (!list || list.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (list.isDefault && name !== "Collection") {
    return NextResponse.json({ error: "Cannot rename default list" }, { status: 400 });
  }

  try {
    const updated = await prisma.list.update({ where: { id }, data: { name } });
    return NextResponse.json({ list: updated });
  } catch {
    return NextResponse.json({ error: "Name already used" }, { status: 409 });
  }
}

export async function DELETE(req: Request, ctx: RouteParams) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const email = ensureEmail(auth.email);
  if (!email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await ctx.params;

  const list = await prisma.list.findUnique({ where: { id } });
  if (!list || list.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (list.isDefault) {
    return NextResponse.json({ error: "Cannot delete default list" }, { status: 400 });
  }

  await prisma.list.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
