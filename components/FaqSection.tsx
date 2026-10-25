'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Who is VoiceShape for?',
    a: 'Voice coaches, speech-language therapists, voice and singing teachers and presentation coaches who see clients regularly and want them to practise well between sessions. Gender-affirming voice training is one of the main use cases.',
  },
  {
    q: 'Is VoiceShape a medical product?',
    a: "No. VoiceShape is an educational practice tool. It doesn't diagnose or treat anything. You decide what your clients practise; if something hurts or feels strained, they stop and talk to you.",
  },
  {
    q: 'How do my clients join?',
    a: 'You add a client with a first name or alias and send them a single-use invite code. They join from their phone or browser and only see the practice you assign.',
  },
  {
    q: 'What does the AI do, and what does it see?',
    a: "It drafts exercise blocks from your description or notes, and can plan each practice day with fresh words and situations. You review everything before a client sees it. Your clients' names, goals and personal details are never sent to the AI.",
  },
  {
    q: 'What do I see between sessions?',
    a: 'Which days your client practised, their measurements per exercise (for example average pitch and time in the target zone) and their own check-ins, such as comfort or tiredness.',
  },
  {
    q: 'What data is stored?',
    a: 'Today: practice completion and measurements only, no voice recordings. Optional recordings for you to listen to will come later, only with explicit client consent and automatic deletion.',
  },
  {
    q: 'Which devices does it work on?',
    a: 'Any modern browser on a phone or computer during the pilot. iOS and Android apps are on the way.',
  },
  {
    q: 'What does it cost?',
    a: 'The pilot is free. Pricing for coaches and practices will be announced before launch.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 relative z-10 scroll-mt-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Questions, answered</h2>
          <p className="text-gray-600">
            Something else? Write to{' '}
            <a href="mailto:hi@voiceshape.app" className="text-brand-blue-ink underline">hi@voiceshape.app</a>
          </p>
        </div>
        <div className="glass rounded-3xl px-6 flex flex-col divide-y divide-gray-200/70">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div style={{ maxHeight: open === i ? '600px' : '0px', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                <p className="text-gray-600 pb-5 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
