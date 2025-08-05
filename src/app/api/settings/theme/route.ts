import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const { theme } = (await req.json()) as { theme: 'light' | 'dark' }

  const session = await getServerSession(authOptions)
  if (!session?.user?.email)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await prisma.user.update({
    where: { email: session.user.email },
    data: { themePreference: theme },
  })

  const response = NextResponse.json({ ok: true })

  // Set cookie to remember theme (expires in 30 days)
  response.cookies.set('theme', theme, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: false, // so client JS can access if needed
    sameSite: 'lax',
  })

  return response
}
