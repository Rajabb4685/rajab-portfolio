import React from 'react';
import TechBadge from '../components/TechBadge';
import './ProjectDetail.css';

export default function ProjectDetail({ project, navigate }) {
  if (!project) {
    navigate('projects');
    return null;
  }

  return (
    <div className="page" style={{ paddingTop: '70px' }}>
      <div className="project-detail">
        <button className="project-detail__back" onClick={() => navigate('projects')}>
          ← Back to projects
        </button>

        {/* Hero image */}
        {project.image ? (
          <div className="project-detail__hero">
            <img src={project.image} alt={project.name} />
          </div>
        ) : (
          <div
            className="project-detail__hero project-detail__hero--placeholder"
            style={{ background: project.imagePlaceholderColor }}
          >
            <span>{project.emoji}</span>
          </div>
        )}

        <h2 className="project-detail__title">{project.name}</h2>

        {/* Tech stack badges — medium size with icons */}
        <div className="project-detail__stack">
          {project.tags.map(tag => (
            <TechBadge key={tag} name={tag} size="md" />
          ))}
        </div>

        <div className="project-detail__body">
          {project.fullDesc.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="project-detail__links">
          <a href={project.github} target="_blank" rel="noreferrer" className="link-btn link-btn--dark">
            View on GitHub →
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="link-btn link-btn--outline">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
