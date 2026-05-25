'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import WaitlistForm from './WaitlistForm'

/* ─── Phone screen components ─── */

function PitchScopeScreen() {
  return (
    <div className="absolute inset-0 bg-white">
      <Image
        src="/Screenshot_tool.png"
        alt="VoiceShape real-time tools"
        fill
        sizes="260px"
        loading="eager"
        style={{ objectFit: 'contain', objectPosition: 'top' }}
      />
    </div>
  )
}

function DailyPathScreen() {
  return (
    <div className="absolute inset-0 bg-white">
      <Image
        src="/Screenshot_exc.png"
        alt="VoiceShape daily exercises"
        fill
        sizes="260px"
        style={{ objectFit: 'contain', objectPosition: 'top' }}
      />
    </div>
  )
}

function ProgressScreen() {
  return (
    <div className="absolute inset-0 bg-white">
      <Image
        src="/Screenshot_pitch.png"
        alt="VoiceShape pitch progress"
        fill
        sizes="260px"
        style={{ objectFit: 'contain', objectPosition: 'top' }}
      />
    </div>
  )
}

function CommunityScreen() {
  return (
    <div className="h-full bg-gray-950 flex flex-col justify-end p-4 pb-6 gap-3">
      <div className="absolute top-12 left-0 right-0 flex justify-between px-7 text-[10px] text-gray-500">
        <span>9:41</span>
        <span>●●●</span>
      </div>
      <p className="text-gray-500 text-[10px] uppercase tracking-widest text-center mt-8 mb-1">Community</p>
      <div className="flex gap-2 items-end">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-xs font-bold">A</span>
        </div>
        <div className="bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[68%]">
          <p className="text-white text-xs leading-relaxed">Just hit 180 Hz consistently! 🎉 Week 4 feels incredible.</p>
          <p className="text-gray-500 text-[10px] mt-1">2 min ago</p>
        </div>
      </div>
      <div className="flex gap-2 items-end justify-end">
        <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[68%]">
          <p className="text-white text-xs leading-relaxed">That&apos;s amazing! Same for me in week 3 ✨</p>
          <p className="text-pink-200 text-[10px] mt-1">just now</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-xs font-bold">M</span>
        </div>
      </div>
    </div>
  )
}

function HeroPhoneScreen() {
  return (
    <div className="absolute inset-0 bg-white flex items-start justify-center">
      <Image
        src="/Screenshot_main.png"
        alt="VoiceShape app"
        fill
        sizes="260px"
        loading="eager"
        style={{ objectFit: 'contain', objectPosition: 'top' }}
      />
    </div>
  )
}

/* ─── Phone shell ─── */

function Phone({ activePanel }: { activePanel: number }) {
  const screens = [
    <PitchScopeScreen key={0} />,
    <DailyPathScreen key={1} />,
    <ProgressScreen key={2} />,
  ]
  return (
    <div style={{ position: 'relative', width: 260, height: 520 }}>
      {/* Left side buttons (mute + volume up + volume down) */}
      <div style={{ position: 'absolute', left: -3, top: 110, width: 3, height: 28, borderRadius: '3px 0 0 3px', background: '#2e2e30' }} />
      <div style={{ position: 'absolute', left: -3, top: 155, width: 3, height: 48, borderRadius: '3px 0 0 3px', background: '#2e2e30' }} />
      <div style={{ position: 'absolute', left: -3, top: 215, width: 3, height: 48, borderRadius: '3px 0 0 3px', background: '#2e2e30' }} />

      {/* Phone body */}
      <div
        data-phone-body="true"
        style={{
          width: 260,
          height: 520,
          borderRadius: 44,
          background: 'linear-gradient(160deg, #2c2c2e 0%, #1c1c1e 60%)',
          boxShadow: [
            '0 0 0 1px #3a3a3c',
            'inset 0 0 0 1px rgba(255,255,255,0.06)',
            '14px 10px 0 -1px #111',
            '14px 10px 0 0 #252527',
            '0 30px 80px rgba(0,0,0,0.5)',
          ].join(', '),
          position: 'relative',
        }}
      >
        {/* Front camera */}
        <div style={{
          position: 'absolute', top: 14, left: '50%',
          transform: 'translateX(-50%)',
          width: 10, height: 10,
          borderRadius: '50%',
          background: '#0a0a0c',
          boxShadow: '0 0 0 1px #2a2a2c',
          zIndex: 10,
        }} />

        {/* Screen */}
        <div
          style={{
            position: 'absolute',
            top: 6,
            left: 6,
            right: 6,
            bottom: 6,
            borderRadius: 38,
            overflow: 'hidden',
            background: '#000',
          }}
        >
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: activePanel === -1 ? 1 : 0 }}
          >
            <HeroPhoneScreen />
          </div>
          {screens.map((screen, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: activePanel === i ? 1 : 0 }}
            >
              {screen}
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div style={{
          position: 'absolute', bottom: 10, left: '50%',
          transform: 'translateX(-50%)',
          width: 80, height: 4,
          borderRadius: 2,
          background: 'rgba(255,255,255,0.2)',
          zIndex: 10,
        }} />
      </div>
    </div>
  )
}

