import { useState, useCallback, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HomeAnimations from './components/HomeAnimations'
import ContentBlock from './components/ContentBlock'
import SliderWrap from './components/SliderWrap'
import MenuDrawerE from './components/MenuDrawerE'
import states from './data/states'

// Pages
import GithubPage from './pages/GithubPage'
import UspechyPage from './pages/UspechyPage'
import ProjektyPage from './pages/ProjektyPage'
import GaleriePage from './pages/GaleriePage'

const DEFAULT_POSITION = 31;

function App() {
  const [sliderValue, setSliderValue] = useState(() => {
    const saved = sessionStorage.getItem('joecSliderPos');
    return saved !== null ? parseInt(saved, 10) : DEFAULT_POSITION;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const appRef = useRef(null);
  const invertIntervalRef = useRef(null);
  const location = useLocation();

  const maxSlider = states.length - 1;

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleSliderChange = useCallback((val) => {
    const v = Math.max(0, Math.min(val, maxSlider));
    setSliderValue(v);
    sessionStorage.setItem('joecSliderPos', v);
  }, [maxSlider]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.keyCode === 37) {
        e.preventDefault();
        setSliderValue(prev => {
          const next = Math.max(0, prev - 1);
          sessionStorage.setItem('joecSliderPos', next);
          return next;
        });
      } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
        e.preventDefault();
        setSliderValue(prev => {
          const next = Math.min(maxSlider, prev + 1);
          sessionStorage.setItem('joecSliderPos', next);
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxSlider]);

  // Blikání na max — přímá DOM manipulace, žádný React re-render
  useEffect(() => {
    const el = appRef.current;
    if (!el) return;
    if (sliderValue === maxSlider) {
      el.classList.add('invert');
      let on = true;
      invertIntervalRef.current = setInterval(() => {
        on = !on;
        el.classList.toggle('invert', on);
      }, 250);
    } else {
      el.classList.remove('invert');
      clearInterval(invertIntervalRef.current);
      invertIntervalRef.current = null;
    }
    return () => {
      clearInterval(invertIntervalRef.current);
      invertIntervalRef.current = null;
    };
  }, [sliderValue, maxSlider]);

  const remaining = states.length - sliderValue;
  const activeAnimation = remaining <= 9 ? 10 - remaining : 0;
  const currentState = states[sliderValue];
  const lastState = states[maxSlider];

  const isHome = location.pathname === '/';

  return (
    <div ref={appRef} className={isHome ? 'app home' : 'app'} id="app-root">
      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
      />
      <MenuDrawerE isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Routes>
        <Route path="/" element={
          <main className="wrapper" id="main-content">
            <HomeAnimations
              activeAnimation={activeAnimation}
              sliderValue={sliderValue}
              maxSlider={maxSlider}
            />
            <ContentBlock
              currentHtml={currentState.html}
              currentCss={currentState.css}
              sizeGuideHtml={lastState.html}
            />
            <SliderWrap
              value={sliderValue}
              max={maxSlider}
              onChange={handleSliderChange}
            />
          </main>
        } />
        <Route path="/github" element={<GithubPage />} />
        <Route path="/uspechy" element={<UspechyPage />} />
        <Route path="/projekty" element={<ProjektyPage />} />
        <Route path="/projekty/galerie" element={<GaleriePage />} />
      </Routes>
    </div>
  );
}

export default App;
