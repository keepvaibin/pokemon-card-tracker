'use client'

import { useEffect, useState, useRef } from 'react'
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

function AnimatedSection({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState('0px')
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`)
        setOpacity(1)
      } else {
        setMaxHeight('0px')
        setOpacity(0)
      }
    }
  }, [isOpen, children])

  return (
    <div
      style={{
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.3s ease',
        maxHeight,
        opacity,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

export function CardList({ cards, tags }: { cards: Card[]; tags: (Tag & { cards: Card[] })[] }) {
  const [cardsOpen, setCardsOpen] = useState(true)
  const [listsOpen, setListsOpen] = useState(true)

  const ownedTagName = 'Cards'
  const ownedCards = (cards ?? []).filter(card => card.tags?.some(tag => tag.name === ownedTagName))
  const otherTags = (tags ?? []).filter(tag => tag.name !== ownedTagName)

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
      {/* Cards Section */}
      <section style={sectionStyle}>
        <div style={titleContainerStyle} onClick={() => setCardsOpen(!cardsOpen)}>
          <span>Cards</span>
          <span style={arrowStyle(cardsOpen)}>&#9654;</span>
        </div>
        <AnimatedSection isOpen={cardsOpen}>
          <div style={{ padding: '0.25rem' }}>
            {ownedCards.length > 0 ? (
              ownedCards.map(card => (
                <div key={card.id} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <img src={card.imageUrl} alt={card.name} width={50} height={70} />
                  <span style={{ marginLeft: '0.75rem' }}>{card.name}</span>
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

      {/* Lists Section */}
      <section style={sectionStyle}>
        <div style={titleContainerStyle} onClick={() => setListsOpen(!listsOpen)}>
          <span>Lists</span>
          <span style={arrowStyle(listsOpen)}>&#9654;</span>
        </div>
        <AnimatedSection isOpen={listsOpen}>
          <div style={{ padding: '0.25rem' }}>
            {otherTags.map(tag => (
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
