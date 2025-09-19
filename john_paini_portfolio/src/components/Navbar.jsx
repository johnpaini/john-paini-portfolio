import React from 'react';
import { profile } from '../data.js';

const Navbar = () => (
  <nav>
    <div>
      <div>{profile.name}</div>
      <div>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#experience">Experiência</a>
        <a href="#projects">Projetos</a>
        <a href="#education">Educação</a>
        <a href="#certifications">Certificações</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contato</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
