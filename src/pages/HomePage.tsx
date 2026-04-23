import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './HomePage.css'

export default function HomePage() {
  return (
    <main className="home-page">
      <header className="home-header">
        <div className="home-logos">
          <img src={viteLogo} alt="Vite logo" className="home-logo" />
          <img src={reactLogo} alt="React logo" className="home-logo spin" />
        </div>
        <h1 className="home-title">Bienvenue sur notre application</h1>
        <p className="home-subtitle">
          Une application moderne construite avec Vite&nbsp;+&nbsp;React&nbsp;+&nbsp;TypeScript.
        </p>
        <div className="home-actions">
          <Link to="/app" className="btn btn-primary">
            Commencer
          </Link>
          <a
            href="https://vite.dev/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Documentation
          </a>
        </div>
      </header>

      <section className="home-features">
        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h2>Rapide</h2>
          <p>Démarrage instantané grâce à Vite et rechargement à chaud (HMR).</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🛡️</span>
          <h2>Typé</h2>
          <p>TypeScript intégré pour un code robuste et maintenable.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🚀</span>
          <h2>Moderne</h2>
          <p>React&nbsp;19 avec les dernières fonctionnalités du framework.</p>
        </div>
      </section>
    </main>
  )
}
