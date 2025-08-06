'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CardSearchModal from './CardSearchModal'

export default function AddCreateButton() {
  const [expanded, setExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMainClick = () => {
    if (expanded) {
      // "Add Card" was clicked
      setShowModal(true)
    }
    setExpanded(prev => !prev)
  }

  return (
    <>
      {/* Overlay for dimming the rest of the screen */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'black',
              zIndex: 9, // One layer below the buttons
            }}
          />
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: 0,
          zIndex: 10, // Keep buttons on top of the overlay
        }}
      >
        <div style={{ position: 'relative', width: '100%' }}>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  bottom: '5.5rem',
                  width: '100%',
                  boxShadow: '0 10px 20px rgba(100, 70, 250, 0.3)',
                  zIndex: 11,
                }}
              >
                <button
                  style={{
                    width: '100%',
                    height: '4.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#6c63ff',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => alert('Create List clicked')}
                >
                  Create List
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            style={{
              width: '100%',
              height: '4.5rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              backgroundColor: '#6c63ff',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 -5px 15px rgba(100, 70, 250, 0.2)',
              zIndex: 10,
            }}
            onClick={handleMainClick}
          >
            {expanded ? 'Add Card' : '+ Add/Create'}
          </button>
        </div>
      </div>

      <CardSearchModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
