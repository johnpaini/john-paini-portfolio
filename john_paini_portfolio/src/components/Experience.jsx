import React from 'react';
import { experiences } from '../data.js';

const Experience = () => (
  <section id="experience">
    <h2>Experiência Profissional</h2>
    {experiences.map((exp, index) => (
      <div key={index} className="exp-item">
        <h3>{exp.role} - {exp.company}</h3>
        <span>{exp.period}</span>
        <p>{exp.description}</p>
      </div>
    ))}
  </section>
);

export default Experience;
