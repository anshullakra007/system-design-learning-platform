import React, { useState } from 'react';
import { Target, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import Mermaid from '../Mermaid';

export default function PracticeProblems({ problems }) {
  const [expandedId, setExpandedId] = useState(null);
  const [revealedHints, setRevealedHints] = useState({});

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const revealHint = (problemId, hintIndex) => {
    setRevealedHints(prev => ({
      ...prev,
      [problemId]: Math.max(prev[problemId] || 0, hintIndex + 1)
    }));
  };

  const getDifficultyColor = (diff) => {
    switch(diff.toLowerCase()) {
      case 'easy': return '#10b981';
      case 'medium': return '#fbbf24';
      case 'hard': return '#ef4444';
      default: return 'var(--text-main)';
    }
  };

  return (
    <div className="practice-container">
      <div className="module-header" style={{ borderBottom: 'none' }}>
        <div className="module-title-wrapper">
          <Target className="module-header-icon" size={48} />
          <h1>Certification & Practice</h1>
        </div>
        <p className="module-desc">Real-world interview questions to test your system design skills.</p>
      </div>

      <div className="practice-table">
        <div className="practice-table-header">
          <div className="col-problem">Problem</div>
          <div className="col-difficulty">Difficulty</div>
        </div>

        {problems.map(problem => {
          const isExpanded = expandedId === problem.id;
          const currentHints = revealedHints[problem.id] || 0;

          return (
            <div key={problem.id} className={`practice-row ${isExpanded ? 'expanded' : ''}`}>
              <div className="practice-row-main" onClick={() => toggleExpand(problem.id)}>
                <div className="col-problem">
                  {problem.title}
                </div>
                <div className="col-difficulty" style={{ color: getDifficultyColor(problem.difficulty) }}>
                  {problem.difficulty}
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {isExpanded && (
                <div className="practice-details">
                  <div className="practice-prompt">
                    <h3>System Requirements</h3>
                    <ul>
                      {problem.requirements.map((req, i) => <li key={i}>{req}</li>)}
                    </ul>
                  </div>

                  <div className="practice-hints">
                    <h3>Progressive Hints</h3>
                    {problem.hints.map((hint, i) => (
                      <div key={i} className="hint-box">
                        {currentHints > i ? (
                          <p>💡 {hint}</p>
                        ) : (
                          <button 
                            className="btn-secondary btn-hint" 
                            onClick={() => revealHint(problem.id, i)}
                            disabled={currentHints !== i} // Force sequential revealing
                          >
                            <Lock size={14} className="inline-icon" /> Reveal Hint {i + 1}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {currentHints === problem.hints.length && (
                    <div className="practice-solution">
                      <h3>Architecture Solution</h3>
                      <p>{problem.solutionText}</p>
                      {problem.solutionDiagram && (
                        <div className="solution-diagram-wrapper">
                          <Mermaid chart={problem.solutionDiagram} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
