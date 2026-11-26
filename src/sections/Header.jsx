import React, { useState } from 'react';
import { Box } from '@mui/material';
import Action from '../components/Action.jsx';

const navigation = [
  ['about', 'About'], ['projects', 'Projects'], ['skills', 'Skills'],
  ['experience', 'Experience'], ['education', 'Education'], ['contact', 'Contact'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ticker">
        <div className="container">◆ CS GRADUATE · PALESTINE TECHNICAL UNIVERSITY (KADOORIE)　 ◆ OPEN FOR JUNIOR DEVELOPER ROLES　 ◆ FRONT-END &amp; PROBLEM SOLVING</div>
      </div>
      <Box component="header" className="site-header" onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          event.currentTarget.querySelector('.menu-button')?.focus();
        }
      }}>
        <div className="container header-row">
          <a className="brand" href="#hero" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark red">IN</span>
            <span><strong>ISLAM ABU SALEEM</strong><small>RAMALLAH, PALESTINE</small></span>
          </a>
          <nav id="portfolio-nav" aria-label="Portfolio" className={menuOpen ? 'navigation open' : 'navigation'}>
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
          <Action tone="yellow" href="#contact" className="header-contact" onClick={() => setMenuOpen(false)}>Get in touch ↗</Action>
          <Action className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="portfolio-nav" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? '×' : '☰'}
          </Action>
        </div>
      </Box>
    </>
  );
}
