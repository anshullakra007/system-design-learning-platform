import { useState, useEffect } from 'react'
import { ClipboardList, CheckCircle2, XCircle, RotateCcw } from 'lucide-react'

export default function ExamEngine({ exam }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Reset exam when switching modules
  useEffect(() => {
    setAnswers({})
    setSubmitted(false)
  }, [exam])

  const handleSelect = (qIndex, optionIndex) => {
    if (!submitted) {
      setAnswers({ ...answers, [qIndex]: optionIndex })
    }
  }

  const score = Object.keys(answers).reduce((acc, qIndex) => {
    return acc + (answers[qIndex] === exam.questions[qIndex].correctIndex ? 1 : 0)
  }, 0)

  return (
    <div className="exam-container">
      <h2 className="exam-title">
        <ClipboardList size={32} className="inline-icon" /> 
        {exam.title}
      </h2>
      {exam.questions.map((q, qIndex) => {
        const isCorrect = answers[qIndex] === q.correctIndex;
        const hasAnswered = answers[qIndex] !== undefined;
        return (
          <div key={qIndex} className="exam-question">
            <p className="q-text"><strong>{qIndex + 1}.</strong> {q.q}</p>
            <div className="exam-options">
              {q.options.map((opt, oIndex) => {
                let className = "exam-option";
                if (submitted) {
                  if (oIndex === q.correctIndex) className += " correct";
                  else if (answers[qIndex] === oIndex) className += " incorrect";
                } else if (answers[qIndex] === oIndex) {
                  className += " selected";
                }
                return (
                  <div key={oIndex} className={className} onClick={() => handleSelect(qIndex, oIndex)}>
                    <div className="option-content">
                      {submitted && oIndex === q.correctIndex && <CheckCircle2 size={18} className="option-icon" />}
                      {submitted && answers[qIndex] === oIndex && oIndex !== q.correctIndex && <XCircle size={18} className="option-icon" />}
                      <span>{opt}</span>
                    </div>
                  </div>
                )
              })}
            </div>
            {submitted && hasAnswered && (
              <div className={`exam-explanation ${isCorrect ? 'success' : 'error'}`}>
                <strong>{isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> {q.explanation}
              </div>
            )}
          </div>
        )
      })}
      
      <div className="exam-actions">
        {!submitted ? (
          <button 
            className="btn-primary" 
            onClick={() => setSubmitted(true)} 
            disabled={Object.keys(answers).length !== exam.questions.length}
          >
            Submit Exam
          </button>
        ) : (
          <div className="exam-results">
            <h3>Final Score: {score} / {exam.questions.length}</h3>
            <button className="btn-secondary" onClick={() => { setSubmitted(false); setAnswers({}); }}>
              <RotateCcw size={16} className="inline-icon" /> Retake Exam
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
