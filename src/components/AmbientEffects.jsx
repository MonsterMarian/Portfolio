import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * AmbientEffects — lehké vizuální after efekty:
 *  1. Cursor glow   — jemný amber svit sledující myš (jen na home)
 *  2. Scan-lines    — subtilní CRT overlay (pouze home)
 *  3. Noise grain   — statický šum pro hloubku (všechny stránky)
 */
function AmbientEffects() {
  const glowRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -300, y: -300 });
  const currentRef = useRef({ x: -300, y: -300 });

  // Plynulé sledování kurzoru přes requestAnimationFrame (lerp)
  const animate = useCallback(() => {
    const ease = 0.08;
    currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * ease;
    currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * ease;

    if (glowRef.current) {
      glowRef.current.style.transform =
        `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (!isHome) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const handleMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHome, animate]);

  return (
    <>
      {/* Cursor glow — pouze home */}
      {isHome && (
        <div
          ref={glowRef}
          className="ambient-cursor-glow"
          aria-hidden="true"
        />
      )}

      {/* Scan-line + vignette overlay — pouze home */}
      {isHome && (
        <div className="ambient-scanlines" aria-hidden="true" />
      )}

      {/* Jemný noise grain — všechny stránky */}
      <div className="ambient-grain" aria-hidden="true" />
    </>
  );
}

export default AmbientEffects;
