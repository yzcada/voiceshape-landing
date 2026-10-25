'use client'

import { useEffect } from 'react'

// Feeds the pointer position to every `.glow-card` (as --x / --y, relative to the card),
// so the brand-coloured glow and border light follow the mouse. CSS lives in globals.css.
export default function GlowEffects() {
  useEffect(() => {
    let frame = 0
    let last: PointerEvent | null = null

    const update = () => {
      frame = 0
      if (!last) return
      for (const card of document.querySelectorAll<HTMLElement>('.glow-card')) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--x', `${last.clientX - r.left}px`)
        card.style.setProperty('--y', `${last.clientY - r.top}px`)
      }
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      last = e
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
