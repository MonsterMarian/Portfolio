import { Link } from 'react-router-dom';
import { useState } from 'react';

const galerie = [
  { id: 1, nazev: 'Region Beta Activity Planner', tech: 'Java · SQL', barva: '#fcca46', emoji: '🗓️', url: 'https://github.com/MonsterMarian' },
  { id: 2, nazev: 'Neuronová síť', tech: 'Python · NumPy', barva: '#a855f7', emoji: '🧠', url: 'https://github.com/MonsterMarian' },
  { id: 3, nazev: 'OSINT Toolkit', tech: 'Python · APIs', barva: '#22d3ee', emoji: '🔍', url: 'https://github.com/MonsterMarian' },
  { id: 4, nazev: 'Portfolio web', tech: 'React · Vite', barva: '#fcca46', emoji: '💼', url: 'https://github.com/MonsterMarian/Portfolio' },
  { id: 5, nazev: 'Connect 5 AI', tech: 'JS · Minimax', barva: '#f97316', emoji: '🎮', url: '/projects/connect5/index.html' },
  { id: 6, nazev: 'Poker Simulator', tech: 'JS · Statistics', barva: '#ec4899', emoji: '🃏', url: '/projects/poker/index.html' },
  { id: 7, nazev: 'Web Kapely', tech: 'HTML · CSS · JS', barva: '#10b981', emoji: '🎸', url: '/projects/kapela/index.html' },
];

function GaleriePage() {
  const [aktivni, setAktivni] = useState(null);

  return (
    <div className="page page--galerie">
      <div className="page__wrapper">
        <div className="page__header">
          <Link to="/projekty" className="page__back">← Projekty</Link>
          <h1>Galerie</h1>
          <p className="page__subtitle">Vizuální přehled projektů</p>
        </div>
        <div className="page__content">
          <div className="galerie-grid">
            {galerie.map((item) => (
              <div
                key={item.id}
                className={`galerie-item ${aktivni === item.id ? 'galerie-item--active' : ''}`}
                style={{ '--item-color': item.barva }}
                onClick={() => setAktivni(aktivni === item.id ? null : item.id)}
              >
                <div className="galerie-item__emoji">{item.emoji}</div>
                <div className="galerie-item__info">
                  <h2 className="galerie-item__title">{item.nazev}</h2>
                  <span className="galerie-item__tech">{item.tech}</span>
                </div>
                {aktivni === item.id && (
                  <div className="galerie-item__overlay">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      {item.url.startsWith('http') ? 'Zobrazit na GitHubu' : 'Otevřít projekt'} →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaleriePage;
