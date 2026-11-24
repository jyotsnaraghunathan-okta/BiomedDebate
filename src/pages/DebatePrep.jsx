import { useEffect, useState } from 'react'
import { useBook } from '../context/BookContext'
import { DEBATE_FORMAT, RESOLUTION } from '../data/books'
import { Button, Card, fmtTime, PageHeader } from '../components/ui'

const TRANSITION = 30

// Build the full sequence: each speech followed by a 30 s transition (none after the last).
const STEPS = DEBATE_FORMAT.flatMap((s, i) =>
  i < DEBATE_FORMAT.length - 1 ? [s, { side: 'none', label: 'Transition', seconds: TRANSITION, task: 'Confer with your team.' }] : [s],
)

function SpeechTimer() {
  const [{ step, left }, setT] = useState({ step: 0, left: STEPS[0].seconds })
  const [running, setRunning] = useState(false)
  const last = STEPS.length - 1
  const active = running && !(step === last && left === 0)

  useEffect(() => {
    if (!active) return
    const t = setInterval(
      () =>
        setT(({ step, left }) =>
          left > 1 ? { step, left: left - 1 }
            : step < last ? { step: step + 1, left: STEPS[step + 1].seconds }
            : { step, left: 0 },
        ),
      1000,
    )
    return () => clearInterval(t)
  }, [active, last])

  function go(n) { setT({ step: n, left: STEPS[n].seconds }) }
  const cur = STEPS[step]
  const sideColor = cur.side === 'aff' ? 'text-blue-700' : cur.side === 'neg' ? 'text-rose-700' : 'text-gray-500'

  return (
    <Card className="p-6">
      <h2 className="text-lg font-bold mt-0">Round Two practice timer</h2>
      <p className="text-sm text-gray-500 mt-0">Six 2-minute speeches with 30-second transitions. In competition you can't use a timer and no warnings are given, so use this to build your internal clock.</p>
      <div className="text-center my-6">
        <p className={`text-sm font-semibold uppercase tracking-wider m-0 ${sideColor}`}>{cur.label}</p>
        <p className={`text-6xl font-mono font-bold my-2 ${left <= 10 && cur.side !== 'none' ? 'text-red-600' : 'text-gray-900'}`}>{fmtTime(left)}</p>
        <p className="text-sm text-gray-500 m-0">{cur.task}</p>
      </div>
      <div className="flex justify-center gap-2 flex-wrap">
        <Button variant="secondary" disabled={step === 0} onClick={() => go(step - 1)}>← Back</Button>
        <Button onClick={() => setRunning(!active)}>{active ? 'Pause' : 'Start'}</Button>
        <Button variant="secondary" disabled={step === STEPS.length - 1} onClick={() => go(step + 1)}>Skip →</Button>
        <Button variant="ghost" onClick={() => { setRunning(false); go(0) }}>Reset</Button>
      </div>
      <ol className="mt-6 grid sm:grid-cols-2 gap-2 p-0 list-none">
        {DEBATE_FORMAT.map((s, i) => (
          <li
            key={s.label}
            onClick={() => go(i * 2)}
            className={`text-sm px-3 py-2 rounded-lg border cursor-pointer ${step === i * 2 ? 'border-accent-500 bg-accent-50' : 'border-gray-200'}`}
          >
            <span className={`font-semibold ${s.side === 'aff' ? 'text-blue-700' : 'text-rose-700'}`}>{i + 1}. {s.label}</span>
            <span className="text-gray-400"> · 2:00</span>
          </li>
        ))}
      </ol>
    </Card>
  )
}

function ArgList({ title, items, color }) {
  return (
    <Card className="p-6">
      <h2 className={`text-lg font-bold mt-0 ${color}`}>{title}</h2>
      <div className="space-y-4">
        {items.map((a) => (
          <div key={a.claim}>
            <p className="font-semibold text-gray-900 m-0">{a.claim}</p>
            <p className="text-sm text-gray-600 mt-1 mb-1 leading-relaxed">{a.detail}</p>
            <p className="text-xs text-gray-400 m-0">{a.cite}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default function DebatePrep() {
  const { book } = useBook()
  return (
    <div className="space-y-6">
      <PageHeader title="Debate Prep" subtitle={`Evidence from ${book.title}`} />
      <Card className="p-5 bg-gradient-to-br from-accent-50 to-white border-accent-200">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 m-0">Resolution</p>
        <p className="text-xl font-semibold text-gray-900 mt-1 mb-0">"{RESOLUTION}"</p>
        <p className="text-sm text-gray-500 mt-2 mb-0">Sides are drawn when you enter the room, so prepare both.</p>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        <ArgList title="Affirmative" items={book.debate.aff} color="text-blue-700" />
        <ArgList title="Negative" items={book.debate.neg} color="text-rose-700" />
      </div>
      <SpeechTimer />
    </div>
  )
}
