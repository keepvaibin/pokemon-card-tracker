// src/app/dashboard/page.tsx
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import DashboardClient from "./DashboardClient"

function calculatePortfolio(cards: string[]) {
  const total = cards.length // no marketPrice, so total is just count
  const dailyChange = parseFloat(((Math.random() * 6) - 3).toFixed(2))
  const sparkData = Array(30)
    .fill(0)
    .map(() => total * (0.9 + Math.random() * 0.2))
  return { total, dailyChange, sparkData }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/")

  let user = await prisma.user.findUnique({
    where: { email: session.user!.email! },
    select: { cards: true }, // ✅ fetch scalar array directly
  })

  if (!user) {
    user = await prisma.user.create({
      data: { email: session.user!.email! },
      select: { cards: true },
    })
  }

  const { total, dailyChange, sparkData } = calculatePortfolio(user.cards)

  return (
    <DashboardClient
      total={total}
      dailyChange={dailyChange}
      sparkData={sparkData}
      cards={user.cards}
    />
  )
}
