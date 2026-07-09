export default function Header({ query, onQueryChange, menuOpen, onToggleMenu }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="institut">
          <strong>INSTITUT DE FORMATION PROFESSIONNELLE</strong>
          <br />
          CJEPE · BENIN
        </div>
        <div className="badge-cert">🏅 Certifiant</div>
      </div>

      <div className="title-block">
        <h1>Référent Digital · Expert en Communication Digitale</h1>
        <div className="sub-tags">
          <span>
            <span className="check">✅</span> Marketing Digital
          </span>
          <span>
            <span className="check">✅</span> Communication Digitale
          </span>
          <span>
            <span className="check">✅</span> Gestion de Communauté
          </span>
        </div>
      </div>

      <div className="search-row">
        <input
          type="search"
          className="search-input"
          placeholder="🔎 Rechercher un module, une stratégie, un outil…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="Rechercher dans le programme"
        />
        <button
          type="button"
          className="menu-toggle"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕ Fermer le menu' : '☰ Sommaire'}
        </button>
      </div>
    </header>
  )
}
