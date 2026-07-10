import { useState, useEffect, Suspense, lazy } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Login from './components/Auth/Login'
import Sidebar from './components/Navigation/Sidebar'
import { practiceProblems } from './data/practice'

// Code Splitting: Lazy load heavy components
const ModuleContent = lazy(() => import('./components/Course/ModuleContent'))
const ExamEngine = lazy(() => import('./components/Exam/ExamEngine'))
const PracticeProblems = lazy(() => import('./components/Course/PracticeProblems'))

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('guestUser');
    return saved ? JSON.parse(saved) : null;
  })
  const [activeModuleId, setActiveModuleId] = useState(() => {
    return parseInt(localStorage.getItem('activeModuleId')) || 1
  })
  const [loading, setLoading] = useState(true)
  const [modulesData, setModulesData] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
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

  // Load modules data when user becomes available (auth or guest)
  useEffect(() => {
    if (user && modulesData.length === 0) {
      import('./data/modules.js')
        .then(data => {
          const loadedModules = data.modules;
          // Append Certification Module
          loadedModules.push({
            id: 'certification-practice',
            title: '🏆 Certification & Practice',
            isSpecial: true
          });
          setModulesData(loadedModules);
        })
        .catch(err => console.error("Failed to load modules payload", err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  // Sync active module to localStorage
  useEffect(() => {
    localStorage.setItem('activeModuleId', activeModuleId)
  }, [activeModuleId])

  const handleGuestLogin = () => {
    const guest = { email: 'guest@student.local', isGuest: true }
    setUser(guest)
    localStorage.setItem('guestUser', JSON.stringify(guest))
  }

  const handleLogout = async () => {
    if (!user?.isGuest) {
      await signOut(auth)
    }
    setUser(null)
    localStorage.removeItem('guestUser')
    localStorage.removeItem('activeModuleId')
  }

  if (loading) return <div className="login-container"><p>Loading environment...</p></div>

  if (!user) {
    return <Login onGuestLogin={handleGuestLogin} />
  }

  const activeModule = modulesData.find(m => m.id === activeModuleId) || modulesData[0]
  const activeIndex = modulesData.findIndex(m => m.id === activeModuleId)
  
  const handleNext = () => {
    if (activeIndex < modulesData.length - 1) {
      setActiveModuleId(modulesData[activeIndex + 1].id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveModuleId(modulesData[activeIndex - 1].id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

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
              {activeModule && activeModule.isSpecial ? (
                <PracticeProblems problems={practiceProblems} />
              ) : (
                <>
                  {activeModule && <ModuleContent activeModule={activeModule} />}
                  
                  <hr className="exam-divider" />
                  
                  {activeModule && activeModule.exam && (
                    <ExamEngine exam={activeModule.exam} />
                  )}
                </>
              )}
              
              <div className="module-nav">
                <button 
                  onClick={handlePrev} 
                  disabled={activeIndex === 0}
                >
                  <ChevronLeft size={18} /> Previous Module
                </button>
                <button 
                  onClick={handleNext} 
                  disabled={activeIndex === modulesData.length - 1}
                >
                  Next Module <ChevronRight size={18} />
                </button>
              </div>
            </Suspense>
          </main>
        </>
      )}
    </div>
  )
}

export default App
