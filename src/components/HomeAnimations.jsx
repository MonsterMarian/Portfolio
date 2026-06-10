import { useMemo } from 'react';

function HomeAnimations({ activeAnimation, sliderValue, maxSlider }) {
  // Determine special states
  const showExplosions = sliderValue === maxSlider - 1;
  const showDancingCat = sliderValue === maxSlider - 3;

  return (
    <div className="home-animations" id="home-animations" style={{ pointerEvents: 'none' }}>
      {/* Animation 1 — Stickers: 15 let + držitel ocenění */}
      <div className={`home-animation home-animation--1 ${activeAnimation === 1 ? 'is-active' : ''}`}>
        <img src="/images/15-years.png" style={{ top: '33%', left: '15%', width: '15%', height: 'auto' }} alt="15 let zkušeností" />
        <img src="/images/award-winner.png" style={{ bottom: '33%', right: '15%', width: '15%', height: 'auto' }} alt="Držitel ocenění" />
      </div>

      {/* Animation 2 — Agentury + Reklama */}
      <div className={`home-animation home-animation--2 ${activeAnimation === 2 ? 'is-active' : ''}`}>
        <img src="/images/large-small-agencies.png" style={{ bottom: '30%', left: '10%', width: '20%', height: 'auto' }} alt="Velké a malé agentury" />
        <img src="/images/advertising-digital-design.png" style={{ top: '15%', right: '10%', width: '20%', height: 'auto' }} alt="Reklama a digitální design" />
      </div>

      {/* Animation 3 — Banner "Jednejte hned" shora */}
      <div className={`home-animation home-animation--3 ${activeAnimation === 3 ? 'is-active' : ''}`}>
        <img src="/images/act-now.png" style={{ position: 'fixed', top: '0%', left: '50%', width: 'auto', height: '80%' }} className="center-x" alt="Jednejte hned" />
      </div>

      {/* Animation 4 — Banner "Zarezervujte si mě" zdola */}
      <div className={`home-animation home-animation--4 ${activeAnimation === 4 ? 'is-active' : ''}`}>
        <img src="/images/book-me-now.png" style={{ position: 'fixed', bottom: '0%', left: '50%', width: 'auto', height: '66%' }} className="center-x" alt="Zarezervujte si mě teď" />
      </div>

      {/* Animation 5 — Pes na telefonu + palec nahoru */}
      <div className={`home-animation home-animation--5 ${activeAnimation === 5 ? 'is-active' : ''}`}>
        <img src="/images/dog-phone.png" className="dog-phone" style={{ position: 'fixed', bottom: 0, left: 0, width: '70%', maxWidth: '960px', height: 'auto' }} alt="Pes na telefonu" />
        <img src="/images/thumbs-up.png" className="thumbs" style={{ position: 'fixed', top: '10%', right: 0, width: '33%', maxWidth: '600px', height: 'auto' }} alt="Palec nahoru" />
      </div>

      {/* Animation 6 — Pes s cedulí + tančící kočka */}
      <div className={`home-animation home-animation--6 ${activeAnimation === 6 ? 'is-active' : ''}`}>
        <img src="/images/dog-sign.png" className="bulldog" style={{ top: '10%', right: '10%', width: '33%', height: 'auto' }} alt="Pes s cedulí" />
        {showDancingCat && (
          <img src="/images/cat-on-phone.png" className="dancing-cat" style={{ position: 'fixed', bottom: '0%', left: '10px', width: 'auto', height: '70vmin' }} alt="Tančící kočka" />
        )}
      </div>

      {/* Animation 7 — Kočka na telefonu + letadlo */}
      <div className={`home-animation home-animation--7 ${activeAnimation === 7 ? 'is-active' : ''}`}>
        <img src="/images/cat-on-phone.png" style={{ position: 'fixed', bottom: '0%', left: '10%', width: 'auto', height: '70vmin' }} alt="Kočka na telefonu" />
        <div className="animation__plane">
          <img src="/images/plane.png" style={{ top: '10%', right: 0, width: '60%', height: 'auto' }} alt="Letadlo s nápisem" />
        </div>
      </div>

      {/* Animation 8 — Pes na skateboardu */}
      <div className={`home-animation home-animation--8 ${activeAnimation === 8 ? 'is-active' : ''}`}>
        <div className="animation__dog-skateboard">
          <img src="/images/dog-skateboard-sign.png" style={{ top: '50%', right: 0, width: 'auto', height: '50%' }} className="center-y" alt="Pes na skateboardu s cedulí" />
        </div>
      </div>

      {/* Animation 9 — Telefonní číslo + ukazující ruka */}
      <div className={`home-animation home-animation--9 ${activeAnimation === 9 ? 'is-active' : ''}`}>
        <img src="/images/phone-number.png" style={{ top: '50%', left: '50%', width: '90%', height: 'auto' }} className="center-xy" alt="Telefonní číslo" />
        <img src="/images/pointing-hand.png" style={{ top: '-10%', left: '75%', width: 'auto', height: '40%' }} className="center-x pointing" alt="Ukazující ruka" />
      </div>

      {/* Explosion overlay pro předposlední stav */}
      <div className={`home-animation home-animation--8 home-animation--8__explosions ${activeAnimation === 8 ? 'is-active' : ''}`} style={{ pointerEvents: 'none' }}>
        {showExplosions && (
          <img src="/images/thumbs-up.png" style={{ position: 'fixed', top: '30%', right: '-5%', width: '35%', height: 'auto', pointerEvents: 'none' }} className="home-animation--8__explosion" alt="Exploze palců nahoru" />
        )}
      </div>
    </div>
  );
}

export default HomeAnimations;
