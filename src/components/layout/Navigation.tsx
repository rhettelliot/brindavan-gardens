'use client'

import { useState } from 'react'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#release', label: 'Release' },
    { href: '#mantra', label: 'Mantra' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-void/85 border-b border-edge-faint">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-semibold italic tracking-[-0.02em] text-gold">
          BG
          <span className="font-mono text-[8px] tracking-[0.15em] ml-2 not-italic text-light-muted">
            MR-001
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 text-gold-dim hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border btn-warm text-gold border-gold hover:bg-gold hover:text-void"
          >
            Listen
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden font-mono text-[10px] tracking-[0.2em] uppercase text-gold-dim"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 py-6 space-y-4 bg-void/95 border-b border-edge-faint">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 text-gold-dim hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
            target="_blank"
            rel="noreferrer noopener"
            className="block font-mono text-[11px] tracking-[0.15em] uppercase text-gold"
          >
            Listen →
          </a>
        </div>
      )}
    </nav>
  )
}
