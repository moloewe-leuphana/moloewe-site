import React from 'react';

export default function Highlight({children}) {
  return (
    <span
      style={{
        backgroundColor: "grey",
        borderRadius: '5px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}