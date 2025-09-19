

import React from 'react';
import { projects } from '../data.js';

const Projects = () => (
  <section id="projects">
    <h2>Projetos</h2>
    {projects.map((proj, index) => (
      <div key={index} className="project-item">
        <h3>{proj.name} - {proj.company}</h3>
        <span>{proj.period} | {proj.role}</span>
        <p>{proj.description}</p>
      </div>
    ))}
  </section>
);

export default Projects;
