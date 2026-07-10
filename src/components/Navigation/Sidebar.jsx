import { 
  Database, Zap, Network, Shield, Timer, 
  Layers, HardDrive, BookOpen, MessageSquare, 
  Settings, Server, ArrowDownUp, Search, Briefcase, Target 
} from 'lucide-react'

// Helper to map module titles to Lucide icons
const getModuleIcon = (title) => {
  const t = title.toLowerCase()
  if (t.includes('database')) return <Database size={18} />
  if (t.includes('cache')) return <Zap size={18} />
  if (t.includes('load balancer')) return <Network size={18} />
  if (t.includes('security')) return <Shield size={18} />
  if (t.includes('asynchronism')) return <Timer size={18} />
  if (t.includes('communication')) return <MessageSquare size={18} />
  if (t.includes('content delivery')) return <Server size={18} />
  if (t.includes('domain name system')) return <Search size={18} />
  if (t.includes('consistency') || t.includes('availability')) return <ArrowDownUp size={18} />
  if (t.includes('performance') || t.includes('latency')) return <Settings size={18} />
  if (t.includes('interview questions')) return <Briefcase size={18} />
  if (t.includes('object-oriented')) return <Layers size={18} />
  if (t.includes('application layer')) return <HardDrive size={18} />
  return <BookOpen size={18} />
}

export default function Sidebar({ modules, activeModuleId, setActiveModuleId }) {
  return (
    <aside className="sidebar">
      <h2>COURSE MODULES</h2>
      <div className="sidebar-links">
        {modules.map(mod => (
          <button
            key={mod.id}
            className={`module-link ${activeModuleId === mod.id ? 'active' : ''}`}
            onClick={() => setActiveModuleId(mod.id)}
          >
            <span className="icon-wrapper">{mod.isSpecial ? <Target size={18} /> : getModuleIcon(mod.title)}</span>
            <span className="module-title-text">{mod.isSpecial ? mod.title : mod.title.replace('Module ' + mod.id + ': ', '')}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}
