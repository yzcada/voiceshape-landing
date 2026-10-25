import Image from 'next/image'
import WaitlistForm from '@/components/WaitlistForm'
import FaqSection from '@/components/FaqSection'
import { ClientPracticeMock, CoachPlanMock } from '@/components/AppMocks'
import BrandLogo from '@/components/BrandLogo'
import GlowEffects from '@/components/GlowEffects'
import MobileMenu from '@/components/MobileMenu'

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <GlowEffects />
      <Nav />
      <Hero />
      <ProblemSection />
      <HowItWorksSection />
      <ClientSection />
      <UseCasesSection />
      <TrustSection />
      <PilotSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

/* ─── Shared bits ─── */

function Icon({ d, className = 'w-6 h-6' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}

const ICONS = {
  fade: 'M3 12h4l3-8 4 16 3-8h4',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z',
  clock: 'M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z',
  spark: 'M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3zm6 11l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14z',
  blocks: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  chart: 'M4 20V10m6 10V4m6 16v-7m4 7H3',
  mic: 'M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3zm6-3a6 6 0 01-12 0m6 6v3',
  shield: 'M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z',
  lock: 'M6 11V8a6 6 0 1112 0v3M5 11h14v10H5z',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0',
  check: 'M5 13l4 4L19 7',
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{title}</h2>
      {text && <p className="text-gray-400 text-lg mt-4 leading-relaxed">{text}</p>}
    </div>
  )
}

/* ─── Sections ─── */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0F1115]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" aria-label="VoiceShape home">
          <BrandLogo variant="mark" size={32} textSize={25} />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#clients" className="hover:text-white transition-colors">For your clients</a>
          <a href="#trust" className="hover:text-white transition-colors">Privacy</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
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

