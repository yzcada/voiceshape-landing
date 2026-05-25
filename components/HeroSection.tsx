'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import WaitlistForm from './WaitlistForm'

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    /* preserve-3d so translateZ layers render in 3D perspective space */
    <div
      className="relative select-none"
      style={{ width: 260, height: 520, transformStyle: 'preserve-3d' }}
    >
      {/* Side edge — sits 14px behind the front face; peeks out on left when rotateY is negative */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 44,
          background: 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)',
          transform: 'translateZ(-14px)',
        }}
      />

      {/* Front face */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 44,
          background: '#1c1c1e',
          boxShadow:
            '0 0 0 1.5px #3a3a3c, inset 0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.55)',
          transform: 'translateZ(0)',
        }}
      >
        {/* Screen area */}
        <div
          style={{
            position: 'absolute',
            top: 4,
            left: 4,
            right: 4,
            bottom: 4,
            borderRadius: 40,
            overflow: 'hidden',
            background: '#000',
          }}
        >
          {/* Dynamic Island — pill shape */}
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 30,
              borderRadius: 20,
              background: '#000',
              zIndex: 20,
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
            }}
          />
          {children}
        </div>

        {/* Home indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 100,
            height: 4,
            borderRadius: 2,
            background: 'rgba(255,255,255,0.28)',
          }}
        />

        {/* Silent switch */}
        <div style={{ position: 'absolute', left: -4, top: 90, width: 4, height: 20, borderRadius: '2px 0 0 2px', background: '#2c2c2e' }} />
        {/* Volume up */}
        <div style={{ position: 'absolute', left: -4, top: 122, width: 4, height: 34, borderRadius: '2px 0 0 2px', background: '#2c2c2e' }} />
        {/* Volume down */}
        <div style={{ position: 'absolute', left: -4, top: 167, width: 4, height: 34, borderRadius: '2px 0 0 2px', background: '#2c2c2e' }} />
        {/* Power button */}
        <div style={{ position: 'absolute', right: -4, top: 144, width: 4, height: 60, borderRadius: '0 2px 2px 0', background: '#2c2c2e' }} />
      </div>
    </div>
  )
}

function HeroPhoneScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      {/* Status bar — below Dynamic Island */}
      <div className="absolute top-12 left-0 right-0 flex justify-between px-7 text-[10px] text-gray-400">
        <span>9:41</span>
        <span className="flex gap-1 items-center">
          <span className="w-1 h-1 rounded-full bg-gray-400" />
          <span className="w-1 h-1 rounded-full bg-gray-400" />
          <span className="w-1 h-1 rounded-full bg-gray-400" />
        </span>
      </div>
      {/* App logo */}
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)', boxShadow: '0 8px 24px rgba(197,168,216,0.35)' }}>
        <svg viewBox="0 0 40 40" className="w-12 h-12" fill="white">
          <path d="M20 6a6 6 0 100 12 6 6 0 000-12zm0 14c-6 0-11 2.7-11 6v2h22v-2c0-3.3-5-6-11-6z" />
        </svg>
      </div>
      <h3 className="text-white text-lg font-bold">VoiceShape</h3>
      <p className="text-gray-400 text-xs mt-1 mb-5">Your voice journey starts here</p>
      <div className="w-full bg-gray-800 rounded-2xl p-4 text-left">
        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">Today&apos;s Goal</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)' }}>
            <span className="text-white text-xs font-bold">5</span>
          </div>
          <div>
            <p className="text-white text-sm font-medium">Daily practice ready</p>
            <p className="text-gray-400 text-xs">5 nodes · ~8 min</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4 w-full">
        <div className="flex-1 bg-gray-800 rounded-xl p-2.5 text-center">
          <p className="text-sm font-bold" style={{ color: '#EFA8BC' }}>14</p>
          <p className="text-gray-500 text-[10px]">day streak</p>
        </div>
        <div className="flex-1 bg-gray-800 rounded-xl p-2.5 text-center">
          <p className="text-sm font-bold" style={{ color: '#C5A8D8' }}>182</p>
          <p className="text-gray-500 text-[10px]">avg Hz</p>
        </div>
        <div className="flex-1 bg-gray-800 rounded-xl p-2.5 text-center">
          <p className="text-sm font-bold" style={{ color: '#8EC4E4' }}>89%</p>
          <p className="text-gray-500 text-[10px]">accuracy</p>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const phoneWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = phoneWrapRef.current
    if (!el) return
    gsap.set(el, { transformPerspective: 600, rotateY: -30, rotateX: 6 })
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      style={{
        background:
          'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(142,196,228,0.10) 0%, rgba(197,168,216,0.08) 40%, transparent 70%), white',
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
        {/* Left: text + form */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-4 py-1.5 text-sm text-sky-700 font-medium w-fit">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Coming soon — join the waitlist
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Finding Your{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #EFA8BC 0%, #C5A8D8 50%, #8EC4E4 100%)' }}>
              True Voice
            </span>
            ,<br />One Day at a Time.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            AI-powered daily voice coaching for trans men, trans women, non-binary individuals, and anyone on their voice journey. Like Duolingo, but for your voice.
          </p>
          <WaitlistForm />
          <p className="text-xs text-gray-400">Free to start. No credit card required.</p>
        </div>

        {/* Right: 3D phone */}
        <div className="flex justify-center items-center">
          {/* transformStyle preserve-3d so PhoneShell's depth layers inherit the 3D space */}
          <div
            ref={phoneWrapRef}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            <PhoneShell>
              <HeroPhoneScreen />
            </PhoneShell>
          </div>
        </div>
      </div>
    </section>
  )
}
