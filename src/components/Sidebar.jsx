export default function Sidebar({ nav, currentId, onNavigate }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>C++ OOP</h1>
        <p>// mastery course</p>
      </div>
      <div id="sideNav">
        {nav.map(group => (
          <div className="week-group" key={group.group}>
            <div className="week-label">{group.group}</div>
            {group.items.map(item => (
              <div
                key={item.id}
                className={`nav-item${currentId === item.id ? ' active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="nav-dot" />
                {item.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </nav>
  )
}
