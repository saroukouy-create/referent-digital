const stripHtml = (html = '') => html.replace(/<[^>]*>/g, '')

const normalize = (text) =>
  stripHtml(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

export function filterSections(sections, query) {
  const q = normalize(query.trim())
  if (!q) return sections

  return sections
    .map((section) => {
      const sectionMatches = normalize(section.title).includes(q)
      const cards = section.cards.filter((card) => {
        const haystack = [
          card.title,
          card.body || '',
          ...(card.items || []),
        ].map(normalize).join(' ')
        return haystack.includes(q)
      })

      if (sectionMatches) return section
      if (cards.length) return { ...section, cards }
      return null
    })
    .filter(Boolean)
}
