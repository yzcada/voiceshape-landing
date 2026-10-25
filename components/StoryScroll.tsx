'use client'

// The pinned scroll story (desktop). The screen stays in place while you scroll:
//   1. hero text + tilted phone (like the original site),
//   2. the phone straightens, moves to the left and its screen changes with each feature,
//   3. the phone fades out where it stands and groups of cards come forward, one after another.
// Phones and small screens get the same content as a normal stacked page.
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { AiCreateScreen, ClientPracticeScreen, CoachPlanScreen, PhoneFrame, ProgressScreen } from './AppMocks'
import { ICONS, Icon } from './Icon'

/* ─── Content ─── */

const FEATURES = [
  {
    eyebrow: 'Create with AI',
    title: 'Exercises in minutes, not evenings',
    text: 'Describe what you want or attach your notes. VoiceShape drafts an exercise block; you try it as your client, adjust it and save it to your library.',
    screen: <AiCreateScreen />,
  },
  {
    eyebrow: 'Build the week like Lego',
    title: 'A plan for every day until you meet',
    text: "Pick blocks, set each client's own target range and the next session date. Let it build up day by day, or let AI plan every day with fresh words and situations. You review each day first.",
    screen: <CoachPlanScreen />,
  },
  {
    eyebrow: 'For your clients',
    title: 'Practice that feels like progress',
    text: 'Live meters for pitch, resonance and vocal weight, five to ten minutes a day. The meter fades over the week, so they learn to hear themselves. They join with your invite code.',
    screen: <ClientPracticeScreen />,
  },
  {
    eyebrow: 'See the practice',
    title: 'Walk into every session prepared',
    text: "Which days they practised, pitch averages, time in the target zone and your client's own check-ins, ready before you meet again.",
    screen: <ProgressScreen />,
  },
]

const GROUPS = [
  {
    id: 'problem',
    eyebrow: 'The problem',
    title: <>One session. <span className="brand-gradient-text">Six quiet days.</span></>,
    cards: [
      { icon: ICONS.fade, title: 'Practice fades', text: 'Between sessions, many clients practise too little, or rehearse the wrong thing until it sticks.' },
      { icon: ICONS.eye, title: "You can't see it", text: "You only find out how the week went once they're back in your room." },
      { icon: ICONS.clock, title: 'Homework takes time', text: 'Writing personal exercises and word lists for every client eats into your evenings.' },
    ],
  },
  {
    id: 'use-cases',
    eyebrow: 'Use cases',
    title: <>Built for voice work <span className="brand-gradient-text">of every kind</span></>,
    cards: [
      { icon: ICONS.voice, title: 'Gender-affirming voice', text: 'Pitch, resonance and vocal weight, practised safely and consistently between sessions.' },
      { icon: ICONS.school, title: 'Professional voice', text: 'Teachers, call-center agents and others who rely on their voice all day.' },
      { icon: ICONS.present, title: 'Speaking & presentation', text: 'Intonation, pacing and real-life speaking situations.' },
      { icon: ICONS.music, title: 'Singers & actors', text: 'Voice basics, breathing and warm-ups, every day.' },
    ],
  },
  {
    id: 'trust',
    eyebrow: 'Safety & privacy',
    title: <>Built to be trusted <span className="brand-gradient-text">with your clients</span></>,
    cards: [
      { icon: ICONS.shield, title: 'Educational, not medical', text: "VoiceShape supports practice; it doesn't diagnose or treat. You stay the expert." },
      { icon: ICONS.lock, title: 'Minimal data', text: 'Practice completion and measurements only. No voice recordings today.' },
      { icon: ICONS.user, title: 'No client identity to the AI', text: 'Client names, goals and personal details are never sent to the AI provider.' },
      { icon: ICONS.check, title: 'You approve everything', text: 'Every AI draft and every planned day is reviewed by you before a client sees it.' },
    ],
  },
]

/* ─── Timeline (in "screens" of scrolling) ─── */

const HERO_HOLD = 0.5
const MOVE = 0.6
const FEATURE_LEN = 1
const PHONE_EXIT = 0.45
const GROUP_LEN = 1.15
const FEATURES_START = HERO_HOLD + MOVE
const FEATURES_END = FEATURES_START + FEATURES.length * FEATURE_LEN
const GROUPS_START = FEATURES_END + PHONE_EXIT
const TOTAL = GROUPS_START + GROUPS.length * GROUP_LEN

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v))
const ease = (t: number) => t * t * (3 - 2 * t)

/** 0 → 1 → 0 visibility of a window [start, end] (in screens), with soft edges. */
function windowVis(s: number, start: number, end: number, edge: number, keepAtEnd = false) {
  const fadeIn = ease(clamp((s - start) / edge))
  const fadeOut = keepAtEnd ? 1 : ease(clamp((end - s) / edge))
  return { inT: fadeIn, outT: fadeOut, vis: Math.min(fadeIn, fadeOut) }
}

