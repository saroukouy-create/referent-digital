import { forwardRef } from 'react'
import Card from './Card'

const Section = forwardRef(function Section({ section }, ref) {
  return (
    <section className="section" id={section.id} ref={ref}>
      <h2 className="section-title">
        <span className="emoji">{section.emoji}</span> {section.title}
      </h2>
      <div className="card-grid">
        {section.cards.map((card, i) => (
          <Card key={i} title={card.title} body={card.body} items={card.items} />
        ))}
      </div>
    </section>
  )
})

export default Section
