import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Video, MonitorPlay, ShieldAlert, CheckCircle, Clock } from 'lucide-react';
import CertificateView from './CertificateView';

export default function ProctoredExamEnvironment({ tierData, tierLevel, onExit }) {
  const [examState, setExamState] = useState('setup'); // setup, running, failed, completed
  const [permissionError, setPermissionError] = useState('');
  const [failReason, setFailReason] = useState('');
  const [warnings, setWarnings] = useState(0);
  const [timeLeft, setTimeLeft] = useState(tierData.timeLimit);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

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
      // Request Screen
      displayStreamRef.current = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
      
      // If user stops sharing screen natively, fail them
      displayStreamRef.current.getVideoTracks()[0].onended = () => {
        if (examState === 'running') triggerFailure("Screen sharing was terminated.");
      };

      setExamState('running');
    } catch (error) {
      setPermissionError("Hardware access denied. You must explicitly allow both Webcam and Screen Sharing to begin the certification.");
    }
  };
  // Attach WebRTC stream when videoRef mounts
  useEffect(() => {
    if (examState === 'running' && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
  }, [examState]);

  // Anti-Cheat: Visibility and Blur listener
  useEffect(() => {
    let visibilityTimeout;

    const handleFocusLoss = () => {
      if (examState === 'running') {
        setIsBlurred(true);
        visibilityTimeout = setTimeout(() => {
          setWarnings(prev => {
            const newWarnings = prev + 1;
            if (newWarnings >= 2) {
              triggerFailure("You switched tabs multiple times. The exam is terminated.");
            }
            return newWarnings;
          });
        }, 1500);
      }
    };

    const handleFocusGain = () => {
      if (examState === 'running') {
        setIsBlurred(false);
        if (visibilityTimeout) clearTimeout(visibilityTimeout);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleFocusLoss();
      } else {
        handleFocusGain();
      }
    };

    window.addEventListener('blur', handleFocusLoss);
    window.addEventListener('focus', handleFocusGain);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener('blur', handleFocusLoss);
      window.removeEventListener('focus', handleFocusGain);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (visibilityTimeout) clearTimeout(visibilityTimeout);
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
    setFailReason(reason);
    setExamState('failed');
    stopMediaTracks();
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
          
          {permissionError && (
            <div className="error-banner" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'left' }}>
              <AlertTriangle size={16} style={{display: 'inline', marginRight: '8px'}} />
              {permissionError}
            </div>
          )}

          <button className="primary-btn pulse-red" onClick={startProctoring}>
            Accept & Begin Exam
          </button>
          <button className="secondary-btn" onClick={onExit} style={{marginLeft: '1rem'}}>Cancel</button>
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
          {failReason && (
            <div className="error-banner" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '1rem', borderRadius: '4px', margin: '1.5rem 0', fontSize: '0.9rem', textAlign: 'left' }}>
              <strong>Reason:</strong> {failReason}
            </div>
          )}
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
    <>
      {isBlurred && examState === 'running' && (
        <div className="anti-cheat-overlay">
          <AlertTriangle size={64} color="#ef4444" style={{ marginBottom: '1.5rem' }} />
          <h2>Tab Switching Detected</h2>
          <p>Return to the exam immediately. This violation has been recorded.</p>
        </div>
      )}
      <div className="exam-environment" style={{ filter: isBlurred ? 'blur(10px)' : 'none', transition: 'filter 0.2s ease' }}>
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
              <label 
                key={idx}
                className={`exam-option-card ${answers[currentQuestion] === idx ? 'selected' : ''}`}
                onClick={() => handleAnswer(idx)}
              >
                <span className="mr-3 font-bold">{String.fromCharCode(65 + idx)}.</span>
                <span className="option-text">{opt}</span>
              </label>
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
        <video ref={videoRef} autoPlay muted playsInline className="webcam-preview"></video>
      </div>
    </div>
    </>
  );
}

// Quick fallback icon import
import { XCircle } from 'lucide-react';
