import ReactMarkdown from 'react-markdown'
import Exercise from './Exercise'

export default function ModuleContent({ activeModule }) {
  return (
    <>
      <div className="module-header">
        <h1>{activeModule.title}</h1>
        <p className="module-desc">{activeModule.description}</p>
      </div>

      {activeModule.chapters.map((chapter, idx) => (
        <div key={idx} className="chapter-container">
          <h2 className="chapter-title">{chapter.title}</h2>
          
          <div className="chapter-content">
            <ReactMarkdown>{chapter.content.join('\n\n')}</ReactMarkdown>
          </div>

          {chapter.deepDive && (
            <div className="deep-dive-card">
              <h3><span className="badge">Deep Dive</span> {chapter.deepDive.title}</h3>
              <div className="deep-dive-content">
                <ReactMarkdown>{chapter.deepDive.content.join('\n\n')}</ReactMarkdown>
              </div>
            </div>
          )}

          {chapter.exercises && chapter.exercises.length > 0 && (
            <div className="exercises-section">
              <h3>Knowledge Check</h3>
              <div className="exercises-grid">
                {chapter.exercises.map((ex, exIdx) => (
                  <Exercise key={exIdx} exercise={ex} index={exIdx} />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
