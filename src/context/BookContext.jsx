import { createContext, useContext, useState } from 'react'
import { books } from '../data/books'

const BookContext = createContext(null)
const KEY = 'bd-selected-book'

function readStored() {
  try {
    const v = localStorage.getItem(KEY)
    return books[v] ? v : 'levy'
  } catch {
    return 'levy'
  }
}

export function BookProvider({ children }) {
  const [bookId, setBookId] = useState(readStored)

  function selectBook(id) {
    try { localStorage.setItem(KEY, id) } catch { /* ignore */ }
    setBookId(id)
  }

  return (
    <BookContext.Provider value={{ bookId, book: books[bookId], selectBook }}>
      {children}
    </BookContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBook() {
  const ctx = useContext(BookContext)
  if (!ctx) throw new Error('useBook must be used inside BookProvider')
  return ctx
}
