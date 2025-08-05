'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '4.5rem',
        backgroundColor: 'var(--bg-color)',
        borderBottom: '1px solid var(--border-color, #ccc)',
        boxShadow: '0 2px 4px rgba(100, 70, 250, 0.3)', // similar to Dashboard boxShadow purple-ish
      }}
    >
      <div
        style={{
          maxWidth: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '5rem', // same height as navbarHeight in DashboardClient
          paddingLeft: 0, // flush left
          paddingRight: '1.5rem',
          boxSizing: 'border-box',
        }}
      >
        {/* PokeCard flush left with some left padding */}
        <Link
          href="/dashboard"
          style={{
            paddingLeft: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--text-color-primary)',
            flexShrink: 0,
            userSelect: 'none',
            textDecoration: 'none',
          }}
        >
          PokeCard
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          <Link
            href="/dashboard/settings"
            style={{
              color: 'var(--text-color-primary)',
              textDecoration: 'underline',
              opacity: 0.8,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
          >
            Settings
          </Link>
          {session?.user ? (
            <>
              <p
                style={{
                  margin: 0,
                  color: 'var(--text-color-primary)',
                  userSelect: 'none',
                }}
              >
                {session.user.name}
              </p>
              <button
                onClick={() => signOut()}
                style={{
                  color: 'var(--error-color, #e53e3e)', // fallback red
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/"
              style={{
                color: 'var(--text-color-primary)',
                textDecoration: 'underline',
                opacity: 0.8,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
