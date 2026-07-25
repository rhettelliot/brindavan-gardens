'use client'

import { useEffect, useRef, useState } from 'react'

export function MagneticCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({ transform: '', glare: { x: 50, y: 50, opacity: 0 } })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const dx = (x - cx) / cx
      const dy = (y - cy) / cy
      const rotateX = -dy * 12
      const rotateY = dx * 12
      const translateX = dx * 18
      const translateY = dy * 18

      setStyle({
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 30px)`,
        glare: { x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: Math.abs(dx) + Math.abs(dy) },
      })
    }

    const onLeave = () => {
      setStyle({ transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0px,0px,0px)', glare: { x: 50, y: 50, opacity: 0 } })
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className || ''}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: style.transform,
      }}
    >
      {children}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: `radial-gradient(circle at ${style.glare.x}% ${style.glare.y}%, rgba(212,168,67,${0.12 + style.glare.opacity * 0.18}) 0%, transparent 55%)`,
          mixBlendMode: 'screen',
        }}
      />
    </div>
  )
}
