import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../firebase'

export default function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error("Login failed:", error)
      alert("Note: To enable Google Login, you must configure the firebase.js file with your Firebase project keys and whitelist the domain in Firebase.")
    }
  }

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
