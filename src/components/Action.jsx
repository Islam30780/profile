import React from 'react';
import { Button } from '@mui/material';

export default function Action({ tone = 'white', href, className = '', children, ...props }) {
  return (
    <Button href={href} className={`action ${tone} ${className}`} {...props}>
      {children}
    </Button>
  );
}