/* ─── Feature data ─── */

const features = [
  {
    subtitle: 'Real-time voice tools',
    title: 'Pitch, Resonance & Weight',
    description:
      'See the three core dimensions of your voice as you speak. Track pitch target, resonance brightness, and vocal weight in real time. Fine-tune each tool\'s sensitivity (in settings) to match your training pace.',
  },
  {
    subtitle: 'Adapts to your progress',
    title: 'Daily Lesson Path',
    description:
      'Each morning your path rebuilds around yesterday\'s results and a fresh 30-second voice sample. Short lesson nodes mix with live tool exercises, so you\'re always practicing exactly what moves you forward.',
  },
  {
    subtitle: 'Weekly and monthly insights',
    title: 'Track Your Progress',
    description:
      'Watch your pitch, resonance, and vocal weight shift over time. Weekly and monthly charts show exactly where you improved (and where to focus next).',
  },
]

/* ─── Mobile layout ─── */

function MobileLayout() {
  return (
    <section className="bg-white">
      <div
        className="min-h-screen flex flex-col justify-center px-6 py-20"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(142,196,228,0.10) 0%, rgba(197,168,216,0.08) 40%, transparent 70%), white',
        }}
      >
        <div className="flex items-center gap-1.5 mb-6">
          <Image src="/Logo_trans.png" alt="VoiceShape" width={64} height={64} />
          <span style={{
            fontSize: '24px',
            fontWeight: '700',
            letterSpacing: '-0.5px',
            backgroundImage: 'linear-gradient(90deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>VoiceShape</span>
        </div>
        <button
          onClick={() => { const el = document.querySelector('input[type="email"]') as HTMLInputElement; el?.focus() }}
          className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-sm text-sky-700 font-medium w-fit mb-4 hover:bg-sky-100 transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Coming soon — join the waitlist
        </button>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
          Finding Your<br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)' }}>
            True Voice
          </span>
          ,<br />One Day at a Time.
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-6">
          AI-powered daily voice coaching for trans men, trans women, non-binary individuals, and anyone on their voice journey.
        </p>
        <WaitlistForm />
        <p className="text-xs text-gray-400 mt-3">Free to start. No credit card required.</p>
        <p className="text-xs text-gray-400 mt-4 leading-relaxed italic">
          VoiceShape is an educational voice training tool. It supports you in working independently on your voice and is not a medical device or medical service.
        </p>
      </div>
      <div className="py-20 px-6">
        <div className="max-w-lg mx-auto flex flex-col gap-16">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-6">
              <Phone activePanel={i} />
              <div className="text-center">
                <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-2">{f.subtitle}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Main scroll section ─── */

export default function ScrollSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const [activePanel, setActivePanel] = useState(-1)
  const [isMobile, setIsMobile] = useState(false)
  const activePanelRef = useRef(-1)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const phone = phoneRef.current
    const hero = heroContentRef.current
    const section = sectionRef.current
    if (!phone || !hero || !section) return

    // Move phone horizontally via CSS `right`, transform handles centering + 3D tilt + scale
    const setPhone = (rightPct: number, ry: number, rx: number, sc: number) => {
      phone.style.right = `${rightPct}%`
      phone.style.transform = `translateY(-50%) perspective(1000px) rotateY(${ry}deg) rotateX(${rx}deg) scale(${sc})`
    }

    setPhone(18, -25, 8, 1)

    const tick = () => {
      const scrollY = window.scrollY
      const sectionTop = section.offsetTop
      const totalScroll = section.offsetHeight - window.innerHeight
      if (totalScroll <= 0) return

      const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / totalScroll))
      const phaseA = Math.min(1, progress / 0.25)
      const vw = window.innerWidth

      // Phone center: starts at (78%vw - 130) → ends at 31%vw (equal gaps with text at 62%)
      const centerX = (0.78 * vw - 130) * (1 - phaseA) + (0.31 * vw) * phaseA
      const rightPct = (vw - centerX - 130) / vw * 100

      setPhone(
        rightPct,
        -25 * (1 - phaseA),
        8 * (1 - phaseA),
        1 + 0.15 * phaseA,
      )

      // Depth shadow fades out as phone straightens
      const phoneBody = phone.querySelector('[data-phone-body]') as HTMLElement | null
      if (phoneBody) {
        const d = 14 * (1 - phaseA)
        phoneBody.style.boxShadow = [
          '0 0 0 1px #3a3a3c',
          'inset 0 0 0 1px rgba(255,255,255,0.06)',
          `${d}px 10px 0 -1px #111`,
          `${d}px 10px 0 0 #252527`,
          '0 30px 80px rgba(0,0,0,0.5)',
        ].join(', ')
      }

      hero.style.opacity = String(Math.max(0, 1 - phaseA / 0.8))

      // Phase B (progress 0.25 → 1.0): cycle through 3 feature panels
      if (progress >= 0.25) {
        const idx = Math.min(2, Math.floor(((progress - 0.25) / 0.75) * 3))
        if (idx !== activePanelRef.current) {
          activePanelRef.current = idx
          setActivePanel(idx)
        }
      } else if (activePanelRef.current !== -1) {
        activePanelRef.current = -1
        setActivePanel(-1)
      }
    }

    tick()
    gsap.ticker.add(tick)

    return () => {
      gsap.ticker.remove(tick)
      phone.style.right = ''
      phone.style.transform = ''
      hero.style.opacity = ''
    }
  }, [isMobile])

  if (isMobile) return <MobileLayout />

  return (
    <section ref={sectionRef} style={{ height: '325vh' }} className="relative">
      <div
        className="sticky top-0 h-screen w-full flex items-center"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(142,196,228,0.10) 0%, rgba(197,168,216,0.08) 40%, transparent 70%), white',
        }}
      >
        {/* Hero content — fades and slides left as user scrolls */}
        <div
          ref={heroContentRef}
          className="absolute left-12 xl:left-20 max-w-lg"
          style={{ zIndex: 1 }}
        >
          <div className="flex items-center gap-1.5 mb-5">
            <Image src="/Logo_trans.png" alt="VoiceShape" width={64} height={64} />
            <span
              style={{
                fontSize: '26px',
                fontWeight: '700',
                letterSpacing: '-0.5px',
                background: 'linear-gradient(90deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              VoiceShape
            </span>
          </div>
          <button
            onClick={() => { const el = document.querySelector('input[type="email"]') as HTMLInputElement; el?.focus() }}
            className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-sm text-sky-700 font-medium w-fit mb-4 hover:bg-sky-100 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Coming soon — join the waitlist
          </button>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
            Finding Your<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)' }}>
              True Voice
            </span>
            ,<br />One Day at a Time.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            AI-powered daily voice coaching for trans men, trans women, non-binary individuals, and anyone on their voice journey. Like Duolingo, but for your voice.
          </p>
          <WaitlistForm />
          <p className="text-xs text-gray-400 mt-4 leading-relaxed italic max-w-sm">
            VoiceShape is an educational voice training tool. It supports you in working independently on your voice and is not a medical device or medical service.
          </p>
        </div>

        {/* Phone — right-[22%] via Tailwind (not in style prop, so React won't reset it on re-render) */}
        <div
          ref={phoneRef}
          className="absolute right-[22%]"
          style={{
            top: '50%',
            zIndex: 5,
          }}
        >
          <Phone activePanel={activePanel} />
        </div>

        {/* Feature panels — shown during Phase B */}
        {features.map((f, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-700 ${
              activePanel === i
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-8 pointer-events-none'
            }`}
            style={{ left: '62%', width: '33vw', zIndex: 3 }}
          >
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-2">{f.subtitle}</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{f.title}</h2>
            <p className="text-gray-500 text-lg leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
