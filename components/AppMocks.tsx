// Lightweight HTML mock-ups of the app (coach + client) in the brand colours.
// Placeholders until real screenshots of the green → blue app are taken.

export function PhoneFrame({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative w-[230px] h-[470px] rounded-[40px] bg-[#1c1f26] p-[7px] shadow-2xl shadow-black/30 ring-1 ring-black/10 ${className}`} style={style}>
      <div className="relative h-full w-full overflow-hidden rounded-[33px] bg-[#13161b]">
        <div className="absolute left-1/2 top-2.5 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
        {children}
      </div>
    </div>
  )
}

/** One screen inside a PhoneFrame (stacked screens can cross-fade). */
function Screen({ children }: { children: React.ReactNode }) {
  return <div className="absolute inset-0 px-4 pt-9 pb-4">{children}</div>
}

const Check = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const Up = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M15 7h6v6" />
  </svg>
)

const Spark = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z" />
  </svg>
)

/** Coach: describe an exercise, AI drafts a block. */
export function AiCreateScreen() {
  return (
    <Screen>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Library</p>
      <p className="mt-1 text-[15px] font-bold text-white">Create a block</p>
      <div className="mt-3 rounded-2xl bg-white/[0.05] p-3 text-[10px] leading-relaxed text-gray-300 ring-1 ring-white/10">
        5-minute warm-up, then everyday words in 150–175 Hz. Meter visible first, then hidden.
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {['Speak material', 'Pitch', '5 min'].map((c) => (
          <span key={c} className="rounded-full bg-brand-blue/15 px-2 py-1 text-[9px] font-bold text-brand-blue">{c}</span>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-bold text-white mock-btn">
        <Spark /> Create with AI
      </div>
      <p className="mt-4 text-[9px] font-semibold uppercase tracking-widest text-gray-500">AI draft · review before saving</p>
      <div className="mt-2 rounded-2xl bg-white/[0.04] p-3">
        <p className="text-[11px] font-bold text-white">Everyday words in your zone</p>
        <p className="mt-0.5 text-[9px] text-gray-400">~5 min · 3 steps</p>
        {['Gentle hum warm-up', '8 words · Pitch 150–175 Hz', 'How natural did it feel?'].map((l) => (
          <p key={l} className="mt-1.5 flex items-center gap-1.5 text-[9.5px] text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />{l}
          </p>
        ))}
      </div>
    </Screen>
  )
}

/** Coach: the week built up day by day. */
export function CoachPlanScreen() {
  const days = [
    { day: 'Day 1 · Sat', done: true, lines: ['Hold 150–175 Hz for 5 s', '8 everyday words'] },
    { day: 'Day 2 · Sun', done: true, lines: ['Hold for 6 s'] },
    { day: 'Day 3 · Mon', done: false, today: true, lines: ['New words: coffee, window…'] },
    { day: 'Day 4 · Tue', done: false, lines: ['Meter after each attempt'] },
    { day: 'Day 5 · Wed', done: false, lines: ['New situation: at the bakery'] },
  ]
  return (
    <Screen>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Alex · this week</p>
      <p className="mt-1 text-[15px] font-bold text-white">Day by day</p>
      <div className="mt-3 flex flex-col gap-2">
        {days.map((d) => (
          <div key={d.day} className={`rounded-2xl px-3 py-2 ${d.today ? 'bg-brand-blue/15 ring-1 ring-brand-blue/50' : 'bg-white/[0.04]'}`}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-white">{d.day}</span>
              {d.done ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-pink text-white"><Check /></span>
              ) : d.today ? (
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue">Today</span>
              ) : null}
            </div>
            {d.lines.map((l) => (
              <p key={l} className="mt-1 flex items-center gap-1 text-[10px] text-gray-400">
                <span className="text-brand-pink"><Up /></span>
                {l}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Screen>
  )
}

/** Client: today's practice with a live pitch meter. */
export function ClientPracticeScreen() {
  return (
    <Screen>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Day 3 of 7</p>
      <p className="mt-1 text-[15px] font-bold text-white">Hold your target zone</p>
      <p className="mt-1 text-[10px] text-gray-400">Say “mmm” and glide into the zone. Hold it for 6 seconds.</p>

      <div className="mt-4 flex gap-3 rounded-2xl bg-white/[0.04] p-3">
        <div className="relative h-56 w-9 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="absolute inset-x-0 top-[34%] h-[26%] mock-soft opacity-80" />
          <div className="absolute inset-x-1 top-[44%] h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </div>
        <div className="flex flex-1 flex-col justify-between py-1">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-500">Pitch</p>
            <p className="text-2xl font-black text-white">162<span className="ml-1 text-xs font-bold text-gray-400">Hz</span></p>
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-500">Target</p>
            <p className="text-xs font-bold text-white">150–175 Hz</p>
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-500">In zone</p>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[74%] mock-btn" />
            </div>
            <p className="mt-1 text-[10px] font-bold text-brand-pink">4.4 / 6 s</p>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-full py-2.5 text-center text-[12px] font-bold text-white mock-btn">Keep holding</div>
    </Screen>
  )
}

/** Coach: what happened during the week, before the next session. */
export function ProgressScreen() {
  const week = [true, true, true, false, true, true, null]
  return (
    <Screen>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Before Saturday&apos;s session</p>
      <p className="mt-1 text-[15px] font-bold text-white">Alex&apos;s week</p>
      <div className="mt-3 flex justify-between rounded-2xl bg-white/[0.04] px-3 py-3">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full text-white ${
                week[i] === true ? 'bg-brand-pink' : week[i] === false ? 'bg-amber-500' : 'bg-white/10'
              }`}
            >
              {week[i] === true ? <Check /> : week[i] === false ? <span className="text-[8px] font-black">1</span> : null}
            </span>
            <span className="text-[8px] font-bold text-gray-500">{d}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-white/[0.04] p-3">
          <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-500">Avg pitch</p>
          <p className="text-lg font-black text-white">164<span className="ml-0.5 text-[9px] text-gray-400">Hz</span></p>
        </div>
        <div className="rounded-2xl bg-white/[0.04] p-3">
          <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-500">In zone</p>
          <p className="text-lg font-black text-brand-pink">71%</p>
        </div>
      </div>
      <p className="mt-4 text-[9px] font-semibold uppercase tracking-widest text-gray-500">Latest check-ins</p>
      {[['8/10', 'How natural did your voice feel?'], ['3/10', 'How tired is your voice?']].map(([v, q]) => (
        <div key={q} className="mt-2 flex items-center gap-2">
          <span className="rounded-lg bg-brand-blue/15 px-2 py-1 text-[10px] font-bold text-brand-blue">{v}</span>
          <span className="text-[9.5px] text-gray-400">{q}</span>
        </div>
      ))}
    </Screen>
  )
}
