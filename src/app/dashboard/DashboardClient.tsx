'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Navbar } from '@/components/Navbar'
import { useSyncedTheme } from './useSyncedTheme'
import type { Card } from '@prisma/client'

interface DashboardClientProps {
  total: number
  dailyChange: number
  sparkData: number[]
  cards: Card[]
}

export default function DashboardClient({
  total,
  dailyChange,
  sparkData,
  cards,
}: DashboardClientProps) {
  const { wrapperStyle, mounted } = useSyncedTheme()
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect to '/' if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (!mounted || status === 'loading') return null

  if (!session) return null // or a loading spinner while redirecting

  const navbarHeight = '5rem'
  const sidebarWidth = '320px'
  const sidebarPadding = '0.5rem'
  const leftCardMarginRight = `calc(${sidebarWidth} + ${sidebarPadding} * 2)` // space for right sidebar + padding

  return (
    <div style={{ ...wrapperStyle }}>
      <Navbar />

      {/* Left fixed card */}
      <main
        style={{
          position: 'fixed',
          top: navbarHeight,
          left: sidebarPadding,
          right: leftCardMarginRight,
          height: `calc(99vh - ${navbarHeight})`,
          backgroundColor: 'var(--bg-color)',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 20px rgba(100, 70, 250, 0.3)',
          padding: '1.5rem',
          color: 'var(--text-color-primary)',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          overflowY: 'auto',
        }}
      >
        <h2>Left Card</h2>
        <p>Content goes here...</p>
      </main>

      {/* Right fixed sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: navbarHeight,
          right: sidebarPadding,
          width: sidebarWidth,
          height: `calc(99vh - ${navbarHeight})`,
          backgroundColor: 'var(--bg-color)',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 20px rgba(100, 70, 250, 0.3)',
          padding: '1.5rem',
          color: 'var(--text-color-primary)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <h3>Right Side Card</h3>
        <p>Some summary or action here</p>
      </aside>
    </div>
  )
}
