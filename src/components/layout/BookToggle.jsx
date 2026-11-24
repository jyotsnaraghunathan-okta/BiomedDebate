import { useBook } from '../../context/BookContext'
import { bookList } from '../../data/books'

export default function BookToggle({ className = '' }) {
  const { bookId, selectBook } = useBook()
  return (
    <div
      role="radiogroup"
      aria-label="Select book"
      className={`inline-flex rounded-full bg-white/80 border border-accent-200 p-1 shadow-sm ${className}`}
    >
      {bookList.map((b) => {
        const active = b.id === bookId
        return (
          <button
            key={b.id}
            role="radio"
            aria-checked={active}
            onClick={() => selectBook(b.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer border-none ${
              active ? 'bg-accent-600 text-white shadow' : 'bg-transparent text-gray-600 hover:text-accent-700'
            }`}
          >
            <span className="mr-1">{b.icon}</span>
            {b.short}
          </button>
        )
      })}
    </div>
  )
}
