export default function BulletsSection({ sec }) {
  return (
    <div className="section">
      <div className="section-title">{sec.title}</div>
      <ul>
        {sec.items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}
