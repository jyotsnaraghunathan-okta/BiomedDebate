import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBook } from '../context/BookContext'
import { books } from '../data/books'
import { useProgress } from '../context/ProgressContext'
import { chapterTitle, questionsForBook, shuffle, testSets } from '../data/questions'
import { Bar, Button, Card, fmtTime, PageHeader } from '../components/ui'
import QuestionCard from '../components/QuestionCard'

const DURATION = 60 * 60

function buildTest(setId) {
  const set = testSets.find((s) => s.id === setId)
  if (set) return { book: set.book, title: set.title, questions: set.questions.map((q) => ({ ...q, setId: set.id })) }
  const m = /^mixed-(levy|bognar)$/.exec(setId || '')
  if (m) return { book: m[1], title: 'Mixed test', questions: shuffle(questionsForBook(m[1])).slice(0, 50) }
  return null
}

export default function TestTaking() {
  const { setId } = useParams()
  const { bookId, selectBook } = useBook()
  const { recordTest } = useProgress()
  const [test] = useState(() => buildTest(setId))
  const [answers, setAnswers] = useState({})
  const [current, setCurrent] = useState(0)
  const [left, setLeft] = useState(DURATION)
  const [result, setResult] = useState(null)
  const [reviewFilter, setReviewFilter] = useState('wrong')
  const [deadline] = useState(() => Date.now() + DURATION * 1000)
  const submitRef = useRef(null)

  useEffect(() => {
    submitRef.current = submit
  })

  useEffect(() => {
    if (result || !test || test.book !== bookId) return
    const t = setInterval(() => {
      const remaining = Math.max(0, Math.round((deadline - Date.now()) / 1000))
      setLeft(remaining)
      if (remaining === 0) submitRef.current()
    }, 1000)
    return () => clearInterval(t)
  }, [result, deadline, test, bookId])

  function submit() {
    const qs = test.questions
    const byChapter = {}
    let score = 0
    qs.forEach((q) => {
      const ok = answers[q.id] === q.answer
      if (ok) score++
      byChapter[q.chapter] ??= { right: 0, total: 0 }
      byChapter[q.chapter].total++
      if (ok) byChapter[q.chapter].right++
    })
    const r = { setId, book: test.book, title: test.title, score, total: qs.length, byChapter, seconds: DURATION - left, date: new Date().toISOString() }
    setResult(r)
    recordTest(r)
    window.scrollTo(0, 0)
  }

  if (!test) return <p>Test not found. <Link to="/tests">Back to tests</Link></p>
  if (test.book !== bookId) {
    return (
      <Card className="p-8 text-center max-w-xl mx-auto">
        <p className="text-gray-700">This test is for <b>{books[test.book].title}</b>.</p>
        <Button onClick={() => selectBook(test.book)}>Switch book and start</Button>
      </Card>
    )
  }
  const qs = test.questions
  const answered = Object.keys(answers).length

  if (result) {
    const shown = qs.filter((q) => reviewFilter === 'all' || answers[q.id] !== q.answer)
    return (
      <div className="max-w-3xl mx-auto space-y-5">
        <PageHeader title={`${test.title}: Results`} subtitle={`Finished in ${fmtTime(result.seconds)}`}>
          <Link to="/tests" className="text-sm font-semibold text-accent-700">← All tests</Link>
        </PageHeader>
        <Card className="p-6 text-center">
          <p className="text-5xl font-bold text-accent-700 m-0">{result.score}/{result.total}</p>
          <p className="text-gray-500 mb-0">{Math.round((result.score / result.total) * 100)}%</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-bold mt-0">By chapter</h2>
          <div className="space-y-3">
            {Object.entries(result.byChapter).map(([ch, v]) => (
              <div key={ch}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">{chapterTitle(test.book, ch)}</span>
                  <span className="text-gray-500">{v.right}/{v.total}</span>
                </div>
                <Bar value={v.right / v.total} />
              </div>
            ))}
          </div>
        </Card>
        <div className="flex gap-2">
          <Button variant={reviewFilter === 'wrong' ? 'primary' : 'secondary'} onClick={() => setReviewFilter('wrong')}>Missed ({qs.length - result.score})</Button>
          <Button variant={reviewFilter === 'all' ? 'primary' : 'secondary'} onClick={() => setReviewFilter('all')}>All questions</Button>
        </div>
        {shown.map((q) => (
          <QuestionCard key={q.id} q={q} number={qs.indexOf(q) + 1} meta={chapterTitle(test.book, q.chapter)} picked={answers[q.id]} reveal />
        ))}
      </div>
    )
  }

  const q = qs[current]
  return (
    <div className="max-w-3xl mx-auto">
      <div className="sticky top-28 lg:top-28 z-10 mb-4">
        <Card className="px-4 py-3 flex items-center gap-4">
          <span className="font-semibold text-gray-900 text-sm truncate">{test.title}</span>
          <Bar value={answered / qs.length} className="flex-1" />
          <span className="text-sm text-gray-500 whitespace-nowrap">{answered}/{qs.length}</span>
          <span className={`font-mono font-bold text-sm ${left < 300 ? 'text-red-600' : 'text-gray-900'}`}>{fmtTime(left)}</span>
        </Card>
      </div>

      <QuestionCard
        q={q}
        number={current + 1}
        picked={answers[q.id]}
        onPick={(idx) => setAnswers((a) => ({ ...a, [q.id]: idx }))}
      />

      <div className="flex justify-between mt-4">
        <Button variant="secondary" disabled={current === 0} onClick={() => setCurrent(current - 1)}>← Previous</Button>
        {current < qs.length - 1 ? (
          <Button onClick={() => setCurrent(current + 1)}>Next →</Button>
        ) : (
          <Button onClick={() => { if (answered === qs.length || confirm(`${qs.length - answered} unanswered. Submit anyway?`)) submit() }}>Submit test</Button>
        )}
      </div>

      <Card className="p-4 mt-6">
        <p className="text-xs text-gray-500 mt-0">Jump to question</p>
        <div className="grid grid-cols-10 gap-1.5">
          {qs.map((qq, idx) => (
            <button
              key={qq.id}
              onClick={() => setCurrent(idx)}
              className={`h-8 rounded-md text-xs font-semibold border cursor-pointer ${
                idx === current ? 'border-accent-600 bg-accent-600 text-white'
                  : qq.id in answers ? 'border-accent-200 bg-accent-100 text-accent-900' : 'border-gray-200 bg-white text-gray-500'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-3">
          <Button variant="ghost" onClick={() => { if (confirm('Submit the test now?')) submit() }}>Submit now</Button>
        </div>
      </Card>
    </div>
  )
}
