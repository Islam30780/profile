import React from 'react';


export default function Sticker({ name, icon, className }) {
  return (
    <div className={`sticker ${className}`} aria-hidden="true">
      <span>{icon}</span><small>{name}</small>
    </div>
  );
}
