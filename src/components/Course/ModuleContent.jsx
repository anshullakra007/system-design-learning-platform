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
  const sanitizeMarkdown = (rawText) => {
    if (!rawText) return '';
    let text = rawText;
    // Fix empty table headers that break remark-gfm
    text = text.replace(/\|\s*Question\s*\|\s*\|/g, '| Question | Solution |');
    // Fix broken trailing pipes
    text = text.replace(/\|\n\|/g, '|\n|');
    return text;
  };

  return (
    <>
      <div className="module-header">
        <div className="module-title-wrapper">
          <BookOpen className="module-header-icon" size={48} />
          <h1>{activeModule.title}</h1>
        </div>
        <p className="module-desc">{activeModule.description}</p>
      </div>

      {activeModule.title.toLowerCase().includes("approach a system design") && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="chapter-title" style={{ marginBottom: '1rem' }}>Visual Blueprint: The Approach</h2>
          <Mermaid chart={`graph TD
    A[1. Requirement Gathering] -->|Clarify Ambiguity| B[2. Capacity Estimation]
    B -->|Define Scale| C[3. High Level Design]
    C -->|Core Components| D[4. Detailed Design]
    D -->|Bottlenecks & Tradeoffs| E[5. Resolve & Scale]
    
    style A fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style C fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style E fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
          `} />
        </div>
      )}

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
                  if (props.href && (props.href.startsWith('solutions/') || props.href.startsWith('challenges/'))) {
                    return <a target="_blank" rel="noopener noreferrer" href={`https://github.com/donnemartin/system-design-primer/tree/master/${props.href}`} {...props}>{props.children}</a>
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
                },
                h2: ({_node, ...props}) => {
                  const title = String(props.children).toLowerCase();
                  let diagram = null;
                  
                  if (title.includes('least recently used cache') || title.includes('lru cache')) {
                    diagram = `graph LR
    A[Hash Map] --> B((Node 1))
    A --> C((Node 2))
    A --> D((Node 3))
    B <--> C
    C <--> D
    style A fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style C fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
                    `;
                  } else if (title.includes('parking lot')) {
                    diagram = `classDiagram
    class ParkingLot {
      +List~Level~ levels
      +parkVehicle(Vehicle)
    }
    class Level {
      +int floor
      +List~ParkingSpot~ spots
    }
    class ParkingSpot {
      +Vehicle vehicle
      +SpotSize size
    }
    class Vehicle {
      <<abstract>>
      +String licensePlate
    }
    class Car { }
    class Motorcycle { }
    ParkingLot "1" *-- "many" Level
    Level "1" *-- "many" ParkingSpot
    Vehicle <|-- Car
    Vehicle <|-- Motorcycle
                    `;
                  } else if (title.includes('chat server')) {
                    diagram = `graph TD
    A[Client 1] <-->|WebSocket| B(Chat Server Node 1)
    C[Client 2] <-->|WebSocket| D(Chat Server Node 2)
    B <--> E[(Redis Pub/Sub)]
    D <--> E
    B --> F[(Message DB)]
    D --> F
    
    style A fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style C fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style E fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style F fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
                    `;
                  }

                  return (
                    <>
                      <h2 {...props} />
                      {diagram && (
                        <div style={{ margin: '2rem 0' }}>
                          <Mermaid chart={diagram} />
                        </div>
                      )}
                    </>
                  );
                },
                h3: ({_node, ...props}) => {
                  const title = String(props.children).toLowerCase();
                  let diagram = null;
                  
                  if (title.includes('least recently used cache') || title.includes('lru cache')) {
                    diagram = `graph LR
    A[Hash Map] --> B((Node 1))
    A --> C((Node 2))
    A --> D((Node 3))
    B <--> C
    C <--> D
    style A fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style C fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
                    `;
                  } else if (title.includes('parking lot')) {
                    diagram = `classDiagram
    class ParkingLot {
      +List~Level~ levels
      +parkVehicle(Vehicle)
    }
    class Level {
      +int floor
      +List~ParkingSpot~ spots
    }
    class ParkingSpot {
      +Vehicle vehicle
      +SpotSize size
    }
    class Vehicle {
      <<abstract>>
      +String licensePlate
    }
    class Car { }
    class Motorcycle { }
    ParkingLot "1" *-- "many" Level
    Level "1" *-- "many" ParkingSpot
    Vehicle <|-- Car
    Vehicle <|-- Motorcycle
                    `;
                  } else if (title.includes('chat server')) {
                    diagram = `graph TD
    A[Client 1] <-->|WebSocket| B(Chat Server Node 1)
    C[Client 2] <-->|WebSocket| D(Chat Server Node 2)
    B <--> E[(Redis Pub/Sub)]
    D <--> E
    B --> F[(Message DB)]
    D --> F
    
    style A fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style C fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style E fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
    style F fill:#1a1a1a,stroke:#333,stroke-width:2px,color:#fff
                    `;
                  }

                  return (
                    <>
                      <h3 {...props} />
                      {diagram && (
                        <div style={{ margin: '2rem 0' }}>
                          <Mermaid chart={diagram} />
                        </div>
                      )}
                    </>
                  );
                }
              }}
            >
              {sanitizeMarkdown(chapter.content.join('\n\n'))}
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