/* ─── Small pieces ─── */

function HeroText() {
  return (
    <>
      <a href="#pilot" className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 border border-brand-blue/25 px-4 py-1.5 text-sm text-brand-blue-ink font-medium mb-6 hover:bg-brand-blue/15 transition-colors">
        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
        Free pilot for voice coaches &amp; speech therapists
      </a>
      <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-gray-900 leading-[1.06] mb-6">
        Turn one session a week into <span className="brand-gradient-text">practice every day.</span>
      </h1>
      <p className="text-lg xl:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
        Build personalised daily practice in minutes with AI. Your clients train with live pitch and resonance feedback,
        and you see their consistency, measurements and check-ins before the next session.
      </p>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <a href="#pilot" className="rounded-full px-7 py-3.5 text-base font-semibold text-white brand-gradient-button hover:opacity-90 transition-opacity shadow-lg shadow-brand-blue/20">
          Join the free pilot
        </a>
        <a href="#how" className="rounded-full px-7 py-3.5 text-base font-semibold text-gray-800 border border-gray-300 bg-white/60 hover:bg-white transition-colors">
          See how it works
        </a>
      </div>
      <p className="text-xs text-gray-500">Educational practice tool · not a medical device · made in Aachen, Germany</p>
    </>
  )
}

function Card({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="glow-card h-full rounded-3xl bg-white/80 backdrop-blur-sm p-7 shadow-sm">
      <div className="w-11 h-11 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue-ink mb-4">
        <Icon d={icon} className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
    </div>
  )
}

function GroupHeading({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      <p className="text-brand-blue-ink text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
    </div>
  )
}

/* ─── Mobile / small screens: the same story as a normal page ─── */

function StackedStory() {
  return (
    <div>
      <section className="px-6 pt-14 pb-16">
        <HeroText />
      </section>
      <section id="how" className="px-6 py-10 flex flex-col gap-16 scroll-mt-16">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex flex-col items-center gap-6 text-center">
            <PhoneFrame>{f.screen}</PhoneFrame>
            <div className="max-w-md">
              <p className="text-brand-blue-ink text-sm font-semibold uppercase tracking-widest mb-2">{f.eyebrow}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.text}</p>
            </div>
          </div>
        ))}
      </section>
      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="px-6 py-14 scroll-mt-16">
          <GroupHeading eyebrow={g.eyebrow} title={g.title} />
          <div className="grid gap-4 sm:grid-cols-2">
            {g.cards.map((c) => <Card key={c.title} {...c} />)}
          </div>
        </section>
      ))}
    </div>
  )
}

/* ─── Desktop: pinned stage ─── */

