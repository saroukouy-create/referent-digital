import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/programme', label: 'Programme' },
  { to: '/infos', label: 'Infos & Contact' },
]

export default function NavBar({ menuOpen, onToggleMenu }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => onToggleMenu(false)}>
          <span className="navbar-badge">🏅</span>
          <span>
            <strong>Référent Digital</strong>
            <small>CJEPE · BENIN</small>
          </span>
        </NavLink>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => onToggleMenu((v) => !v)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => 'navbar-link' + (isActive ? ' active' : '')}
              onClick={() => onToggleMenu(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
