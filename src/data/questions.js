import sets from './questions.json'
import { understandingSets } from './understanding'
import { books } from './books'

// Practice sets parsed from the test1/ PDFs (MCQ + answer key), plus understanding sets.
export const testSets = [...Object.values(sets), ...understandingSets]

export function setsForBook(bookId) {
  return testSets.filter((s) => s.book === bookId)
}

export function questionsForBook(bookId) {
  return setsForBook(bookId).flatMap((s) => s.questions.map((q) => ({ ...q, setId: s.id })))
}

export function questionsForChapter(bookId, chapterId) {
  return questionsForBook(bookId).filter((q) => q.chapter === chapterId)
}

export function isUnderstanding(q) {
  return q.type !== 'Recall'
}

export function chapterTitle(bookId, chapterId) {
  const ch = books[bookId].chapters.find((c) => c.id === chapterId)
  return ch ? ch.title : chapterId
}

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
