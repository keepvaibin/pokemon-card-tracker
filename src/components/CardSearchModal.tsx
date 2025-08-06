'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react'
import { useTheme } from 'next-themes'

// Define card type
interface Card {
  id: string
  name: string
  hp: string
  types?: string[]
  supertype?: string
  subtypes?: string[]
  set?: { name: string }
  images: { small: string }
}

const CARD_PAGE_SIZE = 12

export default function CardSearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const inputRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [supertypeFilter, setSupertypeFilter] = useState('')
  const [subtypeFilter, setSubtypeFilter] = useState('')
  const [hpMin, setHpMin] = useState('')
  const [page, setPage] = useState(1)
  const [cards, setCards] = useState<Card[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)

  // Build Lucene q string
  const buildQuery = () => {
    const parts: string[] = []
    if (query) parts.push(`name:${query}*`)
    if (typeFilter) parts.push(`types:${typeFilter}`)
    if (supertypeFilter) parts.push(`supertype:${supertypeFilter}`)
    if (subtypeFilter) parts.push(`subtypes:${subtypeFilter}`)
    if (hpMin) parts.push(`hp:[${hpMin} TO *]`)
    return parts.join(' ')
  }

  const loadCards = useCallback(async () => {
    setLoading(true)
    const q = buildQuery()
    const url = new URL('/api/cards', location.origin)
    if (q) url.searchParams.append('q', q)
    url.searchParams.append('page', page.toString())
    url.searchParams.append('pageSize', CARD_PAGE_SIZE.toString())
    try {
      const res = await fetch(url.toString())
      const data = await res.json()
      setCards(Array.isArray(data.data) ? data.data : [])
      setTotalPages(Math.ceil((data.totalCount || 0) / CARD_PAGE_SIZE))
    } catch {
      setCards([])
      setTotalPages(1)
    } finally {
      setLoading(false)
    }
  }, [query, typeFilter, supertypeFilter, subtypeFilter, hpMin, page])

  // initial + changes
  useEffect(() => {
    if (!isOpen) return
    loadCards()
  }, [isOpen, loadCards])

  // search on enter
  const onSearch = () => {
    setPage(1)
    loadCards()
  }

  const getVisiblePages = (maxVisible = 6) => {
    const pages: (number | string)[] = []
    if (totalPages <= maxVisible + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    pages.push(1)
    if (page > 3) pages.push('...')
    const start = Math.max(2, page - 2)
    const end = Math.min(totalPages - 1, page + 2)
    for (let i = start; i <= end; i++) pages.push(i)
    if (page < totalPages - 2) pages.push('...')
    pages.push(totalPages)
    return pages
  }

  const modalStyle = useMemo<React.CSSProperties>(() => ({
    backgroundColor: isDark ? '#1e293b' : '#f3f4f6',
    color: isDark ? '#e2e8f0' : '#111827',
    width: '80vw',
    height: '80vh',
    borderRadius: '1rem',
    boxShadow: isDark
      ? '0 10px 30px rgba(0,0,0,0.7)'
      : '0 10px 30px rgba(0,0,0,0.1)',
    display: 'flex',
    overflow: 'hidden',
  }), [isDark])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            {/* left */}
            <motion.div
              className="w-1/3 p-6 overflow-y-auto"
              style={{
                backgroundColor: isDark ? '#0f172a' : '#ffffff',
                borderRadius: '1rem 0 0 1rem',
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.2}}}>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Type</label>
                  <select
                    className="mt-1 w-full p-2 rounded border"
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="Fire">Fire</option>
                    <option value="Water">Water</option>
                    <option value="Grass">Grass</option>
                    <option value="Psychic">Psychic</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Supertype</label>
                  <select
                    className="mt-1 w-full p-2 rounded border"
                    value={supertypeFilter}
                    onChange={e => setSupertypeFilter(e.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="Pokémon">Pokémon</option>
                    <option value="Trainer">Trainer</option>
                    <option value="Energy">Energy</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Subtype</label>
                  <select
                    className="mt-1 w-full p-2 rounded border"
                    value={subtypeFilter}
                    onChange={e => setSubtypeFilter(e.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="Basic">Basic</option>
                    <option value="EX">EX</option>
                    <option value="V">V</option>
                    <option value="VMAX">VMAX</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Min HP</label>
                  <input
                    type="number"
                    className="mt-1 w-full p-2 rounded border"
                    value={hpMin}
                    onChange={e => setHpMin(e.target.value)}
                  />
                </div>
                <div className="flex space-x-2 mt-6">
                  <button
                    className="flex-1 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    onClick={() => {
                      setPage(1); loadCards()
                    }}
                  >
                    Apply
                  </button>
                  <button
                    className="flex-1 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    onClick={() => {
                      setTypeFilter(''); setSupertypeFilter(''); setSubtypeFilter(''); setHpMin('')
                    }}
                  >
                    Reset
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* right */}
            <motion.div
              className="w-2/3 flex flex-col p-6"
              style={{
                backgroundColor: isDark ? '#1e293b' : '#ffffff',
                borderRadius: '0 1rem 1rem 0',
              }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              {/* search row */}
              <div className="flex mb-4">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search name..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') onSearch() }}
                  className="flex-1 p-3 border rounded-l text-base"
                  style={{ borderColor: '#ccc' }}
                />
                <button
                  onClick={onSearch}
                  className="px-4 bg-indigo-600 text-white rounded-r hover:bg-indigo-700"
                >
                  Go
                </button>
              </div>

              {/* results */}
              <div className="flex-1 overflow-y-auto">
                {loading ? (
                  <p className="text-center">Loading...</p>
                ) : cards.length === 0 ? (
                  <p className="text-center">No cards found.</p>
                ) : (
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
                    {cards.map(card => (
                      <motion.div
                        key={card.id}
                        className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow hover:shadow-lg"
                        whileHover={{ scale: 1.03 }}
                      >
                        <img
                          src={card.images.small}
                          alt={card.name}
                          className="w-full rounded"
                        />
                        <div className="mt-2 font-semibold text-sm">{card.name}</div>
                        <div className="text-xs text-gray-500">{card.hp} HP</div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* pagination */}
              <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
                <div className="flex flex-wrap justify-center gap-2">
                  {getVisiblePages(Math.floor(window.innerWidth / 100)).map((p, idx) =>
                    typeof p === 'string' ? (
                      <span key={idx} className="px-2">…</span>
                    ) : (
                      <button
                        key={p}
                        disabled={p === page}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1 rounded ${p === page ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
