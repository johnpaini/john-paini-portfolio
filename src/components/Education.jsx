import React from 'react';
import { education } from '../data.js';

const Education = () => (
  <section id="education">
    <h2>Educação</h2>
    {education.map((edu, index) => (
      <div key={index} className="edu-item">
        <p>{edu}</p>
      </div>
    ))}
  </section>
);

export default Education;
