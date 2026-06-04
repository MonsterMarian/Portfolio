import { useEffect, useRef } from 'react';

function MenuDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('js--open');
    } else {
      document.body.classList.remove('js--open');
    }
    return () => document.body.classList.remove('js--open');
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <nav className={`menu-drawer ${isOpen ? 'is-open' : ''}`} id="menu-drawer" ref={drawerRef}>
      <a
        href="#"
        className="menu-toggle menu-close"
        id="menu-close-btn"
        onClick={(e) => { e.preventDefault(); onClose(); }}
        aria-label="Zavřít menu"
      >
        Zavřít
      </a>
      <div className="menu-drawer_inner">
        <ul className="menu" id="menu-nav">
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/cv">Životopis</a></li>
          <li><a href="/awards">Ocenění</a></li>
          <li><a href="/news">Články</a></li>
          <li><a href="/agencies">Agentury</a></li>
          <li><a href="https://josephacoleman.com/" target="_blank" rel="noopener noreferrer">Umění</a></li>
        </ul>
        <address>
          <a className="social-link" href="https://twitter.com/joethecoleman" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src="/images/icon-twitter.svg" alt="Twitter" />
          </a>
          <a className="social-link" href="https://uk.linkedin.com/in/joe-coleman-78110323" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src="/images/icon-linkedin.svg" alt="LinkedIn" />
          </a>
          <br />
          Manchester - UK<br />
          +420 730 939 804<br />
          <a href="mailto:mvystavel@seznam.cz">mvystavel@seznam.cz</a>
        </address>
      </div>
    </nav>
  );
}

export default MenuDrawer;
