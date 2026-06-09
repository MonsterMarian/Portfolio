import { Link } from 'react-router-dom';

const projekty = [
  {
    id: 4,
    nazev: 'Portfolio web',
    tech: ['React', 'Vite', 'CSS'],
    popis: 'Tato stránka. Inspirována getcoleman.com — slider s 64 texty, animace, dark brutalist design.',
    github: 'https://github.com/MonsterMarian/Portfolio',
    datum: '06 / 2026',
    komentar: 'Můj osobní portfoliový web. Chtěl jsem vytvořit neotřelý design s netradičním ovládáním a plynulými animacemi, které zaujmou na první pohled.'
  },
  {
    id: 1,
    nazev: 'Region Beta Activity Planner',
    tech: ['Java', 'SQL', 'REST API'],
    popis: 'Webová aplikace pro správu a plánování akcí. Vlastní databázová architektura, autentizace uživatelů, REST API.',
    github: 'https://regionbeta.onrender.com/',
    datum: '4-5 / 2026',
    komentar: 'Moje první velká webová aplikace v Javě. Zde jsem se naučil základy relačních databází, návrhové vzory a jak postavit robustní backend API.'
  },
  {
    id: 5,
    nazev: 'Connect 5 AI',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    popis: 'Interaktivní hra Piškvorky (Connect 5) s počítačovým protihráčem poháněným algoritmem Minimax a alfa-beta prořezáváním.',
    github: '/projects/connect5/index.html',
    datum: '08 / 2024',
    komentar: 'Tento projekt mě velmi bavil, protože jsem si mohl v praxi vyzkoušet teorii her a optimalizaci vyhledávacího stromu v JavaScriptu.'
  },
  {
    id: 6,
    nazev: 'Poker Simulator',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    popis: 'Simulátor náhodných pokerových hand s pokročilou statistickou analýzou pravděpodobností kombinací v Texas Hold\'em.',
    github: '/projects/poker/index.html',
    datum: '04 / 2024',
    komentar: 'Zaměřeno na matematické simulace a výpočty pravděpodobností. Užitečné pro pochopení chování náhody na velkém vzorku dat.'
  },
  {
    id: 7,
    nazev: 'Web Kapely',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    popis: 'Moderní a responzivní webová prezentace pro hudební skupinu obsahující informace o kapele, koncertech a e-shopu.',
    github: '/projects/kapela/index.html',
    datum: '09 / 2023',
    komentar: 'Můj první reálný projekt pro klienta. Kladl jsem velký důraz na čistý kód bez frameworků a responzivní zobrazení na všech typech zařízení.'
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
          <div className="projekt-stack-list">
            {projekty.map((p) => (
              <div key={p.id} className="projekt-stack-card">
                <div className="projekt-stack-card__date">{p.datum}</div>
                <div className="projekt-stack-card__body">
                  <div className="projekt-stack-card__tech">
                    {p.tech.map((t) => (
                      <span key={t} className="projekt-stack-card__tech-tag">{t}</span>
                    ))}
                  </div>
                  <h2 className="projekt-stack-card__title">{p.nazev}</h2>
                  <p className="projekt-stack-card__desc">{p.popis}</p>
                  {p.komentar && (
                    <div className="projekt-stack-card__comment">
                      <strong>Komentář:</strong> <em>{p.komentar}</em>
                    </div>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="projekt-stack-card__link">
                    {p.github.includes('github.com') ? 'GitHub' : 'Otevřít projekt'} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjektyPage;
