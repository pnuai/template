import React from 'react';

const types = {
  info: {
    icon: 'ℹ️',
    color: '#0b1f45',
    backgroundColor: '#eef4ff',
    borderColor: '#d8e4f4',
  },
  success: {
    icon: '✅',
    color: '#115e59',
    backgroundColor: '#f0fdf4',
    borderColor: '#bbf7d0',
  },
  warning: {
    icon: '⚠️',
    color: '#92400e',
    backgroundColor: '#fffbeb',
    borderColor: '#fde68a',
  },
  danger: {
    icon: '🚨',
    color: '#991b1b',
    backgroundColor: '#fef2f2',
    borderColor: '#fecaca',
  },
};

export default function Callout({ children, type = 'info', title }) {
  const style = types[type] || types.info;

  return (
    <div
      style={{
        padding: '16px 20px',
        borderRadius: '12px',
        border: `1px solid ${style.borderColor}`,
        backgroundColor: style.backgroundColor,
        color: style.color,
        marginBottom: '20px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ fontSize: '1.2rem', lineHeight: '1' }}>{style.icon}</div>
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontWeight: '800', marginBottom: '4px', fontSize: '1rem' }}>
            {title}
          </div>
        )}
        <div style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9 }}>
          {children}
        </div>
      </div>
    </div>
  );
}
