import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { sections } from '../data/sections'
import Section from '../components/Section'
import ModuleNav from '../components/ModuleNav'

const courseSections = sections.filter((s) => s.id !== 'programme')

export default function Module() {
  const { id } = useParams()
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    setNavOpen(false)
  }, [id])

  const index = courseSections.findIndex((s) => s.id === id)
  const section = courseSections[index]

  if (!section) return <Navigate to="/programme" replace />

  const prev = courseSections[index - 1]
  const next = courseSections[index + 1]

  return (
    <div className="page page-module">
      <nav className="breadcrumb">
        <Link to="/">Accueil</Link> <span>/</span> <Link to="/programme">Programme</Link> <span>/</span>{' '}
        <span>{section.title}</span>
      </nav>

      <div className="module-layout">
        <button type="button" className="module-nav-toggle" onClick={() => setNavOpen((v) => !v)}>
          {navOpen ? '✕ Fermer la liste' : '☰ Tous les modules'}
        </button>

        <ModuleNav sections={courseSections} open={navOpen} />

        <main className="module-content">
          <Section section={section} />

          <div className="module-pager">
            {prev ? (
              <Link to={`/module/${prev.id}`} className="pager-link pager-prev">
                <span>← Précédent</span>
                <strong>{prev.emoji} {prev.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link to={`/module/${next.id}`} className="pager-link pager-next">
                <span>Suivant →</span>
                <strong>{next.emoji} {next.title}</strong>
              </Link>
            ) : (
              <Link to="/module/projet-certification" className="pager-link pager-next">
                <span>Étape finale →</span>
                <strong>🎓 Projet & Certification</strong>
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
