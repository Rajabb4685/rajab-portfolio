import React from 'react';
import projects from '../data/projects';
import TechBadge from '../components/TechBadge';
import './Projects.css';

export default function Projects({ navigate }) {
  return (
    <div className="page" style={{ paddingTop: '70px' }}>
      <div className="page-content">
        <p className="section-tag fade-up">What I've built</p>
        <h2 className="page-title fade-up">Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card fade-up"
              onClick={() => navigate('project-detail', project)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && navigate('project-detail', project)}
            >
              {/* Image / placeholder */}
              <div
                className="project-card__image"
                style={{ background: project.image ? 'transparent' : project.imagePlaceholderColor }}
              >
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  <div className="project-card__placeholder">
                    <span className="project-card__placeholder-emoji">{project.emoji}</span>
                    {/* <span className="project-card__placeholder-text">Add a screenshot</span> */}
                  </div>
                )}
              </div>

              <div className="project-card__arrow">↗</div>

              <div className="project-card__body">
                <p className="project-card__num">{project.number}</p>
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.shortDesc}</p>

                {/* Tech badges with icons */}
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <TechBadge key={tag} name={tag} size="sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
