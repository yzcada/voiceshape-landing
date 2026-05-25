'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is VoiceShape only for trans women?',
    a: "Not at all. VoiceShape is for trans women, trans men, non-binary individuals, and anyone exploring a different vocal range. The AI adapts to your goal, whether that's going higher, lower, or somewhere in between.",
  },
  {
    q: 'Can daily practice damage my voice?',
    a: "Sessions are short (5-10 minutes), always include a warmup, and the AI stays within a safe range for you. If you feel any pain or strain, stop and rest. Consult a speech therapist if it persists.",
  },
  {
    q: 'How does the daily lesson work?',
    a: "Each morning VoiceShape takes a 30-second voice sample and combines it with your previous results to rebuild your path. You get a mix of short theory nodes (1-2 min) and live tool exercises (3-5 min), totalling around 5-10 minutes.",
  },
  {
    q: 'What is the difference between pitch, resonance, and weight?',
    a: 'Pitch is how high or low your voice sits (in Hz). Resonance is where the sound vibrates (chest vs. head). Vocal weight is how heavy or thin your voice feels. All three shape how your voice is perceived, and VoiceShape trains each one separately.',
  },
  {
    q: 'Do I need any special equipment?',
    a: 'Just your phone and a quiet space. No external microphone or prior training needed.',
  },
  {
    q: 'Is my voice data stored or shared?',
    a: "Your actual voice recordings are not stored. Only the derived data (pitch, resonance, weight measurements) are saved to power your progress tracking. This data lives on EU-based servers and is never sold or shared. You can request deletion at any time.",
  },
  {
    q: 'Will it be available on Android and iOS?',
    a: "Yes, VoiceShape is coming to both the App Store and Google Play. Join the waitlist to be first in line when we launch.",
  },
  {
    q: 'Is VoiceShape free?',
    a: 'There will be a free tier to get started. Full pricing details will be shared at launch. Waitlist members get early access and a special launch offer.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-white relative z-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently asked questions
          </h2>
          <p className="text-gray-500">
            More questions? Reach us at{' '}
            <a href="mailto:hi@voiceshape.app" className="text-sky-600 underline">
              hi@voiceshape.app
            </a>
          </p>
        </div>
        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: open === i ? '200px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <p className="text-gray-500 pb-5">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
