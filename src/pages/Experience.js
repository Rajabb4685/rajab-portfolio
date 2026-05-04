import React from 'react';
import './Experience.css';

const experiences = [
  {
    date: 'June 2026',
    title: 'Incoming Developer Intern',
    org: 'New York City Law Department',
    desc: `Incoming Summer 2026 Developer Intern at the New York City Law Department.`,
    current: true,
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQFjWwnIAJmilg/company-logo_200_200/company-logo_200_200/0/1631310494335?e=1779321600&v=beta&t=_PL6TZa-4QrsWoc0wfxoMdSQvK7eE779FLkGIZoOYUI',
  },
  {
    date: 'Jan 2026 – Present',
    title: 'Software Engineering Intern',
    org: 'Stretch Mode · Remote',
    desc: `Built and shipped end-to-end Android features in Kotlin, including barcode scanning, product detail screens, and a user submission flow across the full SDLC from ticket to production. Managed work on Jira within an Agile sprint cycle, collaborating cross-functionally and reviewing pull requests with close attention to edge cases and UI consistency.`,
    current: true,
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEIA_aTQLhpXQ/company-logo_100_100/company-logo_100_100/0/1702423831753/movement_vault_logo?e=1779321600&v=beta&t=HptBvk7eosqIX8E-wFCZ1_RFdZgmALxpeT5Jxl-KRqo',
  },
  {
    date: 'Jun 2025 – Present',
    title: 'Machine Learning & AI Fellow',
    org: 'Break Through Tech AI',
    desc: `Selected from 3000+ applicants for Break Through Tech AI Program at Cornell University. Built and trained deep learning models using TensorFlow and Keras, applying neural networks to image classification and computer vision tasks. Developed supervised and unsupervised models using Scikit-learn with cross-validation, GridSearchCV, and metrics including ROC AUC and precision-recall curves.`,
    current: true,
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFvUf8RSXIZnQ/company-logo_100_100/company-logo_100_100/0/1630635059610/break_through_tech_logo?e=1779321600&v=beta&t=ksk-fBp8K1pKz7ZSQ7FMnSMY79L9soccV9QpPJrTDTE',
  },
  {
    date: 'Feb 2025 – Present',
    title: 'Software Developer & Project Lead',
    org: 'Hunter College · New York City, NY',
    desc: `Leading the Project Development Program, managing a team of developers using Agile methodologies, conducting regular code reviews, and tracking tasks. Currently building an AI knowledge management agent using Python, LangChain, OpenAI GPT, and NLP. Developing the system with FastAPI, ChromaDB, and Docker, applying DevOps practices.`,
    current: true,
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFCVywN3AN0XQ/company-logo_100_100/company-logo_100_100/0/1722866745747/huntercsclub_logo?e=1779321600&v=beta&t=aB4n-ihQ37j3Q3oKVPFoOlC7L7rwQ8KL_O5oOk0iwRA',
  },
  {
    date: 'Aug 2025 – Dec 2025',
    title: 'Machine Learning Fellow',
    org: 'Allstate · Remote',
    desc: `Performed data cleaning, EDA, and preprocessing on 180,000+ insurance records with 130+ categorical features. Built and evaluated predictive models including Random Forests and neural networks to estimate insurance claim severity. Applied feature engineering and correlation analysis to improve model generalization and interpretability.`,
    current: false,
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQGeCPin8jl-nA/company-logo_200_200/company-logo_200_200/0/1630652232048/allstate_logo?e=1779321600&v=beta&t=3-OOCbQdpjmlYXriPqFlryj4S7Xp8fkIvvNdZfywG9U',
  },
  {
    date: 'Dec 2024 – Jan 2025',
    title: 'Software Engineering & SEO Intern',
    org: 'Wyndham Hotels and Resorts · Hybrid',
    desc: `Collaborated with Software Development and SEO teams to optimize HTML, CSS, and JavaScript performance for key web pages, improving load times and accessibility. Explored Microsoft Copilot and internal tools to support AI-assisted software development workflows.`,
    current: false,
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEI_WMf-ScVng/company-logo_200_200/company-logo_200_200/0/1631361431272/wyndhamhotels_logo?e=1779321600&v=beta&t=LSifqF44rRhe6IHoHd4RKxbFowsdtxNvI-46sniP9ao',
  },
  // {
  //   date: '2023 – Present',
  //   title: 'B.A. Computer Science',
  //   org: 'CUNY Hunter College · New York City, NY',
  //   desc: `Bachelor of Arts in Computer Science, Minor in Mathematics (Expected May 2027). Coursework: Data Structures & Algorithms, OOP, Calculus I–II, Discrete Mathematics, Computer Architecture, Web Development, Database Management.`,
  //   current: true,
  //   logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFCVywN3AN0XQ/company-logo_100_100/company-logo_100_100/0/1722866745747/huntercsclub_logo?e=1779321600&v=beta&t=aB4n-ihQ37j3Q3oKVPFoOlC7L7rwQ8KL_O5oOk0iwRA',
  // },
  // {
  //   date: 'August 2025',
  //   title: 'Certificate in Machine Learning Foundations',
  //   org: 'Cornell University · Grade: 98%',
  //   desc: `ML Lifecycle, Data Management, EDA, Supervised Learning (KNN, Decision Trees), Linear Models, Model Evaluation, Hyperparameter Tuning, Ensemble Methods, Deep Learning, Computer Vision, and NLP.`,
  //   current: false,
  //   logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFvUf8RSXIZnQ/company-logo_100_100/company-logo_100_100/0/1630635059610/break_through_tech_logo?e=1779321600&v=beta&t=ksk-fBp8K1pKz7ZSQ7FMnSMY79L9soccV9QpPJrTDTE',
  // },
];

