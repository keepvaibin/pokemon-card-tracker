'use client'

import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

// Extend CSSProperties type to allow CSS variables
type CSSVariables = React.CSSProperties & {
  [key: `--${string}`]: string | number
}

export default function Settings() {
  const { resolvedTheme, setTheme } = useTheme()
  const [enabled, setEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // On mount, check localStorage and apply theme immediately for smoothness
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

  const onToggle = (checked: boolean) => {
    const next = checked ? 'dark' : 'light'
    setFading(true)
    setTimeout(() => {
      setTheme(next)
      setEnabled(checked)

      // Store in localStorage
      localStorage.setItem('theme', next)

      // Update DB and set cookie via API call
      fetch('/api/settings/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme: next }),
      })

      setTimeout(() => {
        setFading(false)
      }, 50)
    }, 150)
  }

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

  const sectionStyle: CSSVariables = {
    transition: 'color 0.2s linear',
    '--bg-color': wrapperStyle['--bg-color'],
    '--text-color-primary': wrapperStyle['--text-color-primary'],
    '--text-color-secondary': wrapperStyle['--text-color-secondary'],
  }

  return (
    <div style={wrapperStyle}>
      <nav className="w-48 pr-6">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <button
          disabled
          className="block w-full text-left px-4 py-2 rounded-lg font-medium cursor-default bg-purple-600 text-white"
        >
          General
        </button>
      </nav>
      <div className="w-px bg-gray-300 dark:bg-gray-700 mx-6" />
      <section className="flex-1 flex flex-col max-w-full" style={sectionStyle}>
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: 'var(--text-color-primary)', transition: 'color 0.2s linear' }}
        >
          General
        </h2>
        <div
          className="rounded-xl shadow-lg p-8 flex items-center justify-between max-w-full"
          style={{
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color-primary)',
            transition: 'background-color 0.2s linear, color 0.2s linear',
          }}
        >
          <div>
            <h3
              className="text-xl font-semibold mb-1"
              style={{ color: 'var(--text-color-primary)', transition: 'color 0.2s linear' }}
            >
              Theme
            </h3>
            <p
              className="text-sm"
              style={{ color: 'var(--text-color-secondary)', transition: 'color 0.2s linear' }}
            >
              Current theme: {enabled ? 'Dark' : 'Light'}
            </p>
          </div>
          <Switch
            checked={enabled}
            onChange={onToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
              enabled ? 'bg-purple-700' : 'bg-gray-300'
            }`}
          >
            <span className="sr-only">Toggle theme</span>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                enabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </Switch>
        </div>
      </section>
    </div>
  )
}
