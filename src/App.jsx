import { useState, useCallback, useEffect, useRef } from 'react'
import Header from './components/Header'
import HomeAnimations from './components/HomeAnimations'
import ContentBlock from './components/ContentBlock'
import SliderWrap from './components/SliderWrap'
import MenuDrawer from './components/MenuDrawer'
import states from './data/states'

const DEFAULT_POSITION = 24;

function App() {
  const [sliderValue, setSliderValue] = useState(() => {
    const saved = sessionStorage.getItem('joecSliderPos');
    return saved !== null ? parseInt(saved, 10) : DEFAULT_POSITION;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [inverted, setInverted] = useState(false);
  const invertIntervalRef = useRef(null);

  const maxSlider = states.length - 1;

  const handleSliderChange = useCallback((val) => {
    const v = Math.max(0, Math.min(val, maxSlider));
    setSliderValue(v);
    sessionStorage.setItem('joecSliderPos', v);
  }, [maxSlider]);

  // Handle keyboard navigation (arrow keys)
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

  // Handle invert flashing at maximum slider
  useEffect(() => {
    if (sliderValue === maxSlider) {
      setInverted(true);
      invertIntervalRef.current = setInterval(() => {
        setInverted(prev => !prev);
      }, 250);
    } else {
      setInverted(false);
      if (invertIntervalRef.current) {
        clearInterval(invertIntervalRef.current);
        invertIntervalRef.current = null;
      }
    }
    return () => {
      if (invertIntervalRef.current) {
        clearInterval(invertIntervalRef.current);
      }
    };
  }, [sliderValue, maxSlider]);

  // Determine which animation to show
  const remaining = states.length - sliderValue;
  const activeAnimation = remaining <= 9 ? 10 - remaining : 0;

  const currentState = states[sliderValue];
  const lastState = states[maxSlider];

  return (
    <div className={`app home ${inverted ? 'invert' : ''}`} id="app-root">
      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
      />
      <MenuDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
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
    </div>
  );
}

export default App;
