import InfoPanel from '../components/InfoPanel'
import { infos, contact } from '../data/sections'

export default function Infos() {
  return (
    <div className="page page-infos">
      <div className="page-header">
        <h1>📞 Infos pratiques & Contact</h1>
        <p>Durée, tarifs et modalités d'inscription à la formation Référent Digital.</p>
      </div>
      <InfoPanel infos={infos} contact={contact} />
    </div>
  )
}
