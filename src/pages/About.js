import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="page" style={{ paddingTop: '70px' }}>
      <div className="page-content">
        <p className="section-tag fade-up">Get to know me</p>
        <h2 className="page-title fade-up">About <em>me</em></h2>

        <div className="about__grid">
          <div className="about__text fade-up">
            <p>
              Hey! I'm Rajab, a Computer Science student at CUNY Hunter College with a Minor in Mathematics, graduating May 2027. I'm passionate about building things that matter, whether that's full-stack web apps, AI-powered tools, or mobile features shipped to real users.
            </p>
            <p>
              I've interned at Wyndham Hotels and Allstate, built AI agents with LangChain and OpenAI, and I'm currently working as a Software Engineering Intern at Stretch Mode and leading a development team at Hunter College. I'm also an Incoming Developer Intern at the NYC Law Department for Summer 2026.
            </p>
            <p>
              I love the intersection of clean code and thoughtful design. When I'm not coding, you'll find me exploring new AI tools, contributing to team projects, or learning something new.
            </p>
          </div>

          <div className="about__aside fade-up">
            {[
              { label: 'Currently',  value: 'SWE Intern at Stretch Mode' },
              { label: 'Education',  value: 'Computer Science at Hunter College' },
              // { label: 'Certificate', value: 'Cornell University, ML Foundations, Grade: 98%' },
              { label: 'Based in',   value: 'New York City, NY 🗽' },
              { label: 'Open to',    value: 'Internships, full-time roles, collaborations' },
            ].map(item => (
              <div className="info-card" key={item.label}>
                <h4>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
