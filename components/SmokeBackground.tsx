'use client'

// Half smoke, half cloud behind the whole page: many soft, elongated wisps. Each one drifts,
// turns and stretches on its own path (a few sine waves with random phases → looks random,
// never repeats exactly) and stays near the edges so the middle stays calm. CSS in globals.css.
import { useEffect, useRef } from 'react'

type Wisp = {
  color: 'green' | 'blue'
  // home position in viewport fractions (near an edge, never the centre)
  hx: number
  hy: number
}

const WISPS: Wisp[] = [
  { color: 'green', hx: 0.05, hy: 0.06 },
  { color: 'blue', hx: 0.22, hy: -0.02 },
  { color: 'blue', hx: 0.95, hy: 0.05 },
  { color: 'green', hx: 0.78, hy: -0.03 },
  { color: 'green', hx: -0.02, hy: 0.45 },
  { color: 'blue', hx: 1.02, hy: 0.42 },
  { color: 'blue', hx: 0.04, hy: 0.95 },
  { color: 'green', hx: 0.25, hy: 1.03 },
  { color: 'green', hx: 0.96, hy: 0.96 },
  { color: 'blue', hx: 0.74, hy: 1.02 },
]

export default function SmokeBackground() {
  const refs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Per wisp: random speeds/phases for position, rotation and stretch, so each moves independently.
    const rnd = (a: number, b: number) => a + Math.random() * (b - a)
    const params = WISPS.map(() => ({
      fx: [rnd(0.18, 0.3), rnd(0.07, 0.14)],
      fy: [rnd(0.16, 0.28), rnd(0.06, 0.12)],
      px: [rnd(0, 6.28), rnd(0, 6.28)],
      py: [rnd(0, 6.28), rnd(0, 6.28)],
      rot0: rnd(0, 180),
      fr: rnd(0.08, 0.18) * (Math.random() < 0.5 ? -1 : 1),
      fs: rnd(0.12, 0.22),
      ps: rnd(0, 6.28),
    }))

    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = (now - start) / 1000
      const w = window.innerWidth
      const h = window.innerHeight
      const unit = Math.max(w, h) / 100 // 1vmax
      WISPS.forEach((c, i) => {
        const el = refs.current[i]
        if (!el) return
        const p = params[i]
        const dx = (Math.sin(t * p.fx[0] + p.px[0]) * 7 + Math.sin(t * p.fx[1] + p.px[1]) * 5) * unit
        const dy = (Math.sin(t * p.fy[0] + p.py[0]) * 6 + Math.sin(t * p.fy[1] + p.py[1]) * 4) * unit
        const x = Math.min(Math.max(c.hx * w + dx, -0.15 * w), 1.15 * w)
        const y = Math.min(Math.max(c.hy * h + dy, -0.15 * h), 1.15 * h)
        const rot = p.rot0 + Math.sin(t * p.fr) * 50 + t * p.fr * 12
        const sx = 1 + Math.sin(t * p.fs + p.ps) * 0.25
        const sy = 1 + Math.cos(t * p.fs * 1.3 + p.ps) * 0.3
        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) scale(${sx}, ${sy})`
      })
      if (!reduce) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div aria-hidden className="smoke-layer">
      {WISPS.map((c, i) => (
        <span key={i} ref={(el) => { refs.current[i] = el }} className={`smoke smoke-${c.color}`} />
      ))}
    </div>
  )
}
