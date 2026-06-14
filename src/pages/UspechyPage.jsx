function UspechyPage() {
  const uspechy = [
    {
      rok: '2026',
      nazev: 'SPŠE Ječná — maturita',
      popis: 'Úspěšné zakončení studia na Střední průmyslové škole elektrotechnické Ječná v Praze.',
      tag: 'Vzdělání'
    },
    {
      rok: '2026',
      nazev: 'Region Beta Activity Planner',
      popis: 'Vývoj komplexní aplikace pro plánování akcí s vlastní databázovou architekturou a REST API.',
      tag: 'Projekt'
    },
    {
      rok: '—',
      nazev: 'První maraton',
      popis: 'Popis a fotka budou přidány později.',
      tag: 'Sport'
    },
    {
      rok: '—',
      nazev: 'První zlatá medaile za běh',
      popis: 'Popis a fotka budou přidány později.',
      tag: 'Sport'
    },
    {
      rok: '—',
      nazev: 'Druhá zlatá medaile za běh',
      popis: 'Popis a fotka budou přidány později.',
      tag: 'Sport'
    },
    {
      rok: '2026',
      nazev: 'Top 1.5% v šachu (Elo 1648)',
      popis: 'Dosáhnout ELO ratingu 1648 na Chess.com (98.5. percentil) se mi podařilo 30. 1. 2026 a úspěšně jsem tím zakončil svoji čtyřletou šachovou cestu.',
      tag: 'Šachy',
      link: 'https://www.chess.com/member/mar1anmoon',
      image: '/images/chess-rating.png'
    },
  ];

  return (
    <div className="page page--uspechy">
      <div className="page__wrapper">
        <div className="page__header">
          <h1>Úspěchy</h1>
          <p className="page__subtitle">Co jsem zatím stihl</p>
        </div>
        <div className="page__content">
          <div className="uspechy-list">
            {uspechy.map((u, i) => (
              <div key={i} className="uspech-card">
                <div className="uspech-card__year">{u.rok}</div>
                <div className="uspech-card__body">
                  <span className="uspech-card__tag">{u.tag}</span>
                  <h2 className="uspech-card__title">{u.nazev}</h2>
                  <p className="uspech-card__desc">{u.popis}</p>
                  
                  {u.image && (
                    <div className="uspech-card__image-container">
                      <img src={u.image} alt={u.nazev} className="uspech-card__image" />
                    </div>
                  )}

                  {u.link && (
                    <div style={{ marginTop: '0.8em' }}>
                      <a href={u.link} target="_blank" rel="noopener noreferrer" className="uspech-card__link">
                        Zobrazit profil na Chess.com →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UspechyPage;
