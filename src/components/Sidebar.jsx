export default function Sidebar({ sections, activeId, onSelect, open }) {
  return (
    <nav className={`sidebar ${open ? 'sidebar-open' : ''}`} aria-label="Sommaire du programme">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              className={s.id === activeId ? 'nav-link active' : 'nav-link'}
              onClick={() => onSelect(s.id)}
            >
              <span className="nav-emoji">{s.emoji}</span> {s.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
