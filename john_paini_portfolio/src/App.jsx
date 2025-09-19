import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import SkillGrid from "./components/SkillGrid";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
   <SkillGrid/>
      <Contact />

    </div>
  );
}

export default App;
