import { useEffect, useRef } from 'react';

function GithubPage() {
  const statsRef = useRef(null);

  // Count-up animace pro čísla ve stat kartách
  useEffect(() => {
    const els = statsRef.current?.querySelectorAll('[data-countup]');
    if (!els) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.countup);
        const isDecimal = !Number.isInteger(target);
        const duration = 900;
        const start = performance.now();
        const from = 0;
        const animate = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const val = from + (target - from) * ease;
          el.textContent = isDecimal
            ? val.toFixed(1)
            : Math.round(val) + (el.dataset.suffix || '');
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page page--github">
      <div className="page__wrapper">
        <div className="page__header">
          <h1>GitHub</h1>
          <p className="page__subtitle">Moje open-source projekty a repozitáře</p>
        </div>
        <div className="page__content">
          <a
            href="https://github.com/MonsterMarian"
            target="_blank"
            rel="noopener noreferrer"
            className="github-cta shimmer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>MonsterMarian na GitHubu</span>
          </a>

          <div className="github-stats" ref={statsRef}>
            <div className="github-stat-card">
              <span className="github-stat-card__number" data-countup="10" data-suffix="+">10+</span>
              <span className="github-stat-card__label">Repozitářů</span>
            </div>
            <div className="github-stat-card">
              <span className="github-stat-card__number">Java</span>
              <span className="github-stat-card__label">Primární jazyk</span>
            </div>
            <div className="github-stat-card">
              <span className="github-stat-card__number">JS</span>
              <span className="github-stat-card__label">Frontend</span>
            </div>
            <div className="github-stat-card">
              <span className="github-stat-card__number">Py</span>
              <span className="github-stat-card__label">AI & Skripty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubPage;
