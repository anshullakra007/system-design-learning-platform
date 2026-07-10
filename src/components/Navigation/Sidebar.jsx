export default function Sidebar({ modules, activeModuleId, setActiveModuleId }) {
  return (
    <aside className="sidebar">
      <h2>COURSE MODULES</h2>
      {modules.map(mod => (
        <button
          key={mod.id}
          className={`module-link ${activeModuleId === mod.id ? 'active' : ''}`}
          onClick={() => setActiveModuleId(mod.id)}
        >
          {mod.title.replace('Module ' + mod.id + ': ', '')}
        </button>
      ))}
    </aside>
  )
}
