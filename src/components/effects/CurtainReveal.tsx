'use client'

import { useEffect, useRef } from 'react'

export function CurtainReveal({ children, className, direction = 'up' }: { children: React.ReactNode; className?: string; direction?: 'up' | 'down' | 'left' | 'right' }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const content = contentRef.current
    const curtain = curtainRef.current
    if (!wrapper || !content || !curtain) return

    let ctx: { revert: () => void } | null = null
    let active = true

    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (!active) return
      gsap.registerPlugin(ScrollTrigger)

      const axis = direction === 'up' || direction === 'down' ? 'y' : 'x'
      const sign = direction === 'up' || direction === 'left' ? -1 : 1
      const from = axis === 'y' ? { y: `${sign * 100}%` } : { x: `${sign * 100}%` }
      const to = axis === 'y' ? { y: `${-sign * 100}%` } : { x: `${-sign * 100}%` }

      ctx = gsap.context(() => {
        gsap.set(curtain, { ...from, opacity: 1 })
        gsap.to(curtain, {
          ...to,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top 85%',
            end: 'top 25%',
            scrub: 1,
          },
        })

        gsap.fromTo(
          content.children.length > 0 ? content.children : content,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapper,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }, wrapper)
    })()

    return () => {
      active = false
      ctx?.revert()
    }
  }, [direction])

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className || ''}`}>
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
      <div
        ref={curtainRef}
        className="absolute inset-0 z-20 bg-void pointer-events-none"
        style={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(212,168,67,0.12) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(212,168,67,0.12) 100%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="gold-thread w-1/3 opacity-60" />
        </div>
      </div>
    </div>
  )
}
