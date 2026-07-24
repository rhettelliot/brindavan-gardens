'use client'

import { useState } from 'react'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#release', label: 'Release' },
    { href: '#philosophy', label: 'Protocol' },
    { href: '#mantra', label: 'Mantra' },
    { href: '#resonance', label: 'Resonance' },
  ]

  return (
    <nav aria-label="Primary" className="fixed top-0 left-0 right-0 z-40 backdrop-blur-2xl bg-void/70 border-b border-edge-faint shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          aria-label="Brindavan Gardens home"
          className="font-display text-xl font-semibold italic tracking-[-0.02em] text-gold-pale hover:text-gold transition-colors duration-300 text-glow-gold flex items-center gap-2 group"
        >
          <span>BG</span>
          <span className="font-mono text-[9px] tracking-[0.2em] not-italic text-light-muted group-hover:text-gold-dim transition-colors duration-300 border-l border-edge-subtle pl-2">
            BG-007
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-mono text-[10px] tracking-[0.25em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 py-2.5 px-1 group min-h-[44px] flex items-center"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Listen to Brindavan Gardens on streaming platforms (opens in new tab)"
            className="btn-premium-gold font-mono text-[10px] tracking-[0.25em] uppercase px-8 py-3 rounded-none"
          >
            Listen
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="md:hidden font-mono text-[11px] tracking-[0.25em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden px-6 py-8 space-y-6 bg-void/98 border-b border-edge-subtle backdrop-blur-3xl animate-fade-in">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-[12px] tracking-[0.2em] uppercase text-gold-dim hover:text-gold transition-colors duration-300 py-3"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://distrokid.com/hyperfollow/brindavangardens/upek/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Listen to Brindavan Gardens on streaming platforms (opens in new tab)"
            className="btn-premium-gold font-mono text-[12px] tracking-[0.2em] uppercase text-gold border-t border-edge-faint pt-4"
          >
            Listen →
          </a>
        </div>
      )}
    </nav>
  )
}
