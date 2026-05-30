'use client'

import { useState } from 'react'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#release', label: 'Release' },
    { href: '#mantra', label: 'Mantra' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl" style={{ background: 'rgba(5,4,2,0.85)', borderBottom: '1px solid rgba(212,168,67,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-semibold italic tracking-[-0.02em]" style={{ color: '#D4A843' }}>
          BG
          <span className="font-mono text-[8px] tracking-[0.15em] ml-2 not-italic" style={{ color: '#6B5F54' }}>
            MR-001
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: '#A68535' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#D4A843' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#A68535' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border btn-warm"
            style={{ borderColor: '#D4A843', color: '#D4A843' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4A843'; e.currentTarget.style.color = '#050402' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#D4A843' }}
          >
            Listen
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden font-mono text-[10px] tracking-[0.2em] uppercase"
          style={{ color: '#A68535' }}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 py-6 space-y-4" style={{ background: 'rgba(5,4,2,0.95)', borderBottom: '1px solid rgba(212,168,67,0.06)' }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ color: '#A68535' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
            target="_blank"
            rel="noreferrer noopener"
            className="block font-mono text-[11px] tracking-[0.15em] uppercase"
            style={{ color: '#D4A843' }}
          >
            Listen →
          </a>
        </div>
      )}
    </nav>
  )
}