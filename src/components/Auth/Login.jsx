import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../firebase'
import { useState } from 'react';

export default function Login({ onGuestLogin }) {
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      setErrorMsg("Network or Configuration Error. To enable Google Login, you must configure the firebase.js file with your production keys.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>System Design Mastery</h1>
        <p>The definitive industry-standard guide to scalable architectures. Sign in to access the modules.</p>
        
        {errorMsg && (
          <div className="error-banner" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {errorMsg}
          </div>
        )}

        <button className="btn-primary" onClick={handleLogin}>
          Sign in with Google
        </button>
        <button className="btn-secondary" style={{marginTop: '1rem', width: '100%'}} onClick={onGuestLogin}>
          Continue as Guest
        </button>
      </div>
    </div>
  )
}
