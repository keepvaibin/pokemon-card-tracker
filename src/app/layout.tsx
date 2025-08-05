import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { ClientSessionProvider } from '@/components/ClientSessionProvider'

import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

async function fetchUserThemeSomehow(): Promise<'light' | 'dark' | 'system'> {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return 'system'
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { themePreference: true },
  })
  // Return themePreference if found, else fallback to 'system'
  return (user?.themePreference as 'light' | 'dark' | undefined) ?? 'system'
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const userTheme = await fetchUserThemeSomehow()

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ClientSessionProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme={userTheme}
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  )
}
