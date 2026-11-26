import React from 'react';
import { Box } from '@mui/material';

export default function Section({ id, label, title, tone, children, aside, decoration }) {
  return (
    <Box component="section" id={id} className={`section section-${id}`}>
      <div className="container">
        {decoration}
        <div className={`section-heading ${aside ? 'with-aside' : ''}`}>
          <div className="heading-label">
            <span className={`tag ${tone}`}>{label}</span>
            <h2>{title}</h2>
          </div>
          {aside && <p className="aside">{aside}</p>}
        </div>
        {children}
      </div>
    </Box>
  );
}