function FlowerMarker() {
  return (
    <svg className="timeline__flower" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6.5" rx="2.6" ry="4.5" fill="#f2c8d5" transform="rotate(0   12 12)" />
      <ellipse cx="12" cy="6.5" rx="2.6" ry="4.5" fill="#e8a0b4" transform="rotate(45  12 12)" />
      <ellipse cx="12" cy="6.5" rx="2.6" ry="4.5" fill="#f2c8d5" transform="rotate(90  12 12)" />
      <ellipse cx="12" cy="6.5" rx="2.6" ry="4.5" fill="#e8a0b4" transform="rotate(135 12 12)" />
      <ellipse cx="12" cy="6.5" rx="2.6" ry="4.5" fill="#f2c8d5" transform="rotate(180 12 12)" />
      <ellipse cx="12" cy="6.5" rx="2.6" ry="4.5" fill="#e8a0b4" transform="rotate(225 12 12)" />
      <ellipse cx="12" cy="6.5" rx="2.6" ry="4.5" fill="#f2c8d5" transform="rotate(270 12 12)" />
      <ellipse cx="12" cy="6.5" rx="2.6" ry="4.5" fill="#e8a0b4" transform="rotate(315 12 12)" />
      <circle cx="12" cy="12" r="3.2" fill="#fdf0f4" stroke="#e8a0b4" strokeWidth="1" />
      <circle cx="12" cy="12" r="1.5" fill="#e8a0b4" />
    </svg>
  );
}

export default function Experience() {
  return (
    <div className="page" style={{ paddingTop: '70px' }}>
      <div className="page-content">
        <p className="section-tag fade-up">My journey</p>
        <h2 className="page-title fade-up">Experience</h2>

        <div className="timeline">
          {experiences.map((item, i) => (
            <div
              className={`timeline__item fade-up ${item.current ? 'timeline__item--current' : ''}`}
              key={i}
            >
              {item.current && (
                <div className="timeline__flower-wrap" aria-hidden="true">
                  <FlowerMarker />
                </div>
              )}

              <div className="timeline__header">
                <div className="timeline__logo-wrap">
                  <img
                    src={item.logo}
                    alt={item.org}
                    className="timeline__logo-img"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="timeline__logo-fallback" style={{ display: 'none' }}>
                    {item.org.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                <div>
                  <p className="timeline__date">
                    {item.date}
                    {item.current && <span className="timeline__badge">Current</span>}
                  </p>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__org">{item.org}</p>
                </div>
              </div>

              <p className="timeline__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
