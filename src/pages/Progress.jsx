import { useBook } from '../context/BookContext'
import { useProgress } from '../context/ProgressContext'
import { questionsForBook, questionsForChapter } from '../data/questions'
import { Bar, Button, Card, PageHeader } from '../components/ui'

export default function Progress() {
  const { book } = useBook()
  const { progress, resetBook } = useProgress()
  const tests = progress.tests.filter((t) => t.book === book.id)

  const rows = book.chapters.map((ch) => {
    const qs = questionsForChapter(book.id, ch.id)
    const seen = qs.filter((q) => q.id in progress.practice)
    const right = seen.filter((q) => progress.practice[q.id]).length
    const known = qs.filter((q) => progress.cards[q.id] === 'known').length
    return { ch, total: qs.length, known, seen: seen.length, acc: seen.length ? right / seen.length : null }
  }).filter((r) => r.total)

  const weak = rows.filter((r) => r.acc !== null).sort((a, b) => a.acc - b.acc).slice(0, 3)

  return (
    <div className="space-y-6">
      <PageHeader title="Progress" subtitle={book.title}>
        <Button
          variant="ghost"
          onClick={() => {
            if (confirm(`Reset all progress for ${book.short}?`)) resetBook(book.id, questionsForBook(book.id).map((q) => q.id))
          }}
        >
          Reset this book
        </Button>
      </PageHeader>

      {weak.length > 0 && (
        <Card className="p-5 border-amber-200 bg-amber-50/60">
          <h2 className="text-base font-bold mt-0 mb-2">Focus next</h2>
          <ul className="pl-5 m-0 text-sm text-gray-700 space-y-1">
            {weak.map((r) => <li key={r.ch.id}>{r.ch.title}: {Math.round(r.acc * 100)}% practice accuracy</li>)}
          </ul>
        </Card>
      )}

      <Card className="p-6">
        <h2 className="text-lg font-bold mt-0">By chapter</h2>
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.ch.id}>
              <div className="flex justify-between gap-3 text-sm mb-1">
                <span className="text-gray-800 font-medium">{r.ch.title}</span>
                <span className="text-gray-500 whitespace-nowrap">
                  {r.known}/{r.total} cards · {r.acc === null ? 'not practiced' : `${Math.round(r.acc * 100)}% (${r.seen})`}
                </span>
              </div>
              <Bar value={r.known / r.total} />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-bold mt-0">Test history</h2>
        {!tests.length ? (
          <p className="text-sm text-gray-500 m-0">No tests taken yet for this book.</p>
        ) : (
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-200">
                <th className="py-2 font-medium">Date</th><th className="py-2 font-medium">Test</th>
                <th className="py-2 font-medium text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((t) => (
                <tr key={t.date} className="border-b border-gray-100">
                  <td className="py-2 text-gray-500">{new Date(t.date).toLocaleDateString()}</td>
                  <td className="py-2">{t.title}</td>
                  <td className="py-2 text-right font-semibold">{t.score}/{t.total} ({Math.round((t.score / t.total) * 100)}%)</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  )
}
