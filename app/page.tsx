import Image from 'next/image'
import ScrollSection from '@/components/ScrollSection'
import WaitlistForm from '@/components/WaitlistForm'
import FaqSection from '@/components/FaqSection'

export default function Home() {
  return (
    <main>
      <ScrollSection />
      <HowItWorksSection />
      <FaqSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-sky-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      step: '01',
      title: 'Record a baseline',
      desc: 'A short 30-second sample is all it takes. VoiceShape analyzes your current pitch, resonance, and cadence to establish your starting point.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      step: '02',
      title: 'AI builds your plan',
      desc: 'Based on your voice and your goals — higher, lower, or more androgynous — the AI generates a personalized daily lesson path tailored just for you.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-pink-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      step: '03',
      title: 'Practice & progress',
      desc: 'Spend 5–10 minutes a day on targeted exercises. Watch your voice evolve week by week with detailed metrics and milestone celebrations.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-gray-50 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Three simple steps to start shaping your voice — no experience needed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="text-3xl font-black text-gray-900">{s.step}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="py-24 px-6 bg-gray-950 text-center relative z-10">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <Image src="/logo-new.jpg" alt="VoiceShape" width={72} height={72} className="rounded-2xl shadow-lg shadow-purple-500/30" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your voice is already<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)' }}>
              yours to shape.
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Be among the first to try VoiceShape. We&apos;ll reach out as soon as we launch.
          </p>
        </div>
        <WaitlistForm className="w-full" />
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm text-gray-500 cursor-not-allowed opacity-60"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Coming soon on App Store
          </button>
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm text-gray-500 cursor-not-allowed opacity-60"
          >
            <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.9 17.1-35 0-44.8l-1.2-.9zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            Coming soon on Google Play
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/Logo_trans.png" alt="VoiceShape" width={28} height={28} className="rounded-md" />
          <span className="text-sm font-semibold text-gray-700">VoiceShape</span>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-gray-500">
          <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="mailto:hi@voiceshape.app" className="hover:text-gray-900 transition-colors">hi@voiceshape.app</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/voiceshape.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@voiceshape.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="TikTok">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
            </svg>
          </a>
          <p className="text-xs text-gray-400">© 2026 VoiceShape.</p>
        </div>
      </div>
    </footer>
  )
}