export default function StoryScroll() {
  const [desktop, setDesktop] = useState<boolean | null>(null)
  const [feature, setFeature] = useState(-1)
  const sectionRef = useRef<HTMLElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const groupRefs = useRef<(HTMLDivElement | null)[]>([])
  const featureRef = useRef(-1)

  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 1024 && window.innerHeight >= 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!desktop) return
    const section = sectionRef.current
    const phone = phoneRef.current
    const hero = heroRef.current
    const featuresEl = featuresRef.current
    if (!section || !phone || !hero || !featuresEl) return

    const tick = () => {
      const vh = window.innerHeight
      const vw = window.innerWidth
      const s = clamp((window.scrollY - section.offsetTop) / vh, 0, TOTAL)

      // Phase A: phone from beside the hero text (tilted) to the left-centre (straight, larger); hero fades.
      const a = ease(clamp((s - HERO_HOLD) / MOVE))
      const heroRight = hero.getBoundingClientRect().right
      const startX = Math.min(heroRight + 260, vw - 230)
      const centerX = startX * (1 - a) + (0.3 * vw) * a
      const exit = ease(clamp((s - FEATURES_END) / PHONE_EXIT))
      phone.style.left = `${centerX - 115}px`
      phone.style.opacity = String(1 - exit)
      phone.style.transform =
        `translateY(-50%) perspective(1000px) rotateY(${-24 * (1 - a)}deg) rotateX(${7 * (1 - a)}deg) scale(${(1.14 + 0.1 * a) * (1 - 0.08 * exit)})`
      // Side edge (thickness) while tilted, like the original site; it disappears as the phone straightens.
      const frame = phone.firstElementChild as HTMLElement | null
      if (frame) {
        const d = 16 * (1 - a)
        frame.style.boxShadow = [
          '0 0 0 1px rgba(0,0,0,0.12)',
          `${d}px ${d * 0.6}px 0 -1px #0b0c0f`,
          `${d}px ${d * 0.6}px 0 0 #2a2d33`,
          `${d * 0.5}px ${d * 0.3}px 0 0 #1c1f26`,
          '0 30px 70px rgba(15, 23, 42, 0.28)',
        ].join(', ')
      }
      phone.style.visibility = exit >= 1 ? 'hidden' : 'visible'
      hero.style.opacity = String(1 - clamp(a / 0.7))
      hero.style.visibility = a >= 0.7 ? 'hidden' : 'visible'

      // Phase B: which feature is showing (phone screen + text, cross-faded with CSS like the old site).
      const idx = s < FEATURES_START - 0.15 ? -1 : Math.min(FEATURES.length - 1, Math.max(0, Math.floor((s - FEATURES_START + 0.15) / FEATURE_LEN)))
      const shown = s >= FEATURES_END - 0.1 ? -2 : idx
      if (shown !== featureRef.current) {
        featureRef.current = shown
        setFeature(shown)
      }
      featuresEl.style.visibility = s > FEATURES_END + PHONE_EXIT ? 'hidden' : 'visible'

      // Phase C: card groups come forward in place (opacity + scale only, no sliding).
      GROUPS.forEach((_, gi) => {
        const el = groupRefs.current[gi]
        if (!el) return
        const start = GROUPS_START + gi * GROUP_LEN
        const last = gi === GROUPS.length - 1
        const { inT, outT, vis } = windowVis(s, start, start + GROUP_LEN, 0.32, last)
        el.style.opacity = String(vis)
        el.style.visibility = vis <= 0.001 ? 'hidden' : 'visible'
        el.style.transform = `translate(-50%, -50%) scale(${0.92 + 0.08 * inT + 0.05 * (1 - outT)})`
        el.querySelectorAll<HTMLElement>('[data-card]').forEach((card, ci) => {
          const c = ease(clamp((s - start - ci * 0.06) / 0.3))
          card.style.opacity = String(c)
          card.style.transform = `scale(${0.9 + 0.1 * c})`
        })
      })
    }

    tick()
    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [desktop])

  if (desktop === null) {
    // Before we know the screen size: render the stacked version (also what search engines see).
    return <StackedStory />
  }
  if (!desktop) return <StackedStory />

  // Anchors inside the tall section so the nav links land on the right moment of the story.
  const anchorTop = (screens: number) => `${screens * 100}vh`

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${(TOTAL + 1) * 100}vh` }}>
      <div id="how" className="absolute left-0 w-px h-px" style={{ top: anchorTop(FEATURES_START + 0.2) }} />
      {GROUPS.map((g, gi) => (
        <div key={g.id} id={g.id} className="absolute left-0 w-px h-px" style={{ top: anchorTop(GROUPS_START + gi * GROUP_LEN + 0.4) }} />
      ))}

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Hero text */}
        <div ref={heroRef} className="absolute left-12 xl:left-24 top-1/2 -translate-y-1/2 max-w-[640px] 2xl:max-w-[760px]" style={{ zIndex: 2 }}>
          <HeroText />
        </div>

        {/* Phone with stacked screens */}
        <div ref={phoneRef} className="absolute top-1/2" style={{ zIndex: 5, willChange: 'transform, opacity' }}>
          <PhoneFrame>
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: feature === i || (i === 1 && feature === -1) || (i === FEATURES.length - 1 && feature === -2) ? 1 : 0 }}
              >
                {f.screen}
              </div>
            ))}
          </PhoneFrame>
        </div>

        {/* Feature texts (old-site style: fade + small rise) */}
        <div ref={featuresRef}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`absolute top-1/2 transition-all duration-700 ${
                feature === i ? 'opacity-100 -translate-y-1/2' : 'opacity-0 -translate-y-[40%] pointer-events-none'
              }`}
              style={{ left: '54%', width: '36vw', maxWidth: 520, zIndex: 3 }}
            >
              <p className="text-brand-blue-ink text-sm font-semibold uppercase tracking-widest mb-3">{f.eyebrow}</p>
              <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-5">{f.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Card groups, coming forward in the same place */}
        {GROUPS.map((g, gi) => (
          <div
            key={g.id}
            ref={(el) => { groupRefs.current[gi] = el }}
            className="absolute left-1/2 top-1/2 w-full max-w-6xl px-10"
            style={{ opacity: 0, visibility: 'hidden', transform: 'translate(-50%, -50%) scale(0.92)', zIndex: 4 }}
          >
            <GroupHeading eyebrow={g.eyebrow} title={g.title} />
            <div className={`grid gap-6 ${g.cards.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
              {g.cards.map((c) => (
                <div key={c.title} data-card style={{ opacity: 0 }}>
                  <Card {...c} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
