import React from 'react';

export default function Highlighthead({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '5px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}