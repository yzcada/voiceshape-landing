import Image from 'next/image'
import WaitlistForm from '@/components/WaitlistForm'
import FaqSection from '@/components/FaqSection'
import BrandLogo from '@/components/BrandLogo'
import GlowEffects from '@/components/GlowEffects'
import MobileMenu from '@/components/MobileMenu'
import StoryScroll from '@/components/StoryScroll'

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <GlowEffects />
      <Nav />
      <StoryScroll />
      <PilotSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 glass-bar border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" aria-label="VoiceShape home">
          <BrandLogo variant="mark" size={32} textSize={25} />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#use-cases" className="hover:text-gray-900 transition-colors">Use cases</a>
          <a href="#trust" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pilot" className="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-semibold text-white brand-gradient-button hover:opacity-90 transition-opacity">
            Join the pilot
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function PilotSection() {
  return (
    <section id="pilot" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto glow-card glass rounded-[36px] p-10 md:p-14 text-center">
        <Image src="/brand-icon.png" alt="" width={72} height={72} className="relative mx-auto rounded-2xl shadow-lg shadow-brand-blue/20 mb-6" />
        <h2 className="relative text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Help shape <span className="brand-gradient-text">VoiceShape</span>
        </h2>
        <p className="relative text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          We&apos;re running a free pilot with voice coaches, speech-language therapists and researchers.
          Use VoiceShape with a few clients, tell us what works, and shape what we build next.
        </p>
        <div className="relative flex justify-center">
          <WaitlistForm />
        </div>
        <p className="relative text-sm text-gray-500 mt-8">
          Students and researchers: VoiceShape is also open for thesis projects. Based in Aachen, Germany ·{' '}
          <a href="mailto:hi@voiceshape.app" className="text-brand-blue-ink hover:underline">hi@voiceshape.app</a>
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200/70 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <BrandLogo variant="mark" size={22} textSize={17} />
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
          <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="mailto:hi@voiceshape.app" className="hover:text-gray-900 transition-colors">hi@voiceshape.app</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/voiceshape.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@voiceshape.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors" aria-label="TikTok">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
            </svg>
          </a>
          <p className="text-xs text-gray-400">© 2026 VoiceShape</p>
        </div>
      </div>
    </footer>
  )
}
