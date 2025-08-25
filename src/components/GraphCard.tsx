'use client'

import { useEffect, useRef, useState } from 'react'
import { useSyncedTheme } from '@/app/dashboard/useSyncedTheme'

export function GraphCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { mounted } = useSyncedTheme()
  const [, forceRerender] = useState(0) // ✅ drop the unused variable

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(() => {
      forceRerender(x => x + 1) // trigger rerender when size changes
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '50%',
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
