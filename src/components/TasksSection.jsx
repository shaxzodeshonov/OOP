export default function TasksSection({ tasks }) {
  return (
    <div className="tasks-section">
      <div className="tasks-header">
        <div className="tasks-icon">🛠️</div>
        <div className="tasks-title-block">
          <h3>Practice Tasks</h3>
          <p>Complete these before moving on</p>
        </div>
      </div>
      {tasks.map((task, i) => (
        <div className="task-item" key={i}>
          <div className="task-num">{i + 1}</div>
          <div className="task-body">
            <h4>{task.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: task.text }} />
            <span className={`task-tag tag-${task.diff}`}>{task.diff}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
