import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import Exercise from './Exercise'
import Mermaid from '../Mermaid'
import { BookOpen, Microscope, Lightbulb } from 'lucide-react'

export default function ModuleContent({ activeModule }) {
  return (
    <>
      <div className="module-header">
        <div className="module-title-wrapper">
          <BookOpen className="module-header-icon" size={48} />
          <h1>{activeModule.title}</h1>
        </div>
        <p className="module-desc">{activeModule.description}</p>
      </div>

      {activeModule.chapters.map((chapter, idx) => (
        <div key={idx} className="chapter-container">
          <h2 className="chapter-title">{chapter.title}</h2>
          
          <div className="chapter-content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]} 
              components={{ 
                table: ({_node, ...props}) => <div className="table-responsive"><table {...props} /></div>,
                th: ({_node, ...props}) => <th className="md-th" {...props} />,
                td: ({_node, ...props}) => <td className="md-td" {...props} />,
                a: ({_node, ...props}) => {
                  if (props.href && props.href.startsWith('#')) {
                    return (
                      <a 
                        {...props} 
                        onClick={(e) => {
                          e.preventDefault();
                          const id = props.href.substring(1);
                          const el = document.getElementById(id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                      />
                    )
                  }
                  return <a target="_blank" rel="noopener noreferrer" {...props} />
                },
                code({_node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  if (!inline && match && match[1] === 'mermaid') {
                    return <Mermaid chart={String(children).replace(/\n$/, '')} />
                  }
                  if (!inline && match) {
                    return (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        className="md-code-block"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    )
                  }
                  return <code className="md-inline-code" {...props}>{children}</code>
                }
              }}
            >
              {chapter.content.join('\n\n')}
            </ReactMarkdown>
          </div>

          {chapter.deepDive && (
            <div className="deep-dive-card">
              <h3 className="deep-dive-title">
                <span className="badge"><Microscope size={14} className="inline-icon" /> Deep Dive</span> 
                {chapter.deepDive.title}
              </h3>
              <div className="deep-dive-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]} 
                  components={{ 
                    table: ({_node, ...props}) => <div className="table-responsive"><table {...props} /></div>,
                    th: ({_node, ...props}) => <th className="md-th" {...props} />,
                    td: ({_node, ...props}) => <td className="md-td" {...props} />,
                    a: ({_node, ...props}) => {
                      if (props.href && props.href.startsWith('#')) {
                        return (
                          <a 
                            {...props} 
                            onClick={(e) => {
                              e.preventDefault();
                              const id = props.href.substring(1);
                              const el = document.getElementById(id);
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                          />
                        )
                      }
                      return <a target="_blank" rel="noopener noreferrer" {...props} />
                    },
                    code({_node, inline, className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '')
                      if (!inline && match && match[1] === 'mermaid') {
                        return <Mermaid chart={String(children).replace(/\n$/, '')} />
                      }
                      if (!inline && match) {
                        return (
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            className="md-code-block"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        )
                      }
                      return <code className="md-inline-code" {...props}>{children}</code>
                    }
                  }}
                >
                  {chapter.deepDive.content.join('\n\n')}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {chapter.exercises && chapter.exercises.length > 0 && (
            <div className="exercises-section">
              <h3 className="exercise-section-title">
                <Lightbulb size={24} className="inline-icon highlight-icon" /> 
                Knowledge Check
              </h3>
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
