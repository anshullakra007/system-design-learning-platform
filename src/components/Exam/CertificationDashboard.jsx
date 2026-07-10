import { useState } from 'react';
import { Lock, ShieldAlert } from 'lucide-react';
import { certificationTiers } from '../../data/certification';
import ProctoredExamEnvironment from './ProctoredExamEnvironment';

export default function CertificationDashboard() {
  const [activeExam, setActiveExam] = useState(null); // 'beginner', 'intermediate', 'advanced'

  if (activeExam) {
    return (
      <ProctoredExamEnvironment 
        tierLevel={activeExam} 
        tierData={certificationTiers[activeExam]} 
        onExit={() => setActiveExam(null)} 
      />
    );
  }

  return (
    <div className="cert-dashboard">
      <div className="cert-header-main">
        <h1><Lock size={32} /> Proctored Certification</h1>
        <p>Select a difficulty tier to begin your locked-down examination. Ensure your webcam and screen sharing permissions are enabled.</p>
      </div>

      <div className="tier-cards">
        {Object.entries(certificationTiers).map(([key, data]) => (
          <div key={key} className="tier-card">
            <div className="tier-icon"><ShieldAlert size={24} /></div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <div className="tier-meta">
              <span>Time: {Math.floor(data.timeLimit / 60)} min</span>
              <span>Pass: {data.passingScore}/{data.questions.length}</span>
            </div>
            <button className="primary-btn" onClick={() => setActiveExam(key)}>
              Launch Exam
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
