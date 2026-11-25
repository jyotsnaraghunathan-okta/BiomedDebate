import { useBook } from '../../context/BookContext'
import { bookList } from '../../data/books'

// Light background per source, matching each source's theme color.
const TINTS = {
  levy: '#ede9fe',
  bognar: '#ccfbf1',
  emanuel: '#dbeafe',
  residency: '#fef3c7',
  gesda: '#fce7f3',
}

// Dropdown of all five official sources: the 2 books and the 3 articles.
export default function BookToggle({ className = '' }) {
  const { bookId, selectBook } = useBook()
  const group = (kind) => bookList.filter((b) => b.kind === kind)
  return (
    <label className={`flex items-center gap-2 min-w-0 ${className}`}>
      <span className="sr-only">Select source</span>
      <select
        value={bookId}
        onChange={(e) => selectBook(e.target.value)}
        style={{ backgroundColor: TINTS[bookId] }}
        className="w-full sm:w-auto max-w-full sm:max-w-sm text-sm font-semibold border border-accent-200 rounded-full px-4 py-2 text-accent-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer truncate"
      >
        {[['book', 'Books'], ['article', 'Articles']].map(([kind, label]) => (
          <optgroup key={kind} label={label} style={{ backgroundColor: '#fff' }}>
            {group(kind).map((b) => (
              <option key={b.id} value={b.id} style={{ backgroundColor: TINTS[b.id], color: '#1f2937' }}>
                {b.icon} {b.short}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </label>
  )
}
