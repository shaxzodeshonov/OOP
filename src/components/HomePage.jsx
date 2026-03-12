export default function HomePage({ lesson, onNavigate }) {
  return (
    <div className="page active">
      <div className="home-hero">
        <div className="badge">{lesson.badge}</div>
        <h2>{lesson.title}</h2>
        <p>{lesson.subtitle}</p>
        <button className="start-btn" onClick={() => onNavigate(lesson.next)}>
          Start Learning →
        </button>
      </div>

      <div className="day-plan">
        {lesson.dayPlan.map(d => (
          <div className="day-card" key={d.label}>
            <div className="day-num">{d.label}</div>
            <h3>{d.icon} {d.title}</h3>
            <ul>
              {d.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="plan-grid">
        {lesson.tips.map((t, i) => (
          <div className="plan-item" key={i}>
            <div className="plan-icon">{t.icon}</div>
            <div>
              <h4>{t.title}</h4>
              <p>{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
