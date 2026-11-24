import { Link } from 'react-router-dom'
import { useBook } from '../context/BookContext'
import { useProgress } from '../context/ProgressContext'
import { setsForBook } from '../data/questions'
import { Card, PageHeader } from '../components/ui'

export default function Tests() {
  const { book } = useBook()
  const { progress } = useProgress()
  const sets = setsForBook(book.id)
  const options = [
    ...sets.map((s) => ({ id: s.id, title: s.title, desc: `${s.questions.length} questions in book order`, count: s.questions.length })),
    { id: `mixed-${book.id}`, title: 'Mixed test', desc: '50 random questions drawn from every set for this book', count: 50 },
  ]

  return (
    <div>
      <PageHeader
        title="Practice Tests"
        subtitle="Round One format: 50 multiple-choice questions, 60 minutes, no time announcements."
      />
      <div className="grid md:grid-cols-3 gap-4">
        {options.map((o) => {
          const history = progress.tests.filter((t) => t.setId === o.id)
          const best = history.length ? Math.max(...history.map((t) => t.score / t.total)) : null
          return (
            <Link key={o.id} to={`/tests/${o.id}`} className="no-underline">
              <Card className="p-5 h-full hover:border-accent-200 hover:shadow-md transition-all">
                <p className="text-xs font-semibold text-accent-700 m-0">{book.short}</p>
                <h2 className="text-lg font-bold text-gray-900 mt-1 mb-1">{o.title}</h2>
                <p className="text-sm text-gray-500 mt-0">{o.desc} · 60 min</p>
                <p className="text-sm text-gray-700 mb-0">
                  {best === null ? 'Not attempted' : `Best: ${Math.round(best * 100)}% · ${history.length} attempt${history.length > 1 ? 's' : ''}`}
                </p>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
