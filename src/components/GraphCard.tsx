'use client'

import { useEffect, useRef, useState } from 'react'
import { useSyncedTheme } from '@/app/dashboard/useSyncedTheme'

export function GraphCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  const { mounted } = useSyncedTheme()

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth)
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: `50%`,
        backgroundColor: 'var(--bg-color)',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-color-primary)',
        transition: 'background-color 0.2s linear, color 0.2s linear',
      }}
    >
      <p>Graph goes here</p>
    </div>
  )
}
