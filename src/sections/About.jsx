import React from 'react';
import { Card } from '@mui/material';
import Section from '../components/Section.jsx';
import Sticker from '../components/Sticker.jsx';

export default function About() {
  return (
    <Section id="about" label="01 / DISCOVERY" title="About Me" tone="dark"
      decoration={<Sticker name="GitHub" icon="Git" className="github-sticker" />}>
      <div className="pair">
        <Card className="nb-card padded">
          <h3><span className="highlight yellow">Academic &amp; Engineering Focus</span></h3>
          <p>I am a Computer Science graduate with an active interest in software development, front-end development, web technologies, and algorithmic problem-solving. My academic journey at Palestine Technical University – Kadoorie gave me a foundation in data structures, OOP (C++), databases (SQL), and web engineering.</p>
        </Card>
        <Card className="nb-card padded">
          <h3><span className="highlight green">Practical Interpersonal Edge</span></h3>
          <p>I combine technical knowledge with approximately 2.5 years of hands-on experience in sales, customer service, and technical support. That experience taught me to troubleshoot under pressure, communicate clearly, and build with the user in mind.</p>
        </Card>
      </div>
    </Section>
  );
}
