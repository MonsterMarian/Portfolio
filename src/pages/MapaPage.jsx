import { Link } from 'react-router-dom';

function MapaPage() {
  return (
    <div className="page page--mapa">
      <div className="page__wrapper">
        <div className="page__header">
          <Link to="/projekty" className="page__back">← Projekty</Link>
          <h1>Mapa projektů</h1>
          <p className="page__subtitle">Kde vznikaly a čeho se týkají</p>
        </div>
        <div className="page__content">
          <div className="mapa-container">
            <div className="mapa-placeholder">
              <div className="mapa-placeholder__icon">🗺️</div>
              <h2>Interaktivní mapa</h2>
              <p>Tato sekce bude obsahovat interaktivní mapu zobrazující geografické rozložení projektů, klientů a spolupracovníků.</p>
              <p className="mapa-placeholder__tech">Plánováno: Leaflet.js / Google Maps API</p>
            </div>
          </div>

          <div className="mapa-lokace">
            <div className="mapa-lokace-item">
              <span className="mapa-lokace-item__pin">📍</span>
              <div>
                <strong>Praha — SPŠE Ječná</strong>
                <p>Vzdělání & základ dovedností</p>
              </div>
            </div>
            <div className="mapa-lokace-item">
              <span className="mapa-lokace-item__pin">📍</span>
              <div>
                <strong>Ondřejov — Home base</strong>
                <p>Vývoj vlastních projektů</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaPage;
