// Lightweight HTML mock-ups of the app (coach + client) in the brand colours.
// Placeholders until real screenshots of the green → blue app are taken.

function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[230px] h-[470px] rounded-[40px] bg-[#1c1f26] p-[7px] shadow-2xl shadow-black/60 ring-1 ring-white/10 ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[33px] bg-[#13161b]">
        <div className="absolute left-1/2 top-2.5 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
        <div className="h-full px-4 pt-9 pb-4">{children}</div>
      </div>
    </div>
  )
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

/** Coach view: the week built up day by day. */
export function CoachPlanMock({ className = '' }: { className?: string }) {
  const days = [
    { day: 'Day 1 · Sat', done: true, lines: ['Hold 150–175 Hz for 5 s', '8 everyday words'] },
    { day: 'Day 2 · Sun', done: true, lines: ['Hold for 6 s'] },
    { day: 'Day 3 · Mon', done: false, today: true, lines: ['New words: coffee, window…'] },
    { day: 'Day 4 · Tue', done: false, lines: ['Meter after each attempt'] },
    { day: 'Day 5 · Wed', done: false, lines: ['New situation: at the bakery'] },
  ]
  return (
    <PhoneFrame className={className}>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Alex · this week</p>
      <p className="mt-1 text-[15px] font-bold text-white">Day by day</p>
      <div className="mt-3 flex flex-col gap-2">
        {days.map((d) => (
          <div key={d.day} className={`rounded-2xl px-3 py-2 ${d.today ? 'bg-brand-blue/15 ring-1 ring-brand-blue/50' : 'bg-white/[0.04]'}`}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-white">{d.day}</span>
              {d.done ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-green text-white"><Check /></span>
              ) : d.today ? (
                <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue">Today</span>
              ) : null}
            </div>
            {d.lines.map((l) => (
              <p key={l} className="mt-1 flex items-center gap-1 text-[10px] text-gray-400">
                <span className="text-brand-green"><Up /></span>
                {l}
              </p>
            ))}
          </div>
        ))}
      </div>
    </PhoneFrame>
  )
}

/** Client view: today's practice with a live pitch meter. */
export function ClientPracticeMock({ className = '' }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Day 3 of 7</p>
      <p className="mt-1 text-[15px] font-bold text-white">Hold your target zone</p>
      <p className="mt-1 text-[10px] text-gray-400">Say “mmm” and glide into the zone. Hold it for 6 seconds.</p>

      <div className="mt-4 flex gap-3 rounded-2xl bg-white/[0.04] p-3">
        <div className="relative h-56 w-9 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="absolute inset-x-0 top-[34%] h-[26%] brand-gradient-soft opacity-80" />
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
              <div className="h-full w-[74%] brand-gradient-button" />
            </div>
            <p className="mt-1 text-[10px] font-bold text-brand-green">4.4 / 6 s</p>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-full py-2.5 text-center text-[12px] font-bold text-white brand-gradient-button">Keep holding</div>
    </PhoneFrame>
  )
}
