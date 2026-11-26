import React from 'react';
import { Card } from '@mui/material';
import Section from '../components/Section.jsx';
import { education } from '../content.js';

export default function Education() {
  return (
    <Section id="education" label="05 / ACADEMIC TRACK" title="Education & Training" tone="blue">
      <div className="education">
        {education.map(([label, title, school, description, badge, tone]) => (
          <Card className="nb-card padded education-row" key={title}>
            <div><small>{label}</small><h3>{title}</h3><p>{school}</p><small>{description}</small></div>
            <span className={`tag ${tone}`}>{badge}</span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
