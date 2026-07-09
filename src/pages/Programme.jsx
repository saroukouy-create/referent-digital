import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { sections } from '../data/sections'
import { CATEGORIES, sectionCategory } from '../data/categories'
import ModuleCard from '../components/ModuleCard'
import { filterSections } from '../utils/filterSections'

const courseSections = sections.filter((s) => s.id !== 'programme')

export default function Programme() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const activeCat = searchParams.get('cat') || 'all'

  const byCategory = useMemo(
    () =>
      activeCat === 'all'
        ? courseSections
        : courseSections.filter((s) => sectionCategory[s.id] === activeCat),
    [activeCat],
  )

  const visible = useMemo(() => filterSections(byCategory, query), [byCategory, query])

  const setCat = (key) => {
    if (key === 'all') setSearchParams({})
    else setSearchParams({ cat: key })
  }

  return (
    <div className="page page-programme">
      <div className="page-header">
        <h1>📚 Programme complet</h1>
        <p>{courseSections.length} modules, chacun conclu par un TP et un quiz noté.</p>
      </div>

      <input
        type="search"
        className="search-input-page"
        placeholder="🔎 Rechercher un module, une stratégie, un outil…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Rechercher un module"
      />

      <div className="category-tabs">
        <button
          type="button"
          className={activeCat === 'all' ? 'category-tab active' : 'category-tab'}
          onClick={() => setCat('all')}
        >
          Tous ({courseSections.length})
        </button>
        {CATEGORIES.map((cat) => {
          const count = courseSections.filter((s) => sectionCategory[s.id] === cat.key).length
          if (!count) return null
          return (
            <button
              type="button"
              key={cat.key}
              className={activeCat === cat.key ? 'category-tab active' : 'category-tab'}
              onClick={() => setCat(cat.key)}
            >
              {cat.label} ({count})
            </button>
          )
        })}
      </div>

      {visible.length === 0 && <p className="no-results">Aucun module ne correspond à « {query} ».</p>}

      <div className="module-grid">
        {visible.map((section) => (
          <ModuleCard
            key={section.id}
            section={section}
            categoryLabel={CATEGORIES.find((c) => c.key === sectionCategory[section.id])?.label}
          />
        ))}
      </div>
    </div>
  )
}
