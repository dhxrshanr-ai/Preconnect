export default function Navbar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'gpa', label: 'GPA', icon: '📊' },
    { id: 'cgpa', label: 'CGPA', icon: '📈' },
    { id: 'predictor', label: 'Target', icon: '🎯' },
    { id: 'analyzer', label: 'Analyze', icon: '🔍' },
    { id: 'history', label: 'Saved', icon: '📋' },
    { id: 'grading', label: 'Info', icon: 'ℹ️' },
  ]

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="nav-inner">
        <div className="nav-brand">
          <span className="logo-text">GPAfy</span>
        </div>
        <div className="nav-tabs" role="tablist">
          {tabs.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              className={`nav-tab ${activeTab === t.id ? 'nav-tab-active' : ''}`}
              onClick={() => onTabChange(t.id)}
            >
              <span className="nav-tab-icon" aria-hidden="true">{t.icon}</span>
              <span className="nav-tab-label">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
