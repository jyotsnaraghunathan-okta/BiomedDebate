import { createContext, useContext, useEffect, useState } from 'react'

const ProgressContext = createContext(null)
const empty = { cards: {}, practice: {}, tests: [] }

function load(key) {
  try {
    return { ...empty, ...JSON.parse(localStorage.getItem(key) || '{}') }
  } catch {
    return empty
  }
}

export function ProgressProvider({ userId, children }) {
  const key = `bd-progress-${userId || 'anon'}`
  const [progress, setProgress] = useState(() => load(key))

  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(progress)) } catch { /* ignore */ }
  }, [key, progress])

  const api = {
    progress,
    markCard: (id, status) =>
      setProgress((p) => ({ ...p, cards: { ...p.cards, [id]: status } })),
    recordPractice: (id, correct) =>
      setProgress((p) => ({ ...p, practice: { ...p.practice, [id]: correct } })),
    recordTest: (result) =>
      setProgress((p) => ({ ...p, tests: [result, ...p.tests].slice(0, 50) })),
    resetBook: (bookId, ids) =>
      setProgress((p) => {
        const drop = new Set(ids)
        const strip = (o) => Object.fromEntries(Object.entries(o).filter(([k]) => !drop.has(k)))
        return { cards: strip(p.cards), practice: strip(p.practice), tests: p.tests.filter((t) => t.book !== bookId) }
      }),
  }

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}
