import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page page-notfound">
      <h1>404</h1>
      <p>Cette page n'existe pas.</p>
      <Link to="/" className="btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  )
}
