import { Link } from 'react-router-dom'
import { useBook } from '../context/BookContext'
import { useProgress } from '../context/ProgressContext'
import { questionsForBook, questionsForChapter, setsForBook } from '../data/questions'
import { RESOLUTION } from '../data/books'
import { Card, Bar } from '../components/ui'

export default function Dashboard() {
  const { book } = useBook()
  const { progress } = useProgress()
  const qs = questionsForBook(book.id)
  const known = qs.filter((q) => progress.cards[q.id] === 'known').length
  const practiced = qs.filter((q) => q.id in progress.practice)
  const correct = practiced.filter((q) => progress.practice[q.id]).length
  const tests = progress.tests.filter((t) => t.book === book.id)
  const best = tests.length ? Math.max(...tests.map((t) => t.score / t.total)) : null

  const stats = [
    { label: 'Flashcards mastered', value: `${known}/${qs.length}`, to: '/flashcards' },
    { label: 'Practice accuracy', value: practiced.length ? `${Math.round((correct / practiced.length) * 100)}%` : 'none yet', to: '/practice' },
    { label: 'Best test score', value: best === null ? 'none yet' : `${Math.round(best * 100)}%`, to: '/tests' },
    { label: 'Practice sets', value: setsForBook(book.id).length, to: '/tests' },
  ]

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-accent-50 to-white">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-700 m-0">{book.author}</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-1">{book.icon} {book.title}</h1>
        <p className="text-gray-500 mt-0">{book.subtitle}</p>
        <p className="text-gray-700 leading-relaxed mb-0">{book.thesis}</p>
        {book.url && <a href={book.url} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm font-semibold text-accent-700">Read the article ↗</a>}
      </Card>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link key={s.label} to={s.to} className="no-underline">
            <Card className="p-4 h-full hover:border-accent-200 transition-colors">
              <p className="text-xs text-gray-500 m-0">{s.label}</p>
              <p className="text-2xl font-bold text-accent-700 mt-1 mb-0">{s.value}</p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="p-5 border-accent-200">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 m-0">2026-27 Resolution</p>
        <p className="text-lg font-semibold text-gray-900 mt-1 mb-3">"{RESOLUTION}"</p>
        <Link to="/debate" className="text-sm font-semibold text-accent-700">See arguments from this book →</Link>
      </Card>

      <div>
        <h2 className="text-lg font-bold text-gray-900">{book.kind === 'article' ? 'Sections' : 'Chapters'}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {book.chapters.map((ch) => {
            const cq = questionsForChapter(book.id, ch.id)
            const k = cq.filter((q) => progress.cards[q.id] === 'known').length
            return (
              <Link key={ch.id} to={`/study/${ch.id}`} className="no-underline">
                <Card className="p-4 h-full hover:border-accent-200 hover:shadow-md transition-all">
                  <p className="font-semibold text-gray-900 m-0 text-sm">{ch.title}</p>
                  <p className="text-xs text-gray-500 mt-2 mb-3 line-clamp-2">{ch.summary}</p>
                  <div className="flex items-center gap-2">
                    <Bar value={cq.length ? k / cq.length : 0} className="flex-1" />
                    <span className="text-xs text-gray-400">{k}/{cq.length}</span>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
