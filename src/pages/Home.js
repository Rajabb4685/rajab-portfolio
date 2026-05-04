import React from 'react';
import './Home.css';

export default function Home({ navigate }) {
  return (
    <section className="home">
      <div className="home__blob home__blob--1" />
      <div className="home__blob home__blob--2" />
      <div className="home__blob home__blob--3" />

      <div className="home__content">
        <p className="home__greeting">Hello, world</p>

        <h1 className="home__name">
          I'm <em>Rajab</em>
        </h1>

        <p className="home__title">
          Software Engineer · Technology enthusiast · Creative
        </p>

        <p className="home__bio">
          A CS student at Hunter College and ML Fellow turned full-stack developer. I love building
          AI-powered tools and web apps that are clean, fast, and a little
          beautiful with real users in mind.
        </p>

        <div className="home__actions">
          <button className="btn-primary" onClick={() => navigate('projects')}>
            View my work <span className="home__arrow">→</span>
          </button>

          {/* <a href="https://linkedin.com/in/rajab-begim" target="_blank" rel="noreferrer" className="home__social-btn home__social-btn--linkedin">
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a> */}

          {/* <a href="mailto:Rajabjeje347@gmail.com" className="home__social-btn home__social-btn--gmail">
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
            Email me
          </a> */}
        </div>
      </div>
    </section>
  );
}
