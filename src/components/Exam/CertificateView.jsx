import { Award, Download, CheckCircle, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

export default function CertificateView({ tierLevel, tierData, score, onExit }) {
  const cryptoId = useRef(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="certificate-wrapper">
      <div className="certificate-container" id="certificate">
        <div className="certificate-inner">
          <div className="cert-header">
            <ShieldCheck size={48} className="cert-icon" />
            <h1>CERTIFICATE OF ACHIEVEMENT</h1>
            <p className="cert-subtitle">System Design Learning Platform</p>
          </div>
          
          <div className="cert-body">
            <p className="cert-text">This certifies that</p>
            <h2 className="cert-name">Candidate #{cryptoId.current.substring(0, 8).toUpperCase()}</h2>
            <p className="cert-text">has successfully passed the proctored examination for</p>
            <h3 className="cert-tier">{tierData.title}</h3>
            
            <div className="cert-stats">
              <div className="stat">
                <span className="stat-label">Score</span>
                <span className="stat-value">{score} / {tierData.questions.length}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Date</span>
                <span className="stat-value">{date}</span>
              </div>
            </div>
          </div>
          
          <div className="cert-footer">
            <div className="crypto-id">Verify ID: {cryptoId.current}</div>
            <Award size={64} className="cert-seal" />
          </div>
        </div>
      </div>
      
      <div className="cert-actions">
        <button className="primary-btn" onClick={() => window.print()}>
          <Download size={18} style={{ marginRight: '8px' }} /> Download PDF
        </button>
        <button className="secondary-btn" onClick={onExit}>
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}
