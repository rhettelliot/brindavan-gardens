'use client'

import { useEffect, useRef } from 'react'

export function GoldDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let active = true
    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1

    const particles: Array<{
      x: number
      y: number
      r: number
      vx: number
      vy: number
      alpha: number
      phase: number
      sizePulse: number
    }> = []

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const target = Math.floor((w * h) / 18000)
      while (particles.length < target) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.3 + Math.random() * 1.2,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2 - 0.05,
          alpha: 0.1 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
          sizePulse: 0.5 + Math.random() * 1.5,
        })
      }
      while (particles.length > target) particles.pop()
    }

    let lastY = 0
    let vyGlobal = 0
    const onScroll = () => {
      const y = window.scrollY
      vyGlobal = Math.max(-8, Math.min(8, y - lastY))
      lastY = y
    }

    const draw = () => {
      if (!active) return
      ctx.clearRect(0, 0, w, h)

      const t = performance.now() * 0.001

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.y += p.vy + vyGlobal * 0.015
        p.x += p.vx + Math.sin(t + p.phase) * 0.08
        if (p.y < -4) p.y = h + 4
        if (p.y > h + 4) p.y = -4
        if (p.x < -4) p.x = w + 4
        if (p.x > w + 4) p.x = -4

        const a = p.alpha * (0.5 + 0.5 * Math.sin(t * 0.8 + p.phase))
        const r = p.r * (1 + 0.5 * Math.sin(t * p.sizePulse + p.phase))
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4)
        g.addColorStop(0, `rgba(212,168,67,${a})`)
        g.addColorStop(0.4, `rgba(253,252,220,${a * 0.4})`)
        g.addColorStop(1, 'rgba(212,168,67,0)')

        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2)
        ctx.fill()
      }

      vyGlobal *= 0.96
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(draw)

    return () => {
      active = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-[2]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
