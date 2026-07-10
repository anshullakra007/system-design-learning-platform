import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Video, MonitorPlay, ShieldAlert, CheckCircle, Clock } from 'lucide-react';
import CertificateView from './CertificateView';

export default function ProctoredExamEnvironment({ tierData, tierLevel, onExit }) {
  const [examState, setExamState] = useState('setup'); // setup, running, failed, completed
  const [warnings, setWarnings] = useState(0);
  const [timeLeft, setTimeLeft] = useState(tierData.timeLimit);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const displayStreamRef = useRef(null);

  // Stop media tracks safely
  const stopMediaTracks = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (displayStreamRef.current) {
      displayStreamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  // Start Proctoring
  const startProctoring = async () => {
    try {
      // Request Camera
      streamRef.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = streamRef.current;
      }
      
      // Request Screen
      displayStreamRef.current = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
      
      // If user stops sharing screen natively, fail them
      displayStreamRef.current.getVideoTracks()[0].onended = () => {
        if (examState === 'running') triggerFailure("Screen sharing was terminated.");
      };

      setExamState('running');
    } catch (error) {
      console.error("Proctoring setup failed", error);
      alert("You must allow both Webcam and Screen Sharing to start the certification.");
    }
  };

  // Anti-Cheat: Visibility change listener
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && examState === 'running') {
        setWarnings(prev => {
          const newWarnings = prev + 1;
          if (newWarnings >= 2) {
            triggerFailure("You switched tabs multiple times. The exam is terminated.");
          } else {
            alert("WARNING: You left the exam window. One more violation will terminate the exam.");
          }
          return newWarnings;
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [examState]);

  // Timer
  useEffect(() => {
    let timer;
    if (examState === 'running' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (examState === 'running' && timeLeft === 0) {
      submitExam();
    }
    return () => clearInterval(timer);
  }, [examState, timeLeft]);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopMediaTracks();
  }, []);

  const triggerFailure = (reason) => {
    setExamState('failed');
    stopMediaTracks();
    alert("EXAM TERMINATED: " + reason);
  };

  const handleAnswer = (index) => {
    setAnswers({ ...answers, [currentQuestion]: index });
  };

  const submitExam = () => {
    let finalScore = 0;
    tierData.questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) finalScore++;
    });
    setScore(finalScore);
    setExamState('completed');
    stopMediaTracks();
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (examState === 'setup') {
    return (
      <div className="proctor-setup">
        <div className="proctor-card">
          <h2><ShieldAlert size={32} /> Lockdown Certification</h2>
          <p>You are about to begin the <strong>{tierData.title}</strong> exam.</p>
          <div className="proctor-rules">
            <p><Video size={18} /> Webcam recording is required.</p>
            <p><MonitorPlay size={18} /> Full screen sharing is required.</p>
            <p><AlertTriangle size={18} /> Tab switching or leaving the window will result in auto-failure.</p>
          </div>
          <button className="primary-btn pulse-red" onClick={startProctoring}>
            Accept & Begin Exam
          </button>
        </div>
      </div>
    );
  }

  if (examState === 'failed') {
    return (
      <div className="proctor-setup">
        <div className="proctor-card failed">
          <h2><XCircle size={32} color="#ef4444" /> Certification Failed</h2>
          <p>The anti-cheat mechanism was triggered. You have been locked out.</p>
          <button className="secondary-btn" onClick={onExit}>Return to Dashboard</button>
        </div>
      </div>
    );
  }

  if (examState === 'completed') {
    if (score >= tierData.passingScore) {
      return <CertificateView tierLevel={tierLevel} tierData={tierData} score={score} onExit={onExit} />;
    } else {
      return (
        <div className="proctor-setup">
          <div className="proctor-card">
            <h2>Certification Failed</h2>
            <p>You scored {score}/{tierData.questions.length}. You need {tierData.passingScore} to pass.</p>
            <button className="secondary-btn" onClick={onExit}>Return to Dashboard</button>
          </div>
        </div>
      );
    }
  }

  const q = tierData.questions[currentQuestion];

  return (
    <div className="exam-environment">
      <div className="exam-header">
        <div className="timer-display">
          <Clock size={24} /> {formatTime(timeLeft)}
        </div>
        <div className="exam-title">{tierData.title}</div>
        <div className="warning-indicator">
          Warnings: {warnings}/2
        </div>
      </div>

      <div className="exam-body">
        <div className="question-container">
          <h3>Question {currentQuestion + 1} of {tierData.questions.length}</h3>
          <p className="question-text">{q.question}</p>
          <div className="options-grid">
            {q.options.map((opt, idx) => (
              <button 
                key={idx}
                className={`exam-option ${answers[currentQuestion] === idx ? 'selected' : ''}`}
                onClick={() => handleAnswer(idx)}
              >
                <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="exam-footer">
        <button 
          className="secondary-btn" 
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(prev => prev - 1)}
        >
          Previous
        </button>
        {currentQuestion === tierData.questions.length - 1 ? (
          <button className="primary-btn" onClick={submitExam}>Submit Exam</button>
        ) : (
          <button 
            className="primary-btn" 
            onClick={() => setCurrentQuestion(prev => prev + 1)}
          >
            Next
          </button>
        )}
      </div>

      {/* Picture in Picture Webcam */}
      <div className="pip-webcam">
        <div className="rec-indicator"><span className="red-dot"></span> REC</div>
        <video ref={videoRef} autoPlay muted playsInline></video>
      </div>
    </div>
  );
}

// Quick fallback icon import
import { XCircle } from 'lucide-react';
