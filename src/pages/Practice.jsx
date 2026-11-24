import { useMemo, useState } from 'react'
import { useBook } from '../context/BookContext'
import { useProgress } from '../context/ProgressContext'
import { chapterTitle, questionsForBook, shuffle } from '../data/questions'
import { Button, Card, ChapterSelect, PageHeader } from '../components/ui'
import QuestionCard from '../components/QuestionCard'

export default function Practice() {
  const { book } = useBook()
  const { progress, recordPractice } = useProgress()
  const [chapter, setChapter] = useState('all')
  const [mode, setMode] = useState('all') // all | missed | new
  const [seed, setSeed] = useState(0)
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState()
  const [session, setSession] = useState({ right: 0, done: 0 })

  const queue = useMemo(() => {
    let qs = questionsForBook(book.id).filter((q) => chapter === 'all' || q.chapter === chapter)
    if (mode === 'missed') qs = qs.filter((q) => progress.practice[q.id] === false)
    if (mode === 'new') qs = qs.filter((q) => !(q.id in progress.practice))
    return shuffle(qs)
  }, [book.id, chapter, mode, seed]) // eslint-disable-line react-hooks/exhaustive-deps

  const q = queue[i]

  function reset(fn) { fn(); setI(0); setPicked(undefined); setSession({ right: 0, done: 0 }) }
  function pick(idx) {
    setPicked(idx)
    const ok = idx === q.answer
    recordPractice(q.id, ok)
    setSession((s) => ({ right: s.right + (ok ? 1 : 0), done: s.done + 1 }))
  }

  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader
        title="Practice"
        subtitle={session.done ? `This session: ${session.right}/${session.done} correct` : 'One question at a time with instant feedback'}
      >
        <ChapterSelect chapters={book.chapters} value={chapter} onChange={(v) => reset(() => setChapter(v))} />
      </PageHeader>

      <div className="flex flex-wrap gap-2 mb-4">
        {[['all', 'All questions'], ['new', 'Unseen'], ['missed', 'Previously missed']].map(([k, label]) => (
          <Button key={k} variant={mode === k ? 'primary' : 'secondary'} onClick={() => reset(() => setMode(k))}>{label}</Button>
        ))}
      </div>

      {!q ? (
        <Card className="p-10 text-center">
          <p className="text-lg font-semibold text-gray-900">
            {queue.length ? `Done! ${session.right}/${session.done} correct.` : 'No questions match this filter.'}
          </p>
          <Button onClick={() => reset(() => setSeed((s) => s + 1))}>Start over</Button>
        </Card>
      ) : (
        <>
          <QuestionCard
            q={q}
            number={`${i + 1} of ${queue.length}`}
            meta={chapterTitle(book.id, q.chapter)}
            picked={picked}
            onPick={pick}
            reveal={picked !== undefined}
          />
          {picked !== undefined && (
            <div className="flex justify-end mt-4">
              <Button onClick={() => { setI(i + 1); setPicked(undefined) }}>Next →</Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
