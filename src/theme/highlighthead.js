import React from 'react';

export default function Highlighthead({children}) {
  return (
    <span
      style={{
        backgroundColor: 'lightblue',
        borderRadius: '5px',
        color: 'black',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}
