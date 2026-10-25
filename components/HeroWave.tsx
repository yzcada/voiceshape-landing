'use client'

import { useEffect, useRef } from 'react'

// A soft voice wave behind the hero, drawn after the logo: several thin pink → blue lines that
// peak in the middle and taper at the ends, slowly "breathing". Kept faint so the text stays
// readable. `center` is where the wave peaks (0–1 of the width); with `fadeLeft` the lines
// fade in from transparent so they never run through text on the left. The parent may fade it
// out (style.opacity = '0'), then drawing pauses.
const LINES = [
  { amp: 1, freq: 1.6, speed: 0.55, phase: 0, width: 2.2, alpha: 0.34 },
  { amp: 0.75, freq: 2.3, speed: -0.7, phase: 1.7, width: 1.6, alpha: 0.26 },
  { amp: 0.55, freq: 3.1, speed: 0.9, phase: 3.1, width: 1.3, alpha: 0.22 },
  { amp: 0.9, freq: 1.2, speed: -0.4, phase: 4.4, width: 1.2, alpha: 0.18 },
  { amp: 0.4, freq: 4.2, speed: 1.15, phase: 2.2, width: 1, alpha: 0.16 },
]

export default function HeroWave({ center = 0.5, spread = 0.24, fadeLeft = false, className = '' }: {
  center?: number
  spread?: number
  fadeLeft?: boolean
  className?: string
}) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let frame = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time: number) => {
      const t = time / 1000
      ctx.clearRect(0, 0, w, h)
      const grad = ctx.createLinearGradient(0, 0, w, 0)
      if (fadeLeft) {
        const start = Math.max(0, center - spread * 1.1)
        grad.addColorStop(0, 'rgba(201, 61, 118, 0)')
        grad.addColorStop(start, 'rgba(201, 61, 118, 0)')
        grad.addColorStop(Math.min(1, start + spread * 0.5), '#C93D76')
        grad.addColorStop(Math.min(1, center + spread * 0.3), '#8F5BC2')
        grad.addColorStop(1, '#1580CC')
      } else {
        grad.addColorStop(0, '#C93D76')
        grad.addColorStop(0.5, '#8F5BC2')
        grad.addColorStop(1, '#1580CC')
      }
      ctx.strokeStyle = grad
      ctx.lineCap = 'round'
      const mid = h / 2
      const maxAmp = h * 0.36
      const breathe = 0.8 + 0.2 * Math.sin(t * 0.8)
      for (const l of LINES) {
        ctx.globalAlpha = l.alpha
        ctx.lineWidth = l.width
        ctx.beginPath()
        for (let x = 0; x <= w; x += 4) {
          const u = x / w
          // Envelope: tall in the middle, flat at the ends (like the logo's waveform)
          const env = Math.exp(-(((u - center) / spread) ** 2))
          const k = u * Math.PI * 2 * l.freq * 3
          const y = mid + maxAmp * l.amp * breathe * env *
            (Math.sin(k + t * l.speed + l.phase) * 0.7 + Math.sin(k * 0.5 - t * l.speed * 0.6) * 0.3)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const loop = (time: number) => {
      frame = requestAnimationFrame(loop)
      const host = canvas.parentElement
      if (host && host.style.opacity === '0') return
      draw(time)
    }

    resize()
    const ro = new ResizeObserver(() => {
      resize()
      if (reduced) draw(0)
    })
    ro.observe(canvas)
    if (reduced) draw(0)
    else frame = requestAnimationFrame(loop)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [center, spread, fadeLeft])

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none block h-full w-full ${className}`} />
}
