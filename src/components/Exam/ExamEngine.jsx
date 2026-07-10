import { useState, useEffect } from 'react'
import { ClipboardList, CheckCircle2, XCircle, RotateCcw } from 'lucide-react'

export default function ExamEngine({ exam }) {
  const getStorageKey = (key) => `exam_${exam.title}_${key}`;

  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem(getStorageKey('answers'));
    return saved ? JSON.parse(saved) : {};
  })
  
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem(getStorageKey('submitted')) === 'true';
  })

  // Remove redundant useEffect to prevent race conditions during rapid clicks
  // State is now synced synchronously inside the action handlers.

  const handleSelect = (qIndex, optionIndex) => {
    if (!submitted) {
      const newAnswers = { ...answers, [qIndex]: optionIndex };
      setAnswers(newAnswers);
      localStorage.setItem(getStorageKey('answers'), JSON.stringify(newAnswers));
    }
  }

  const score = Object.keys(answers).reduce((acc, qIndex) => {
    return acc + (answers[qIndex] === exam.questions[qIndex].correctIndex ? 1 : 0)
  }, 0)

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setSubmitted(true);
    localStorage.setItem(getStorageKey('submitted'), 'true');
  };

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
                let className = "exam-option-card";
                if (submitted) {
                  if (oIndex === q.correctIndex) className += " correct";
                  else if (answers[qIndex] === oIndex) className += " incorrect";
                } else if (answers[qIndex] === oIndex) {
                  className += " selected";
                }
                return (
                  <label key={oIndex} className={className} onClick={() => handleSelect(qIndex, oIndex)}>
                    <span className="mr-3 font-bold">{String.fromCharCode(65 + oIndex)}.</span>
                    <span className="option-text">{opt}</span>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                      {submitted && oIndex === q.correctIndex && <CheckCircle2 size={18} className="option-icon" />}
                      {submitted && answers[qIndex] === oIndex && oIndex !== q.correctIndex && <XCircle size={18} className="option-icon" />}
                    </div>
                  </label>
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
            onClick={handleSubmit}
          >
            Submit Exam
          </button>
        ) : (
          <div className="exam-results">
            <h3>Final Score: {score} / {exam.questions.length}</h3>
            <button className="btn-secondary" onClick={() => { setSubmitted(false); setAnswers({}); localStorage.removeItem(getStorageKey('submitted')); localStorage.removeItem(getStorageKey('answers')); }}>
              <RotateCcw size={16} className="inline-icon" /> Retake Exam
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
