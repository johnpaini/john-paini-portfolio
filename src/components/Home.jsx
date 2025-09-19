import React from 'react';
import { profile } from '../data.js';

const Home = () => (
  <section id="home" style={{textAlign:'center', marginTop:'80px'}}>
    <img src={profile.photo} alt={profile.name} />
    <h1>{profile.name}</h1>
    <p>{profile.title}</p>
  </section>
);

export default Home;
