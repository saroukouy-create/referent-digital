export default function Card({ title, body, items }) {
  return (
    <div className="card-item">
      <h3>{title}</h3>
      {body && <p dangerouslySetInnerHTML={{ __html: body }} />}
      {items && (
        <ul>
          {items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )}
    </div>
  )
}
