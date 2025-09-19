import React from 'react';
import { profile } from '../data.js';

const Contact = () => (
  <section id="contact">
    <h2>Contato</h2>
    <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
    <p>Telefone: {profile.phone}</p>
    <p>LinkedIn: <a href={profile.linkedin} target="_blank">{profile.linkedin}</a></p>
    <p>Idiomas: {profile.languages.join(', ')}</p>
  </section>
);

export default Contact;
