import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBook } from '../context/BookContext'
import { questionsForChapter } from '../data/questions'
import { Card, PageHeader } from '../components/ui'

export default function StudyGuide() {
  const { book } = useBook()
  const { chapterId } = useParams()
  const chapter = book.chapters.find((c) => c.id === chapterId) || book.chapters[0]
  const idx = book.chapters.indexOf(chapter)
  const facts = questionsForChapter(book.id, chapter.id).sort((a, b) => parseInt(a.page) - parseInt(b.page))
  const [showFacts, setShowFacts] = useState(true)

  return (
    <div>
      <PageHeader title="Study Guide" subtitle={book.citation} />
      <div className="grid lg:grid-cols-[260px_1fr] gap-6">
        <aside className="lg:sticky lg:top-28 self-start">
          <Card className="p-2">
            {book.chapters.map((c) => (
              <Link
                key={c.id}
                to={`/study/${c.id}`}
                className={`block px-3 py-2 rounded-lg text-sm no-underline ${
                  c.id === chapter.id ? 'bg-accent-100 text-accent-900 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {c.title}
              </Link>
            ))}
          </Card>
        </aside>

        <div className="space-y-5 min-w-0">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mt-0">{chapter.title}</h2>
            <p className="text-gray-700 leading-relaxed">{chapter.summary}</p>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-700 mt-6">Key points</h3>
            <ul className="space-y-2 pl-5 text-gray-700">
              {chapter.keyPoints.map((p) => <li key={p}>{p}</li>)}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-700 mt-6">Key terms</h3>
            <div className="flex flex-wrap gap-2">
              {chapter.terms.map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-200">{t}</span>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-gray-900 m-0">Tested facts ({facts.length})</h3>
              <button
                onClick={() => setShowFacts(!showFacts)}
                className="text-sm text-accent-700 bg-transparent border-none cursor-pointer"
              >
                {showFacts ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">From the practice sets, sorted by page.</p>
            {showFacts && (
              <ul className="divide-y divide-gray-100 p-0 m-0 list-none">
                {facts.map((q) => (
                  <li key={q.id} className="py-3">
                    <p className="text-sm text-gray-600 m-0">{q.stem}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1 mb-0">
                      → {q.options[q.answer]}
                      <span className="ml-2 text-xs font-normal text-gray-400">p. {q.page}</span>
                    </p>
                  </li>
                ))}
                {!facts.length && <li className="py-3 text-sm text-gray-400">No practice questions cover this section yet.</li>}
              </ul>
            )}
          </Card>

          <div className="flex justify-between">
            {idx > 0 ? (
              <Link to={`/study/${book.chapters[idx - 1].id}`} className="text-sm font-semibold text-accent-700">← Previous</Link>
            ) : <span />}
            {idx < book.chapters.length - 1 && (
              <Link to={`/study/${book.chapters[idx + 1].id}`} className="text-sm font-semibold text-accent-700">Next →</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