function Hero() {
  return (
    <section className="relative brand-hero-glow-dark">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 grid md:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <a href="#pilot" className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 px-4 py-1.5 text-sm text-brand-blue font-medium mb-6 hover:bg-brand-blue/15 transition-colors">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            Free pilot for voice coaches &amp; speech therapists
          </a>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Turn one session a week into <span className="brand-gradient-text">practice every day.</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            Build personalised daily practice in minutes with AI. Your clients train with live pitch and resonance feedback,
            and you see their consistency, measurements and check-ins before the next session.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a href="#pilot" className="rounded-full px-7 py-3.5 text-base font-semibold text-white brand-gradient-button hover:opacity-90 transition-opacity">
              Join the free pilot
            </a>
            <a href="#how" className="rounded-full px-7 py-3.5 text-base font-semibold text-gray-200 border border-white/15 hover:bg-white/5 transition-colors">
              See how it works
            </a>
          </div>
          <p className="text-xs text-gray-500">Educational practice tool · not a medical device · made in Aachen, Germany</p>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="relative flex items-start">
            <CoachPlanMock className="relative z-10 -rotate-3" />
            <ClientPracticeMock className="relative -ml-14 mt-16 rotate-3 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const items = [
    { icon: ICONS.fade, title: 'Practice fades', text: 'Between sessions, many clients practise too little, or rehearse the wrong thing until it sticks.' },
    { icon: ICONS.eye, title: "You can't see it", text: "You only find out how the week went once they're back in your room, and the session starts with catching up." },
    { icon: ICONS.clock, title: 'Homework takes time', text: 'Writing personal exercises and word lists for every client eats into your evenings.' },
  ]
  return (
    <section className="py-24 px-6 bg-[#13161B]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="The problem" title="One session. Six quiet days." />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="glow-card rounded-3xl bg-white/[0.03] border border-white/[0.06] p-8">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-gray-300 mb-5">
                <Icon d={it.icon} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{it.title}</h3>
              <p className="text-gray-400 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      n: '01', icon: ICONS.spark, color: 'text-brand-green',
      title: 'Create exercises with AI',
      text: 'Describe what you want or attach your notes. VoiceShape drafts an exercise block; you try it as your client, adjust it and save it to your library.',
    },
    {
      n: '02', icon: ICONS.blocks, color: 'text-brand-teal',
      title: 'Build the week like Lego',
      text: "Pick blocks, set each client's own target range and the next session date. Let it build up day by day, or let AI plan every day with fresh words and situations. You review each day first.",
    },
    {
      n: '03', icon: ICONS.chart, color: 'text-brand-blue',
      title: 'See the practice',
      text: "Which days they practised, pitch averages, time in the target zone and your client's own check-ins, ready before you meet again.",
    },
  ]
  return (
    <section id="how" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="How it works"
          title={<>Homework in minutes. <span className="brand-gradient-text">Results you can see.</span></>}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="glow-card rounded-3xl bg-white/[0.03] border border-white/[0.06] p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center ${s.color}`}>
                  <Icon d={s.icon} />
                </div>
                <span className="text-3xl font-black text-white/90">{s.n}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientSection() {
  const points = [
    'Live meters for pitch, resonance and vocal weight',
    'Words, sentences, pitch curves, breathing and real-life scenarios',
    'The meter fades over the week, so they learn to hear themselves',
    'Five to ten minutes a day, on any phone or browser',
    'They join with your invite code. No setup, no account hunting',
  ]
  return (
    <section id="clients" className="py-24 px-6 bg-[#13161B] scroll-mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <ClientPracticeMock />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">For your clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Practice that feels like progress, <span className="brand-gradient-text">not homework.</span>
          </h2>
          <ul className="flex flex-col gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-gray-300">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                  <Icon d={ICONS.check} className="w-4 h-4" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function UseCasesSection() {
  const cases = [
    { title: 'Gender-affirming voice', text: 'Pitch, resonance and vocal weight, practised safely and consistently between sessions.' },
    { title: 'Professional voice', text: 'Teachers, call-center agents and others who rely on their voice all day.' },
    { title: 'Speaking & presentation', text: 'Intonation, pacing and real-life speaking situations.' },
    { title: 'Singers & actors', text: 'Voice basics, breathing and warm-ups, every day.' },
  ]
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Use cases" title="Built for voice work of every kind" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={c.title} className="glow-card rounded-3xl bg-white/[0.03] border border-white/[0.06] p-7">
              <div className="h-1.5 w-12 rounded-full mb-5 brand-gradient-button" style={{ opacity: 0.55 + i * 0.15 }} />
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const items = [
    { icon: ICONS.shield, title: 'Educational, not medical', text: "VoiceShape supports practice; it doesn't diagnose or treat. You stay the expert." },
    { icon: ICONS.lock, title: 'Minimal data', text: 'Practice completion and measurements only. No voice recordings today.' },
    { icon: ICONS.user, title: 'No client identity to the AI', text: 'Client names, goals and personal details are never sent to the AI provider.' },
    { icon: ICONS.check, title: 'You approve everything', text: 'Every AI draft and every planned day is reviewed by you before a client sees it.' },
  ]
  return (
    <section id="trust" className="py-24 px-6 bg-[#13161B] scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Safety & privacy" title="Built to be trusted with your clients" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="glow-card rounded-3xl bg-white/[0.03] border border-white/[0.06] p-7">
              <div className="w-11 h-11 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <Icon d={it.icon} className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white mb-2">{it.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PilotSection() {
  return (
    <section id="pilot" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[70%] rounded-full blur-3xl opacity-30 brand-gradient-soft" />
        <Image src="/brand-icon.png" alt="" width={72} height={72} className="relative mx-auto rounded-2xl shadow-lg shadow-brand-blue/20 mb-6" />
        <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-4">
          Help shape <span className="brand-gradient-text">VoiceShape</span>
        </h2>
        <p className="relative text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          We&apos;re running a free pilot with voice coaches, speech-language therapists and researchers.
          Use VoiceShape with a few clients, tell us what works, and shape what we build next.
        </p>
        <div className="relative flex justify-center">
          <WaitlistForm />
        </div>
        <p className="relative text-sm text-gray-500 mt-8">
          Students and researchers: VoiceShape is also open for thesis projects. Based in Aachen, Germany ·{' '}
          <a href="mailto:hi@voiceshape.app" className="text-brand-blue hover:underline">hi@voiceshape.app</a>
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <BrandLogo variant="mark" size={22} textSize={17} />
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-500">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="mailto:hi@voiceshape.app" className="hover:text-white transition-colors">hi@voiceshape.app</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/voiceshape.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@voiceshape.app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="TikTok">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
            </svg>
          </a>
          <p className="text-xs text-gray-600">© 2026 VoiceShape</p>
        </div>
      </div>
    </footer>
  )
}
