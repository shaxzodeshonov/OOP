export default function CodeSection({ sec }) {
  return (
    <div className="section">
      <div className="section-title">{sec.title}</div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: sec.code }} />
        <span className="code-tag">{sec.lang}</span>
      </pre>
      {sec.rules && sec.rules.length > 0 && (
        <div className="rules-box">
          <div className="rules-label">📐 Rules</div>
          <ul>
            {sec.rules.map((r, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: r }} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
