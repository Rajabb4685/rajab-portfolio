import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const navLinks = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

export default function Navbar({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* LOGO — left */}
        <button className="navbar__logo" onClick={() => handleNav('home')}>
          <img src={logo} alt="Rajab logo" className="navbar__logo-img" />
        </button>

        {/* LINKS — right (desktop) */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`navbar__link ${currentPage === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Rajabb4685"
              target="_blank"
              rel="noreferrer"
              className="navbar__link navbar__link--github"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* HAMBURGER — mobile only */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`mobile-menu__link ${currentPage === link.id ? 'mobile-menu__link--active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Rajabb4685"
              target="_blank"
              rel="noreferrer"
              className="mobile-menu__link mobile-menu__link--github"
              onClick={() => setMenuOpen(false)}
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}