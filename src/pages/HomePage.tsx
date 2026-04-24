import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <main className="home-page">
      <header className="home-hero">
        <p className="home-tag">Le Jardin des Saveurs</p>
        <h1 className="home-title">Cuisine de saison, ambiance chaleureuse</h1>
        <p className="home-subtitle">
          Decouvrez notre carte inspiree du marche, preparee chaque jour avec des
          produits frais et locaux.
        </p>
        <div className="home-actions">
          <a href="#reservation" className="btn btn-primary">
            Reserver une table
          </a>
          <a href="#menu" className="btn btn-secondary">
            Voir le menu
          </a>
        </div>
      </header>

      <section id="menu" className="home-menu">
        <h2 className="section-title">Nos incontournables</h2>
        <div className="feature-card">
          <h3>Entree</h3>
          <p>Tartare de daurade, citron vert et avocat.</p>
          <span className="price">12 EUR</span>
        </div>
        <div className="feature-card">
          <h3>Plat</h3>
          <p>Magret de canard, puree de patate douce et jus epice.</p>
          <span className="price">24 EUR</span>
        </div>
        <div className="feature-card">
          <h3>Dessert</h3>
          <p>Mousse chocolat noir, eclats de noisette caramelisee.</p>
          <span className="price">9 EUR</span>
        </div>
      </section>

      <section id="reservation" className="reservation">
        <h2 className="section-title">Reservation</h2>
        <p>
          Ouvert du mardi au dimanche, de 12h a 14h30 et de 19h a 22h30.
        </p>
        <p>Telephone: 01 23 45 67 89</p>
        <Link to="/app" className="btn btn-primary">
          Acceder a l'application
        </Link>
      </section>
    </main>
  )
}
