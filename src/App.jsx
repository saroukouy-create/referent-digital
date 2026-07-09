import { useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Section from './components/Section'
import InfoPanel from './components/InfoPanel'
import { sections, infos, contact } from './data/sections'
import { filterSections } from './utils/filterSections'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState(sections[0].id)
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionRefs = useRef({})

  const visibleSections = useMemo(() => filterSections(sections, query), [query])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [visibleSections])

  const handleSelect = (id) => {
    setMenuOpen(false)
    const el = sectionRefs.current[id]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app-shell">
      <Header
        query={query}
        onQueryChange={setQuery}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
      />

      <div className="layout">
        <Sidebar sections={sections} activeId={activeId} onSelect={handleSelect} open={menuOpen} />

        <main className="body">
          {visibleSections.length === 0 && (
            <p className="no-results">Aucun résultat pour « {query} ».</p>
          )}

          {visibleSections.map((section) => (
            <Section
              key={section.id}
              section={section}
              ref={(el) => {
                sectionRefs.current[section.id] = el
              }}
            />
          ))}

          <InfoPanel infos={infos} contact={contact} />
        </main>
      </div>
    </div>
  )
}

export default App
