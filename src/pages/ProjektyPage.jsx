import { Link } from 'react-router-dom';

const projekty = [
  {
    id: 1,
    nazev: 'Region Beta Activity Planner',
    tech: ['Java', 'SQL', 'REST API'],
    popis: 'Webová aplikace pro správu a plánování akcí. Vlastní databázová architektura, autentizace uživatelů, REST API.',
    github: 'https://regionbeta.onrender.com/',
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
  {
    id: 5,
    nazev: 'Connect 5 AI',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    popis: 'Interaktivní hra Piškvorky (Connect 5) s počítačovým protihráčem poháněným algoritmem Minimax a alfa-beta prořezáváním.',
    github: '/projects/connect5/index.html',
    barva: '#f97316'
  },
  {
    id: 6,
    nazev: 'Poker Simulator',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    popis: 'Simulátor náhodných pokerových hand s pokročilou statistickou analýzou pravděpodobností kombinací v Texas Hold\'em.',
    github: '/projects/poker/index.html',
    barva: '#ec4899'
  },
  {
    id: 7,
    nazev: 'Web Kapely',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    popis: 'Moderní a responzivní webová prezentace pro hudební skupinu obsahující informace o kapele, koncertech a e-shopu.',
    github: '/projects/kapela/index.html',
    barva: '#10b981'
  }
];

function ProjektyPage() {
  return (
    <div className="page page--projekty">
      <div className="page__wrapper">
        <div className="page__header">
          <h1>Projekty</h1>
          <p className="page__subtitle">Věci, které jsem postavil</p>
          <div className="page__subnav">
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
                  {p.github.includes('github.com') ? 'GitHub' : 'Otevřít projekt'} →
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
