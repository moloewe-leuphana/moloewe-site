import React from 'react';

export default function Highlightsubhead({children}) {
  return (
    <span
      style={{
        backgroundColor: "lightgreen",
        borderRadius: '5px',
        color: 'black',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}
