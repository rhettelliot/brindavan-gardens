'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    let active = true
    let gsapInstance: typeof import('gsap').default | null = null

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    ;(async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (!active) {
        lenis.destroy()
        return
      }
      gsapInstance = gsap
      gsap.registerPlugin(ScrollTrigger)

      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)
    })()

    return () => {
      active = false
      lenis.destroy()
      if (gsapInstance) {
        gsapInstance.ticker.remove(lenis.raf as unknown as (time: number) => void)
      }
    }
  }, [])

  return <div className="relative">{children}</div>
}

