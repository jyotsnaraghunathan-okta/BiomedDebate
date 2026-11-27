import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useBook } from '../context/BookContext'
import { questionsForChapter } from '../data/questions'
import { methods } from '../data/methods'
import { Card, PageHeader } from '../components/ui'

export default function StudyGuide() {
  const { book } = useBook()
  const { chapterId } = useParams()
  const chapter = book.chapters.find((c) => c.id === chapterId) || book.chapters[0]
  const idx = book.chapters.indexOf(chapter)
  const all = questionsForChapter(book.id, chapter.id)
  const concepts = all.filter((q) => q.explanation)
  const facts = all.filter((q) => !q.explanation).sort((a, b) => parseInt(a.page) - parseInt(b.page))
  const howItWorks = methods[book.id]?.[chapter.id] || []
  const [showFacts, setShowFacts] = useState(true)

  return (
    <div>
      <PageHeader title="Study Guide" subtitle={book.citation}>
        {book.url && <a href={book.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent-700">Open source ↗</a>}
      </PageHeader>
      {book.note && (
        <p className="text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mb-5">{book.note}</p>
      )}
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
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-1">{chapter.title}</h2>
            {chapter.pages && <p className="text-xs text-gray-400 mt-0">pp. {chapter.pages}</p>}
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

          {howItWorks.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mt-0">How it works</h3>
              <p className="text-sm text-gray-500 mt-0">The methods and reasoning behind the findings.</p>
              <div className="space-y-4">
                {howItWorks.map((m) => (
                  <div key={m.title} className="border-l-4 border-accent-200 pl-4">
                    <p className="font-semibold text-gray-900 m-0">{m.title}</p>
                    <p className="text-sm text-gray-700 mt-1 mb-0 leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {concepts.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mt-0">Concepts to understand ({concepts.length})</h3>
              <ul className="divide-y divide-gray-100 p-0 m-0 list-none">
                {concepts.map((q) => (
                  <li key={q.id} className="py-3">
                    <p className="text-sm text-gray-600 m-0">{q.stem}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1 mb-1">→ {q.options[q.answer]}</p>
                    <p className="text-sm text-gray-600 m-0">{q.explanation}</p>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {(facts.length > 0 || !concepts.length) && <Card className="p-6">
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
          </Card>}

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
