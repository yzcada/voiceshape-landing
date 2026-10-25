'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#clients', label: 'For your clients' },
  { href: '#trust', label: 'Privacy' },
  { href: '#faq', label: 'FAQ' },
]

/** Menu button + dropdown for small screens (the desktop links are hidden there). */
export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const close = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-200 active:bg-white/10"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
          {open ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-16 border-b border-white/10 bg-[#0F1115] px-6 pb-6 pt-2 shadow-2xl shadow-black/60">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-4 text-base text-gray-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pilot"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full py-3.5 text-center text-base font-semibold text-white brand-gradient-button"
          >
            Join the free pilot
          </a>
        </nav>
      )}
    </div>
  )
}
