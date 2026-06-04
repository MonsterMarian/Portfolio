import { useRef, useEffect } from 'react';

function Header({ menuOpen, onMenuToggle }) {
  return (
    <header className="header-main" id="site-header">
      <span className="site-title">
        <a href="/">Marian Vystavěl</a>
      </span>
      <a
        href="#"
        className="menu-toggle menu-open"
        id="menu-open-btn"
        onClick={(e) => { e.preventDefault(); onMenuToggle(); }}
        aria-label="Open menu"
      >
        Menu
      </a>
    </header>
  );
}

export default Header;
