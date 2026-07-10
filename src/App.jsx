import { useState, useEffect, Suspense, lazy } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Login from './components/Auth/Login'
import Sidebar from './components/Navigation/Sidebar'

// Code Splitting: Lazy load heavy components
const ModuleContent = lazy(() => import('./components/Course/ModuleContent'))
const ExamEngine = lazy(() => import('./components/Exam/ExamEngine'))

function App() {
  const [user, setUser] = useState(null)
  const [activeModuleId, setActiveModuleId] = useState(1)
  const [loading, setLoading] = useState(true)
  const [modulesData, setModulesData] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        try {
          // Code Splitting: Dynamically import the massive JSON payload
          // so it doesn't block the initial chunk.
          const data = await import('./data/modules.js')
          setModulesData(data.modules)
        } catch (err) {
          console.error("Failed to load modules payload", err)
        }
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
  }

  if (loading) return <div className="login-container"><p>Loading environment...</p></div>

  if (!user) {
    return <Login />
  }

  const activeModule = modulesData.find(m => m.id === activeModuleId) || modulesData[0]

  return (
    <div className="app-container">
      <header className="auth-header">
        <span className="user-email">{user.email}</span>
        <button className="btn-logout" onClick={handleLogout}>Log out</button>
      </header>

      {modulesData.length > 0 && (
        <>
          <Sidebar 
            modules={modulesData} 
            activeModuleId={activeModuleId} 
            setActiveModuleId={setActiveModuleId} 
          />

          <main className="main-content">
            <Suspense fallback={<div>Loading course material...</div>}>
              {activeModule && <ModuleContent activeModule={activeModule} />}
              
              <hr className="exam-divider" />
              
              {activeModule && activeModule.exam && (
                <ExamEngine exam={activeModule.exam} />
              )}
            </Suspense>
          </main>
        </>
      )}
    </div>
  )
}

export default App
