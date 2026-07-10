import { useState, useEffect } from 'react'
import { auth, googleProvider } from './firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { modules } from './data/modules'

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
      alert("Note: To enable Google Login, you must configure the firebase.js file with your Firebase project keys.")
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
        <h2>SYSTEM DESIGN</h2>
        {modules.map(mod => (
          <button
            key={mod.id}
            className={`module-link ${activeModuleId === mod.id ? 'active' : ''}`}
            onClick={() => setActiveModuleId(mod.id)}
          >
            {mod.title}
          </button>
        ))}
      </aside>

      <main className="main-content">
        <div className="module-header">
          <h1>{activeModule.title}</h1>
        </div>

        {activeModule.topics.map((topic, idx) => (
          <div key={idx} className="topic-container">
            <h2 className="topic-title">{topic.title}</h2>
            
            <div className="card">
              <h3><span className="badge">Heuristics</span> {topic.concept}</h3>
              <p>{topic.dive}</p>
            </div>

            {topic.tradeoffs && topic.tradeoffs.length > 0 && (
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      {Object.keys(topic.tradeoffs[0]).map(key => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {topic.tradeoffs.map((row, i) => (
                      <tr key={i}>
                        {Object.values(row).map((val, j) => (
                          <td key={j}>{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="card interview-box">
              <h3><span className="badge" style={{background: '#444'}}>Interview</span> Application</h3>
              <div className="interview-q">Q: {topic.interview.question}</div>
              <div className="interview-a">{topic.interview.answer}</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
