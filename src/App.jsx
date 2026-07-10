import { useState, useEffect } from 'react'
import { auth, googleProvider } from './firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { modules } from './data/modules'

function Exercise({ exercise, index }) {
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

function Exam({ exam }) {
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
      <h2 className="exam-title">{exam.title}</h2>
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
                    {opt}
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
              Retake Exam
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  const [user, setUser] = useState(null)
  const [activeModuleId, setActiveModuleId] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error("Login failed:", error)
      alert("Note: To enable Google Login, you must configure the firebase.js file with your Firebase project keys and whitelist the domain in Firebase.")
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
  }

  if (loading) return <div className="login-container"><p>Loading environment...</p></div>

  if (!user) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1>System Design Mastery</h1>
          <p>The definitive industry-standard guide to scalable architectures. Sign in to access the modules.</p>
          <button className="btn-primary" onClick={handleLogin}>
            Sign in with Google
          </button>
        </div>
      </div>
    )
  }

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0]

  return (
    <div className="app-container">
      <header className="auth-header">
        <span className="user-email">{user.email}</span>
        <button className="btn-logout" onClick={handleLogout}>Log out</button>
      </header>

      <aside className="sidebar">
        <h2>COURSE MODULES</h2>
        {modules.map(mod => (
          <button
            key={mod.id}
            className={`module-link ${activeModuleId === mod.id ? 'active' : ''}`}
            onClick={() => setActiveModuleId(mod.id)}
          >
            {mod.title.replace('Module ' + mod.id + ': ', '')}
          </button>
        ))}
      </aside>

      <main className="main-content">
        <div className="module-header">
          <h1>{activeModule.title}</h1>
          <p className="module-desc">{activeModule.description}</p>
        </div>

        {activeModule.chapters.map((chapter, idx) => (
          <div key={idx} className="chapter-container">
            <h2 className="chapter-title">{chapter.title}</h2>
            
            <div className="chapter-content">
              {chapter.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {chapter.deepDive && (
              <div className="deep-dive-card">
                <h3><span className="badge">Deep Dive</span> {chapter.deepDive.title}</h3>
                <div className="deep-dive-content">
                  {chapter.deepDive.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {chapter.exercises && chapter.exercises.length > 0 && (
              <div className="exercises-section">
                <h3>Knowledge Check</h3>
                <div className="exercises-grid">
                  {chapter.exercises.map((ex, exIdx) => (
                    <Exercise key={exIdx} exercise={ex} index={exIdx} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <hr className="exam-divider" />
        
        {activeModule.exam && (
          <Exam exam={activeModule.exam} />
        )}
        
      </main>
    </div>
  )
}

export default App
