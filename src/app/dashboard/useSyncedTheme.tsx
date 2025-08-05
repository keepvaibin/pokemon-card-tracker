'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

// Extend CSSProperties type to allow CSS variables
type CSSVariables = React.CSSProperties & {
  [key: `--${string}`]: string | number
}

export function useSyncedTheme() {
  const { resolvedTheme, setTheme } = useTheme()
  const [enabled, setEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [fading, setFading] = useState(false) // optional

  useEffect(() => {
    // On mount, read from localStorage and set theme immediately
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
      setEnabled(storedTheme === 'dark')
    }
    setMounted(true)
  }, [setTheme])

  useEffect(() => {
    if (mounted) {
      setEnabled(resolvedTheme === 'dark')
    }
  }, [resolvedTheme, mounted])

  const isDark = resolvedTheme === 'dark'

  const wrapperStyle: CSSVariables = {
    '--bg-color': isDark ? '#1f2937' : '#ffffff',
    '--text-color-primary': isDark ? '#d8b4fe' : '#db2777',
    '--text-color-secondary': isDark ? '#d1d5db' : '#4b5563',
    backgroundColor: isDark ? '#111827' : '#f9fafb',
    color: isDark ? '#f3f4f6' : '#111827',
    minHeight: '100vh',
    display: 'flex',
    padding: '1.5rem',
    transition: 'background-color 0.2s linear, color 0.2s linear, opacity 0.2s linear',
    opacity: fading ? 0.5 : 1,
  }

  return { enabled, mounted, fading, wrapperStyle }
}
