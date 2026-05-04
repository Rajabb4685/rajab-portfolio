import React from 'react';
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
  return (
    <nav className="navbar">
      {/* LOGO — left side */}
      <button className="navbar__logo" onClick={() => navigate('home')}>
        <img src={logo} alt="Rajab logo" className="navbar__logo-img" />
      </button>

      {/* LINKS — right side */}
      <ul className="navbar__links">
        {navLinks.map(link => (
          <li key={link.id}>
            <button
              className={`navbar__link ${currentPage === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => navigate(link.id)}
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
    </nav>
  );
}
