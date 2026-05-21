import React from 'react';

export function StepList({ children }) {
  return (
    <div style={{ margin: '30px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {children}
    </div>
  );
}

export function StepItem({ step, title, children }) {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      <div
        style={{
          minWidth: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#1651c8',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '900',
          fontSize: '0.9rem',
          flexShrink: 0,
          marginTop: '4px',
          boxShadow: '0 4px 10px rgba(22, 81, 200, 0.2)',
        }}
      >
        {step}
      </div>
      <div style={{ flex: 1, paddingBottom: '16px', borderBottom: '1px solid #f0f4f8' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: '800', color: '#0b1f45' }}>
          {title}
        </h4>
        <div style={{ color: '#667799', fontSize: '0.95rem', lineHeight: '1.6' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
