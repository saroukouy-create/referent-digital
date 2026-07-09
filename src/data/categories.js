// Classement des modules par pilier, utilisé pour filtrer la page Programme.
// Séparé de sections.js pour ne pas alourdir chaque section.

export const CATEGORIES = [
  { key: 'fondamentaux', label: '📘 Fondamentaux', color: '#6b7fb0' },
  { key: 'marketing', label: '📈 Marketing Digital', color: '#1a7a52' },
  { key: 'communication', label: '💬 Communication Digitale', color: '#b0791a' },
  { key: 'communaute', label: '👥 Gestion de Communauté', color: '#8a3fb0' },
  { key: 'transverse', label: '⚖️ Outils & Cadre légal', color: '#4d627a' },
  { key: 'certification', label: '🎓 Certification', color: '#c9a227' },
]

export const sectionCategory = {
  generalites: 'fondamentaux',
  plateformes: 'fondamentaux',
  'reseaux-par-domaine': 'fondamentaux',
  techniques: 'marketing',
  'paid-social': 'marketing',
  approfondi: 'marketing',
  'publicite-google': 'marketing',
  'seo-sea': 'marketing',
  'email-marketing': 'marketing',
  'web-analytics': 'marketing',
  'marketing-influence': 'marketing',
  cro: 'marketing',
  'strategie-omnicanale': 'marketing',
  'e-commerce': 'marketing',
  'community-management': 'communaute',
  'social-media-management': 'communaute',
  'fidelisation-ugc': 'communaute',
  vlogging: 'communication',
  'redaction-web': 'communication',
  copywriting: 'communication',
  'plan-communication-360': 'communication',
  'gestion-crise': 'communication',
  'veille-concurrentielle': 'communication',
  'rgpd-ethique': 'transverse',
  'outils-automatisation': 'transverse',
  programme: 'transverse',
  'projet-certification': 'certification',
}
