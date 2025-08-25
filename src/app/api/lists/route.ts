// app/api/lists/route.ts
import { NextResponse } from "next/server";
import { verifyGoogleIdToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function ensureEmail(maybeEmail: string | null | undefined): string | undefined {
  return typeof maybeEmail === "string" && maybeEmail.trim().length > 0
    ? maybeEmail
    : undefined;
}

export async function GET(req: Request) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const email = ensureEmail(auth.email);
  if (!email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { email },
    include: { lists: true },
  });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  let lists = user.lists;
  if (!lists.length) {
    const created = await prisma.list.create({
      data: { userId: user.id, name: "Collection", isDefault: true, cards: user.cards ?? [] },
    });
    lists = [created];
  }
  return NextResponse.json({ lists });
}

export async function POST(req: Request) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const email = ensureEmail(auth.email);
  if (!email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as { name?: unknown };
  const name = String(body?.name ?? "").trim();
  if (!name) return NextResponse.json({ error: "Missing name" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  try {
    const list = await prisma.list.create({
      data: { userId: user.id, name, isDefault: false, cards: [] },
    });
    return NextResponse.json({ list });
  } catch {
    return NextResponse.json({ error: "List with that name already exists" }, { status: 409 });
  }
}
