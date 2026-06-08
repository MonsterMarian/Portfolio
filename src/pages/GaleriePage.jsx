import { Link } from 'react-router-dom';
import { useState } from 'react';

const galerie = [
  { id: 1, nazev: 'Region Beta Activity Planner', tech: 'Java · SQL', barva: '#fcca46', emoji: '🗓️' },
  { id: 2, nazev: 'Neuronová síť', tech: 'Python · NumPy', barva: '#a855f7', emoji: '🧠' },
  { id: 3, nazev: 'OSINT Toolkit', tech: 'Python · APIs', barva: '#22d3ee', emoji: '🔍' },
  { id: 4, nazev: 'Portfolio web', tech: 'React · Vite', barva: '#fcca46', emoji: '💼' },
  { id: 5, nazev: 'Connect 5 AI', tech: 'JS · Minimax', barva: '#f97316', emoji: '🎮' },
  { id: 6, nazev: 'Poker Simulator', tech: 'JS · Statistics', barva: '#ec4899', emoji: '🃏' },
];

function GaleriePage() {
  const [aktivni, setAktivni] = useState(null);

  return (
    <div className="page page--galerie">
      <div className="page__wrapper">
        <div className="page__header">
          <Link to="/projekty" className="page__back">← Zasobník Projektů</Link>
          <h1>Galerie Projektů</h1>
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
                    <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">
                      Zobrazit na GitHubu →
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
