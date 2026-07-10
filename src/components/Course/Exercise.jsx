import { useState } from 'react'

export default function Exercise({ exercise, index }) {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className="exercise-card">
      <div className="exercise-q"><strong>Q{index + 1}:</strong> {exercise.question}</div>
      {showAnswer ? (
        <div className="exercise-a"><strong>A:</strong> {exercise.answer}</div>
      ) : (
        <button className="btn-secondary" onClick={() => setShowAnswer(true)}>Reveal Answer</button>
      )}
    </div>
  )
}
