import Navbar from './Navbar'
import { useBook } from '../../context/BookContext'

export default function Layout({ children }) {
  const { bookId } = useBook()
  return (
    <div data-book={bookId} className="min-h-screen transition-colors duration-500">
      <Navbar />
      <main key={bookId} className="max-w-6xl mx-auto px-4 py-6 animate-fade-in">
        {children}
      </main>
    </div>
  )
}
