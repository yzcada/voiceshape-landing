'use client'

import { useState, FormEvent } from 'react'

// Pilot sign-up (stored in the Supabase `waitlist` table via /api/waitlist).
export default function WaitlistForm({ className = '', buttonLabel = 'Join the free pilot' }: { className?: string; buttonLabel?: string }) {
  const [email, setEmail] = useState('')
  const [gdpr, setGdpr] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!gdpr) return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, gdpr_consent: true }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`rounded-2xl bg-brand-green/10 border border-brand-green/30 px-6 py-4 text-brand-green ${className}`}>
        <p className="font-semibold text-sm">Thanks, you&apos;re in!</p>
        <p className="text-sm mt-0.5 text-gray-300">We&apos;ll be in touch by email to set up your pilot.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 w-full max-w-md ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          placeholder="you@yourpractice.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 rounded-full px-5 py-3 border border-white/10 bg-white/[0.06] text-sm text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !gdpr}
          className="rounded-full px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap brand-gradient-button"
        >
          {status === 'loading' ? 'Sending…' : buttonLabel}
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={gdpr}
          onChange={e => setGdpr(e.target.checked)}
          className="mt-0.5 accent-brand-blue flex-shrink-0"
        />
        <span>
          I agree to be contacted about the VoiceShape pilot. Data stored in the EU.{' '}
          <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
        </span>
      </label>
      {status === 'error' && (
        <p className="text-xs text-red-400">Something went wrong. Please try again or email hi@voiceshape.app.</p>
      )}
    </form>
  )
}
