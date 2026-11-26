import React from 'react';
import { Card } from '@mui/material';
import Section from '../components/Section.jsx';
import Sticker from '../components/Sticker.jsx';
import { skills } from '../content.js';

export default function Skills() {
  return (
    <Section id="skills" label="03 / CAPABILITIES" title="Technical Skills" tone="green"
      decoration={<Sticker name="HTML5" icon="5" className="html-sticker" />}>
      <div className="skills">
        {skills.map(([title, summary], index) => (
          <Card className={`nb-card skill ${index === skills.length - 1 ? 'skill-wide red' : ''}`} key={title}>
            <strong>{title}</strong><small>{summary}</small>
          </Card>
        ))}
      </div>
    </Section>
  );
}
