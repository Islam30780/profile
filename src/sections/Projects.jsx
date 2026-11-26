import React, { useState } from 'react';
import { Card, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Action from '../components/Action.jsx';
import Section from '../components/Section.jsx';
import Sticker from '../components/Sticker.jsx';
import { projects } from '../content.js';

function ProjectCard({ project, onInspect }) {
  return (
    <Card component="article" className="nb-card project">
      <div className={`project-bar ${project.tone}`}>
        <strong>{project.label}</strong><span className="tag white">{project.type}</span>
      </div>
      <div className={`preview-wrap ${project.tone}`}>
        <div className="preview" aria-label={`${project.title} illustrative mockup`}>
          <div className="browser-bar"><i /><i /><i /><small>{project.address}</small></div>
          <div><strong>{project.preview}</strong><p>{project.features.join(' · ')}</p></div>
          <div className="preview-features">{project.highlights.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
      <div className="padded project-body">
        <h3>{project.title}</h3><p>{project.description}</p>
        <ul className="tools">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      </div>
      <div className="project-footer">
        <small>{project.footer}</small>
        <Action tone={project.tone} onClick={() => onInspect(project)} aria-label={`Inspect details for ${project.title}`}>Inspect details ↗</Action>
      </div>
    </Card>
  );
}

export default function Projects() {
  const [project, setProject] = useState(null);

  return (
    <>
      <Section id="projects" label="02 / WORK ARCHIVE" title="Featured Projects" tone="red"
        aside="Selected front-end projects, API integrations, and component architecture."
        decoration={<Sticker name="Tailwind" icon="≈" className="tailwind-sticker" />}>
        <div className="pair">
          {projects.map((item) => <ProjectCard key={item.title} project={item} onInspect={setProject} />)}
        </div>
      </Section>
      <Dialog open={Boolean(project)} onClose={() => setProject(null)} aria-labelledby="project-title" slotProps={{ paper: { className: 'nb-card project-dialog' } }}>
        {project && <>
          <DialogTitle id="project-title">{project.title}</DialogTitle>
          <DialogContent dividers>
            <p>{project.description}</p>
            <h3>Project highlights</h3>
            <ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul>
            <ul className="tools">{project.tools.map((item) => <li key={item}>{item}</li>)}</ul>
          </DialogContent>
          <DialogActions><Action tone={project.tone} onClick={() => setProject(null)}>Close</Action></DialogActions>
        </>}
      </Dialog>
    </>
  );
}
