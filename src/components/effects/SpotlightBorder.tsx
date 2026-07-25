'use client'

import { useEffect, useRef } from 'react'

export function SpotlightBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--spot-x', `${x}px`)
      el.style.setProperty('--spot-y', `${y}px`)
    }

    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className={`relative ${className || ''}`}
      style={{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)) padding-box, radial-gradient(600px circle at var(--spot-x,50%) var(--spot-y,50%), rgba(212,168,67,0.6), rgba(212,168,67,0.1) 40%, transparent 70%) border-box',
        border: '1px solid transparent',
      }}
    >
      {children}
    </div>
  )
}
