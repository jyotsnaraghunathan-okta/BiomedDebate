import { useMemo, useState } from 'react'
import { useBook } from '../context/BookContext'
import { useProgress } from '../context/ProgressContext'
import { chapterTitle, isUnderstanding, questionsForBook, shuffle } from '../data/questions'
import { Button, Card, ChapterSelect, PageHeader, Bar } from '../components/ui'

export default function Flashcards() {
  const { book } = useBook()
  const { progress, markCard } = useProgress()
  const [chapter, setChapter] = useState('all')
  const [onlyUnknown, setOnlyUnknown] = useState(false)
  const [kind, setKind] = useState('all') // all | understanding | recall
  const [seed, setSeed] = useState(0)
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const pool = useMemo(
    () => questionsForBook(book.id).filter((q) =>
      (chapter === 'all' || q.chapter === chapter) &&
      (kind === 'all' || (kind === 'understanding') === isUnderstanding(q))),
    [book.id, chapter, kind],
  )
  // Deck is fixed while studying so marking a card doesn't reshuffle it; seed reshuffles on demand.
  const deck = useMemo(
    () => shuffle(onlyUnknown ? pool.filter((q) => progress.cards[q.id] !== 'known') : pool),
    [pool, onlyUnknown, seed], // eslint-disable-line react-hooks/exhaustive-deps
  )
  const card = deck[Math.min(i, deck.length - 1)]
  const known = pool.filter((q) => progress.cards[q.id] === 'known').length

  function restart(fn) { fn(); setI(0); setFlipped(false) }
  function next(status) {
    if (card) markCard(card.id, status)
    setFlipped(false)
    setTimeout(() => setI((n) => n + 1), 150)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader title="Flashcards" subtitle={`${known} of ${pool.length} mastered`}>
        <ChapterSelect chapters={book.chapters} value={chapter} onChange={(v) => restart(() => setChapter(v))} />
      </PageHeader>
      <Bar value={pool.length ? known / pool.length : 0} className="mb-4" />

      <div className="flex flex-wrap gap-2 mb-3">
        {[['all', 'All cards'], ['understanding', 'Understanding & application'], ['recall', 'Recall']].map(([k, label]) => (
          <Button key={k} variant={kind === k ? 'primary' : 'secondary'} onClick={() => restart(() => setKind(k))}>{label}</Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 items-center mb-4 text-sm text-gray-600">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={onlyUnknown} onChange={(e) => restart(() => setOnlyUnknown(e.target.checked))} />
          Only cards I haven't mastered
        </label>
        <Button variant="ghost" onClick={() => restart(() => setSeed((s) => s + 1))}>Shuffle</Button>
        <span className="ml-auto">{deck.length ? `Card ${Math.min(i + 1, deck.length)} / ${deck.length}` : ''}</span>
      </div>

      {!deck.length || i >= deck.length ? (
        <Card className="p-10 text-center">
          <p className="text-lg font-semibold text-gray-900">{deck.length ? 'Deck complete!' : 'All cards mastered here.'}</p>
          <Button onClick={() => restart(() => setSeed((s) => s + 1))}>Study again</Button>
        </Card>
      ) : (
        <>
          <div className="flip cursor-pointer" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-inner h-96 ${flipped ? 'flipped' : ''}`}>
              <Card className="flip-face p-8 flex flex-col">
                <p className="text-xs text-accent-700 font-semibold m-0">{chapterTitle(book.id, card.chapter)}</p>
                <p className="text-xl text-gray-900 font-medium my-auto text-center leading-snug">{card.stem}</p>
                <p className="text-xs text-gray-400 text-center m-0">Tap to flip</p>
              </Card>
              <Card className="flip-face flip-back p-8 flex flex-col bg-accent-50 border-accent-200">
                <p className="text-xs text-accent-700 font-semibold m-0">Answer{card.page && ` · p. ${card.page}`}</p>
                <div className="my-auto text-center">
                  <p className={`text-accent-900 font-bold leading-snug m-0 ${card.options[card.answer].length > 80 ? 'text-lg' : 'text-2xl'}`}>{card.options[card.answer]}</p>
                  {card.explanation && <p className="text-sm text-gray-600 mt-3 mb-0 line-clamp-4">{card.explanation}</p>}
                </div>
                {!card.explanation && <p className="text-xs text-gray-500 text-center m-0 line-clamp-2">{card.stem}</p>}
              </Card>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-5">
            <Button variant="secondary" onClick={() => next('again')}>Still learning</Button>
            <Button onClick={() => next('known')}>Got it ✓</Button>
          </div>
        </>
      )}
    </div>
  )
}
