import { Link } from 'react-router-dom';

const projekty = [
  {
    id: 1,
    nazev: 'Region Beta Activity Planner',
    tech: ['Java', 'SQL', 'REST API'],
    popis: 'Webová aplikace pro správu a plánování akcí. Vlastní databázová architektura, autentizace uživatelů, REST API.',
    github: 'https://github.com/MonsterMarian',
    barva: '#fcca46'
  },
  {
    id: 2,
    nazev: 'Neuronová síť',
    tech: ['Python', 'NumPy', 'Math'],
    popis: 'Implementace neuronové sítě od nuly. Backpropagation, aktivační funkce, trénování na vlastních datech.',
    github: 'https://github.com/MonsterMarian',
    barva: '#a855f7'
  },
  {
    id: 3,
    nazev: 'OSINT Toolkit',
    tech: ['Python', 'API', 'Scraping'],
    popis: 'Sada nástrojů pro open-source zpravodajství — analýza veřejných dat, vyhledávání informací, reporting.',
    github: 'https://github.com/MonsterMarian',
    barva: '#22d3ee'
  },
  {
    id: 4,
    nazev: 'Portfolio web',
    tech: ['React', 'Vite', 'CSS'],
    popis: 'Tato stránka. Inspirována getcoleman.com — slider s 64 texty, animace, dark brutalist design.',
    github: 'https://github.com/MonsterMarian/Portfolio',
    barva: '#fcca46'
  },
];

function ProjektyPage() {
  return (
    <div className="page page--projekty">
      <div className="page__wrapper">
        <div className="page__header">
          <h1>Projekty</h1>
          <p className="page__subtitle">Věci, které jsem postavil</p>
          <div className="page__subnav">
            <Link to="/projekty/mapa" className="page__subnav-link">→ Mapa projektů</Link>
            <Link to="/projekty/galerie" className="page__subnav-link">→ Galerie</Link>
          </div>
        </div>
        <div className="page__content">
          <div className="projekty-grid">
            {projekty.map((p) => (
              <div key={p.id} className="projekt-card" style={{ '--card-accent': p.barva }}>
                <div className="projekt-card__header">
                  <h2 className="projekt-card__title">{p.nazev}</h2>
                  <div className="projekt-card__tags">
                    {p.tech.map((t) => (
                      <span key={t} className="projekt-card__tag">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="projekt-card__desc">{p.popis}</p>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="projekt-card__link">
                  GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjektyPage;
