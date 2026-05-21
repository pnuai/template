import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color || '#2563eb',
        borderRadius: '4px',
        color: '#fff',
        padding: '2px 6px',
        fontWeight: 'bold',
      }}>
      {children}
    </span>
  );
}
