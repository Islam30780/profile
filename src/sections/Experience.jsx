import React from 'react';
import { Card } from '@mui/material';
import Section from '../components/Section.jsx';
import Sticker from '../components/Sticker.jsx';
import { experience } from '../content.js';

export default function Experience() {
  return (
    <Section id="experience" label="04 / PRACTICAL FIELD" title="Professional Experience" tone="yellow"
      decoration={<Sticker name="CSS3" icon="3" className="css-sticker" />}>
      <Card component="article" className="nb-card padded experience">
        <div className="experience-title">
          <div><span className="tag yellow tilted">2.5 YEARS OF PRACTICAL EXPERIENCE</span><h3>Star Phone</h3><small>Sales, Customer Service &amp; Technical Support</small></div>
          <span className="tag white experience-badge">COMPLEMENTARY PROFESSIONAL FOUNDATION</span>
        </div>
        <p>Approximately 2.5 years of professional experience involving customer communication, technical troubleshooting, sales operations, POS systems, inventory management, and payment follow-ups.</p>
        <div className="experience-grid">
          {experience.map(([label, title, description]) => (
            <div key={label}><small>{label}</small><h4>{title}</h4><p>{description}</p></div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
