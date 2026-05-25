'use client'

import { useState, FormEvent } from 'react'

export default function WaitlistForm({ className = '' }: { className?: string }) {
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
      <div className={`rounded-2xl bg-sky-50 border border-sky-200 px-6 py-4 text-sky-800 ${className}`}>
        <p className="font-semibold text-sm">You&apos;re on the list! 🎉</p>
        <p className="text-sm mt-0.5 text-sky-600">We&apos;ll be in touch when VoiceShape launches.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 w-full max-w-md ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 rounded-full px-5 py-3 border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !gdpr}
          className="rounded-full px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          style={{ background: 'linear-gradient(90deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)' }}
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={gdpr}
          onChange={e => setGdpr(e.target.checked)}
          className="mt-0.5 accent-sky-400 flex-shrink-0"
        />
        <span>
          I agree to be added to the VoiceShape waitlist and contacted about the app launch.
          Data stored in the EU.{' '}
          <a href="/privacy" className="underline hover:text-sky-600">Privacy Policy</a>.
        </span>
      </label>
      {status === 'error' && (
        <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
