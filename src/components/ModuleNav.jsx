import { NavLink } from 'react-router-dom'

export default function ModuleNav({ sections, open }) {
  return (
    <nav className={`module-nav ${open ? 'module-nav-open' : ''}`} aria-label="Liste des modules">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <NavLink to={`/module/${s.id}`} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              <span className="nav-emoji">{s.emoji}</span> {s.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
