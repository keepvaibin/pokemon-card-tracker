// src/app/dashboard/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import DashboardClient from "./DashboardClient";

function calculatePortfolio(cards: string[]) {
  const total = cards.length;
  const dailyChange = parseFloat(((Math.random() * 6) - 3).toFixed(2));
  const sparkData = Array(30)
    .fill(0)
    .map(() => total * (0.9 + Math.random() * 0.2));
  return { total, dailyChange, sparkData };
}

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/");
  }

  // 🔑 Single round-trip: create if missing, otherwise just return the record.
  const user = await prisma.user.upsert({
    where: { email: session.user.email! },
    update: {},
    create: {
      email: session.user.email!,
      name: session.user.name ?? null,
      // Add any defaults you need for a new user here
    },
    select: {
      cards: true, // select only what the page needs
    },
  });

  const { total, dailyChange, sparkData } = calculatePortfolio(user.cards);

  return (
    <DashboardClient
      total={total}
      dailyChange={dailyChange}
      sparkData={sparkData}
      cards={user.cards}
    />
  );
}
