'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Navbar } from '@/components/Navbar'
import { useSyncedTheme } from './useSyncedTheme'
import { GraphCard } from '@/components/GraphCard'
import AddCreateButton from '@/components/AddCreateButton'

interface DashboardClientProps {
  total: number
  dailyChange: number
  sparkData: number[]
  cards: string[] // now just strings from User.cards
}

function AnimatedSection({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const maxHeight = isOpen ? '1000px' : '0px' // fixed height for smooth animation
  const opacity = isOpen ? 1 : 0

  return (
    <div
      style={{
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.3s ease',
        maxHeight,
        opacity,
      }}
    >
      <div>{children}</div>
    </div>
  )
}

export function CardList({ cards }: { cards: string[] }) {
  const [cardsOpen, setCardsOpen] = useState(true)

  const sectionStyle = {
    border: '1px solid var(--border-color)',
    borderRadius: '0.5rem',
    marginBottom: '0.25rem',
    backgroundColor: 'var(--bg-secondary)',
  }

  const titleContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 700,
    border: '2px solid #9b9b9b75',
    borderRadius: '0.5rem',
    padding: '0.5rem 0.75rem',
    backgroundColor: 'var(--bg-color)',
    cursor: 'pointer' as const,
  }

  const arrowStyle = (open: boolean) => ({
    transition: 'transform 0.2s ease',
    transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
    fontSize: '1rem',
    color: 'var(--text-muted)',
  })

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '0.25rem' }}>
      <section style={sectionStyle}>
        <div style={titleContainerStyle} onClick={() => setCardsOpen(!cardsOpen)}>
          <span>Cards</span>
          <span style={arrowStyle(cardsOpen)}>&#9654;</span>
        </div>
        <AnimatedSection isOpen={cardsOpen}>
          <div style={{ padding: '0.25rem' }}>
            {cards.length > 0 ? (
              cards.map((card, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5rem',
                    backgroundColor: 'var(--bg-color)',
                    borderRadius: '0.5rem',
                  }}
                >
                  <span>{card}</span>
                </div>
              ))
            ) : (
              <div
                style={{
                  border: '1px dashed var(--border-color)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                  backgroundColor: 'var(--bg-color)',
                }}
              >
                You have no cards right now.
              </div>
            )}
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
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

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (!mounted || status === 'loading') return null
  if (!session) return null

  const navbarHeight = '5rem'
  const buttonHeight = '3.5rem'
  const sidebarWidth = '320px'
  const sidebarPadding = '0.5rem'
  const leftCardMarginRight = `calc(${sidebarWidth} + ${sidebarPadding} * 2)`

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
        <GraphCard />
      </main>

      {/* Right fixed sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: navbarHeight,
          right: sidebarPadding,
          width: sidebarWidth,
          height: `calc(99vh - ${navbarHeight} - ${buttonHeight} - 1.7rem)`,
          backgroundColor: 'var(--bg-color)',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 20px rgba(100, 70, 250, 0.3)',
          padding: 0,
          paddingBottom: '1.5rem',
          color: 'var(--text-color-primary)',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <CardList cards={cards} />
        </div>
      </aside>

      {/* Bottom button container */}
      <div
        style={{
          position: 'fixed',
          top: `calc(99vh - ${navbarHeight} + 1.45rem)`,
          right: sidebarPadding,
          width: sidebarWidth,
          height: buttonHeight,
          backgroundColor: 'transparent',
          zIndex: 10,
        }}
      >
        <AddCreateButton />
      </div>
    </div>
  )
}
