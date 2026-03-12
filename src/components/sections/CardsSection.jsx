export default function CardsSection({ sec }) {
  return (
    <div className="section">
      <div className="section-title">{sec.title}</div>
      <div className="card-grid">
        {sec.items.map((item, i) => (
          <div className="card" key={i}>
            <h4>{item.head}</h4>
            <p dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        ))}
      </div>
    </div>
  )
}
