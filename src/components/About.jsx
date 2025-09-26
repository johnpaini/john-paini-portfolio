import React from 'react';
import { about } from '../data.js';
import { keywords } from "../data";
import "../style/about.css"

const About = () => (
  <section id="about">
    <h2>Sobre</h2>
    <p>{about}</p>
     {/* Palavras-chave em forma de botões */}
      <div className="keywords-container">
        {keywords.map((word, idx) => (
          <span key={idx} className="keyword-badge">
            {word}
          </span>
        ))}
      </div>
  </section>
);

export default About;
