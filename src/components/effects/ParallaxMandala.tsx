'use client'

import { useEffect, useRef } from 'react'

export function ParallaxMandala() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ring1Ref = useRef<HTMLDivElement>(null)
  const ring2Ref = useRef<HTMLDivElement>(null)
  const ring3Ref = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const ring1 = ring1Ref.current
    const ring2 = ring2Ref.current
    const ring3 = ring3Ref.current
    const orb = orbRef.current
    if (!container || !ring1 || !ring2 || !ring3 || !orb) return

    let active = true
    let raf = 0
    let scrollY = 0
    let targetScrollY = 0

    const onScroll = () => {
      targetScrollY = window.scrollY
    }

    const tick = () => {
      if (!active) return
      scrollY += (targetScrollY - scrollY) * 0.08
      const y = scrollY
      const h = window.innerHeight
      const ratio = y / h

      ring1.style.transform = `translateY(${y * -0.18}px) rotate(${ratio * 12}deg)`
      ring2.style.transform = `translateY(${y * -0.10}px) rotate(${-ratio * 18}deg)`
      ring3.style.transform = `translateY(${y * -0.05}px) rotate(${ratio * 24}deg)`
      orb.style.transform = `translateY(${y * -0.24}px) scale(${1 + ratio * 0.05})`

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      active = false
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div
        ref={ring1Ref}
        className="absolute w-[130vw] h-[130vw] md:w-[90vw] md:h-[90vw] rounded-full border border-gold/10"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(212,168,67,0.04) 25%, transparent 50%, rgba(212,168,67,0.04) 75%, transparent 100%)',
        }}
      />
      <div
        ref={ring2Ref}
        className="absolute w-[110vw] h-[110vw] md:w-[72vw] md:h-[72vw] rounded-full border border-gold/10"
        style={{
          background: 'repeating-radial-gradient(circle at center, transparent 0, transparent 38px, rgba(212,168,67,0.05) 39px, transparent 40px)',
        }}
      />
      <div
        ref={ring3Ref}
        className="absolute w-[90vw] h-[90vw] md:w-[56vw] md:h-[56vw] rounded-full border border-gold/15"
        style={{
          boxShadow: '0 0 120px rgba(212,168,67,0.05), inset 0 0 120px rgba(212,168,67,0.05)',
        }}
      />
      <div
        ref={orbRef}
        className="absolute w-[60vw] h-[60vw] md:w-[36vw] md:h-[36vw] rounded-full opacity-40 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.22) 0%, rgba(253,252,220,0.06) 45%, transparent 70%)' }}
      />
    </div>
  )
}
