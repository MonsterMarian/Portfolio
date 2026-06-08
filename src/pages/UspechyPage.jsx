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
