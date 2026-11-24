import { Card } from './ui'

// Renders one MCQ. `picked` is the chosen index (or undefined). When `reveal` is true,
// correct/incorrect styling is shown.
export default function QuestionCard({ q, number, picked, onPick, reveal, meta }) {
  return (
    <Card className="p-6">
      <div className="flex justify-between gap-3 text-xs text-gray-400 mb-2">
        <span>{number != null && `Question ${number}`}</span>
        <span>{meta}</span>
      </div>
      <p className="text-lg font-medium text-gray-900 mt-0 leading-snug">{q.stem}</p>
      <div className="space-y-2">
        {q.options.map((opt, idx) => {
          const isPicked = picked === idx
          const isRight = idx === q.answer
          let cls = 'border-gray-200 hover:border-accent-500 hover:bg-accent-50'
          if (reveal && isRight) cls = 'border-green-500 bg-green-50 text-green-900'
          else if (reveal && isPicked) cls = 'border-red-400 bg-red-50 text-red-900'
          else if (isPicked) cls = 'border-accent-600 bg-accent-50 text-accent-900'
          return (
            <button
              key={idx}
              disabled={reveal || !onPick}
              onClick={() => onPick?.(idx)}
              className={`w-full text-left flex gap-3 px-4 py-3 rounded-xl border-2 bg-white text-sm transition-colors cursor-pointer disabled:cursor-default ${cls}`}
            >
              <span className="font-bold">{'ABCD'[idx]}.</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>
      {reveal && (
        <p className={`text-sm mt-4 mb-0 font-medium ${picked === q.answer ? 'text-green-700' : 'text-red-700'}`}>
          {picked === undefined ? 'Not answered. ' : picked === q.answer ? 'Correct! ' : 'Incorrect. '}
          <span className="text-gray-600 font-normal">
            Answer: {'ABCD'[q.answer]}. {q.options[q.answer]} (p. {q.page})
          </span>
        </p>
      )}
    </Card>
  )
}
