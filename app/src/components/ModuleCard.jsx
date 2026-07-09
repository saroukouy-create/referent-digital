import { Link } from 'react-router-dom'

const stripHtml = (html = '') => html.replace(/<[^>]*>/g, '')

export default function ModuleCard({ section, categoryLabel }) {
  const excerpt = stripHtml(section.cards[0]?.body || section.cards[0]?.items?.[0] || '')

  return (
    <Link to={`/module/${section.id}`} className="module-card">
      <div className="module-card-top">
        <span className="module-card-emoji">{section.emoji}</span>
        {categoryLabel && <span className="module-card-tag">{categoryLabel}</span>}
      </div>
      <h3>{section.title}</h3>
      {excerpt && <p>{excerpt}</p>}
      <div className="module-card-footer">
        <span>{section.cards.length} fiches</span>
        {section.quiz && <span>❓ {section.quiz.questions.length} questions</span>}
        <span className="module-card-arrow">→</span>
      </div>
    </Link>
  )
}
