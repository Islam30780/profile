import React from 'react';
import { Card } from '@mui/material';
import Action from '../components/Action.jsx';
import Sticker from '../components/Sticker.jsx';

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container hero">
        <Sticker name="React" icon="⚛" className="react-sticker" />
        <Sticker name="JavaScript" icon="JS" className="js-sticker" />
        <div>
          <span className="tag blue tilted">CONCEPT 01 — NEOBRUTALISM EDITION</span>
          <h1>Computer Science Graduate &amp; <mark>Aspiring</mark> Software Developer.</h1>
          <p>I build responsive web experiences, explore modern technologies, and continuously strengthen my problem-solving and software development skills.</p>
          <div className="actions hero-actions">
            <Action tone="red" href="#projects">Explore my work ↓</Action>
            <Action href="#contact">Get in touch ↗</Action>
          </div>
        </div>
        <Card className="nb-card profile green">
          <div className="profile-info">
            <small>DEVELOPER PROFILE</small>
            <h2>Islam Nasr Abu Saleem</h2>
            <small>Ramallah, Palestine</small>
          </div>
          <dl>
            <div className="yellow"><dt>STATUS</dt><dd>GRADUATED JUNE 2026</dd></div>
            <div><dt>DEGREE</dt><dd>B.Sc. COMPUTER SCIENCE</dd></div>
            <div><dt>ACADEMIC AVG.</dt><dd>80.1%</dd></div>
            <div className="blue"><dt>JOB DUALITY</dt><dd>2.5 YRS TECH SUPPORT</dd></div>
          </dl>
          <Sticker name="C++ OOP" icon="C++" className="cpp-sticker" />
          <Sticker name="Figma" icon="✦" className="figma-sticker" />
        </Card>
      </div>
    </section>
  );
}
