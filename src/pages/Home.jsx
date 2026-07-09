import { Link } from 'react-router-dom'
import { sections, infos } from '../data/sections'
import { CATEGORIES, sectionCategory } from '../data/categories'

const courseSections = sections.filter((s) => s.id !== 'programme')

const pillarCounts = CATEGORIES.map((cat) => ({
  ...cat,
  count: courseSections.filter((s) => sectionCategory[s.id] === cat.key).length,
})).filter((cat) => cat.count > 0)

export default function Home() {
  return (
    <div className="page page-home">
      <section className="hero">
        <div className="institut">
          <strong>INSTITUT DE FORMATION PROFESSIONNELLE</strong>
          <br />
          CJEPE · BENIN
        </div>
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

        <div className="hero-cta">
          <Link to="/programme" className="btn-primary">
            🚀 Découvrir les {courseSections.length} modules
          </Link>
          <Link to="/infos" className="btn-secondary">
            📞 Infos & inscription
          </Link>
        </div>
      </section>

      <section className="stats-row">
        {infos.map((info) => (
          <div className="stat-tile" key={info.label}>
            <span className="label">{info.label}</span>
            <span className="value">
              {info.value} <small>{info.suffix}</small>
            </span>
          </div>
        ))}
        <div className="stat-tile">
          <span className="label">📚 Modules</span>
          <span className="value">{courseSections.length}</span>
        </div>
      </section>

      <section className="pillars">
        <h2>Les piliers de la formation</h2>
        <div className="pillar-grid">
          {pillarCounts.map((cat) => (
            <Link to={`/programme?cat=${cat.key}`} className="pillar-card" key={cat.key} style={{ '--pillar-color': cat.color }}>
              <span className="pillar-label">{cat.label}</span>
              <span className="pillar-count">{cat.count} modules</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-closing">
        <p>
          🎓 Chaque module se termine par un <strong>TP pratique</strong> et un <strong>quiz noté</strong>. La
          formation se conclut par un <strong>projet de certification</strong> mobilisant l'ensemble des
          compétences acquises.
        </p>
        <Link to="/module/projet-certification" className="btn-secondary">
          Voir le projet de certification
        </Link>
      </section>
    </div>
  )
}
