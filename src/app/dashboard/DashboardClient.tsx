'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Navbar } from '@/components/Navbar'
import { useSyncedTheme } from './useSyncedTheme'
import type { Card, Tag } from '@prisma/client'
import { GraphCard } from '@/components/GraphCard'
import AddCreateButton from '@/components/AddCreateButton'

interface DashboardClientProps {
  total: number
  dailyChange: number
  sparkData: number[]
  cards: Card[]
  tags: (Tag & { cards: Card[] })[]
}

function CardList({ cards, tags }: { cards: Card[]; tags: (Tag & { cards: Card[] })[] }) {
  const ownedTagName = 'Cards'
  const ownedCards = (cards ?? []).filter(card => card.tags?.some(tag => tag.name === ownedTagName))
  const otherTags = (tags ?? []).filter(tag => tag.name !== ownedTagName)

  const sectionStyle = {
    border: '1px solid var(--border-color)',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem',
    backgroundColor: 'var(--bg-secondary)', // optional for subtle background
  }

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 700,
    padding: '0',
    borderBottom: '1px solid var(--border-color)',
    
  }

  // Content container style - dynamic based on if content exists
  const contentStyle = (hasContent: boolean) => ({
    padding: hasContent ? '1rem' : '0',
    height: hasContent ? 'auto' : 0,
    overflow: 'hidden',
  })

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1rem' }}>
      {/* Cards Section */}
      <section style={sectionStyle}>
        <div style={titleStyle}>Cards</div>
        <div style={contentStyle(ownedCards.length > 0)}>
          {ownedCards.length > 0 &&
            ownedCards.map(card => (
              <div key={card.id} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                <img src={card.imageUrl} alt={card.name} width={50} height={70} />
                <span style={{ marginLeft: '0.75rem' }}>{card.name}</span>
              </div>
            ))}
        </div>
      </section>

      {/* Lists Section */}
      <section style={sectionStyle}>
        <div style={titleStyle}>Lists</div>
        <div style={contentStyle(otherTags.length > 0)}>
          {otherTags.length > 0 &&
            otherTags.map(tag => (
              <div key={tag.id} style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{tag.name}</div>
                {tag.cards.map(card => (
                  <div key={card.id} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <img src={card.imageUrl} alt={card.name} width={40} height={55} />
                    <span style={{ marginLeft: '0.75rem' }}>{card.name}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default function DashboardClient({
  total,
  dailyChange,
  sparkData,
  cards,
  tags,
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
          height: `calc(99vh - ${navbarHeight} - ${buttonHeight} - 1.7rem)`, // subtract button + padding
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
          <CardList cards={cards} tags={tags} />
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
