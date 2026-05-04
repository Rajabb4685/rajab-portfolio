import React from 'react';
import techIcons from '../data/techIcons';
import './TechBadge.css';

export default function TechBadge({ name, size = 'sm' }) {
  const icon = techIcons[name];

  return (
    <span className={`tech-badge tech-badge--${size}`}>
      <span className="tech-badge__icon">
        {icon ? (
          <img
            src={icon}
            alt={name}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <span
          className="tech-badge__fallback"
          style={icon ? { display: 'none' } : {}}
        >
          {name.slice(0, 2).toUpperCase()}
        </span>
      </span>
      <span className="tech-badge__label">{name}</span>
    </span>
  );
}
