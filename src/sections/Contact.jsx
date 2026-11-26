import React, { useState } from 'react';
import { Card, Snackbar } from '@mui/material';
import Action from '../components/Action.jsx';
import Section from '../components/Section.jsx';
import Sticker from '../components/Sticker.jsx';
import { contact } from '../content.js';

function ContactCard({ label, title, badge, tone, icon, field, value, href, action, copyLabel, onCopy }) {
  return (
    <Card className="nb-card padded contact-card">
      <div className="contact-title">
        <span className={`contact-icon ${tone}`} aria-hidden="true">{icon}</span>
        <div><small>{label}</small><h3>{title}</h3></div>
        <span className={`tag ${tone === 'yellow' ? 'red' : 'green'}`}>{badge}</span>
      </div>
      <div className="contact-value"><small>{field}</small><strong>{value || 'Not listed'}</strong></div>
      <div className="actions contact-actions">
        <Action tone={tone} href={value ? href : undefined} disabled={!value}>{action} ↗</Action>
        <Action disabled={!value} onClick={() => onCopy(value)}>{copyLabel}</Action>
      </div>
    </Card>
  );
}

export default function Contact() {
  const [snackbar, setSnackbar] = useState('');

  async function copy(value) {
    try {
      await navigator.clipboard.writeText(value);
      setSnackbar('Copied to clipboard');
    } catch {
      setSnackbar('Copy unavailable. You can select and copy the contact details.');
    }
  }

  return (
    <>
      <Section id="contact" label="06 / REACH OUT" title={<>Let’s <mark>Connect!</mark></>} tone="red"
        aside="Open to new opportunities, junior developer roles, collaborations, and creative projects."
        decoration={<Sticker name="Inbox ready" icon="✉" className="inbox-sticker" />}>
        <div className="availability"><i /> AVAILABLE FOR JUNIOR DEV ROLES &amp; FREELANCE</div>
        <div className="pair">
          <ContactCard label="DIRECT INBOX" title="Email me" badge="PRIMARY" tone="yellow" icon="✉"
            field="EMAIL ADDRESS" value={contact.email} href={`mailto:${contact.email}`} action="Send email" copyLabel="Copy email" onCopy={copy} />
          <ContactCard label="PHONE & WHATSAPP" title="Give me a call" badge="CALL / CHAT" tone="blue" icon="☎"
            field="PHONE NUMBER" value={contact.phone} href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} action="Call now" copyLabel="Copy number" onCopy={copy} />
        </div>
        {(contact.github || contact.linkedin) && (
          <div className="social">
            <small>FIND ME ACROSS THE WEB &amp; CODE PLATFORMS</small>
            <div className="actions">
              {contact.github && <Action href={contact.github}>GitHub Profile ↗</Action>}
              {contact.linkedin && <Action href={contact.linkedin}>LinkedIn ↗</Action>}
            </div>
          </div>
        )}
      </Section>
      <Snackbar
        open={Boolean(snackbar)}
        message={snackbar}
        autoHideDuration={3000}
        onClose={(_, reason) => {
          if (reason !== 'clickaway') setSnackbar('');
        }}
      />
    </>
  );
}
