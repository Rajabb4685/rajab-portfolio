import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const navigate = (page, project = null) => {
    setCurrentPage(page);
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar currentPage={currentPage} navigate={navigate} />

      {currentPage === 'home'          && <Home navigate={navigate} />}
      {currentPage === 'about'         && <About />}
      {currentPage === 'experience'    && <Experience />}
      {currentPage === 'skills'        && <Skills />}
      {currentPage === 'projects'      && <Projects navigate={navigate} />}
      {currentPage === 'project-detail'&& <ProjectDetail project={selectedProject} navigate={navigate} />}
      {currentPage === 'contact'        && <Contact />}

      <Footer />
    </>
  );
}
