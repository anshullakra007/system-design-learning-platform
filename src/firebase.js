import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// IMPORTANT: Replace these with your actual Firebase Project Configuration!
// 1. Go to console.firebase.google.com
// 2. Create a new project and add a Web App
// 3. Enable Google Authentication in the Auth Provider settings
// 4. Copy the config object here
const firebaseConfig = {
  apiKey: "AIzaSyDB48SctCkzdxvpwerkzWIrHJQ3Wls9wWQ",
  authDomain: "system-design-platform.firebaseapp.com",
  projectId: "system-design-platform",
  storageBucket: "system-design-platform.firebasestorage.app",
  messagingSenderId: "1017428074324",
  appId: "1:1017428074324:web:1ec81cdc989a556cdd32c1",
  measurementId: "G-F3ND1YL5RL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
