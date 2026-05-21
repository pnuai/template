import React from 'react';

export default function Details({ children, summary }) {
  return (
    <details
      style={{
        border: '1px solid #d8e4f4',
        borderRadius: '12px',
        backgroundColor: '#fff',
        marginBottom: '16px',
        overflow: 'hidden',
        transition: 'all 0.2s ease',
      }}
    >
      <summary
        style={{
          padding: '16px 20px',
          fontWeight: '700',
          cursor: 'pointer',
          backgroundColor: '#f5f8ff',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#0b1f45',
        }}
      >
        <span>{summary || '상세 보기'}</span>
        <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>▼</span>
      </summary>
      <div
        style={{
          padding: '20px',
          borderTop: '1px solid #d8e4f4',
          fontSize: '0.95rem',
          lineHeight: '1.7',
          color: '#445577',
        }}
      >
        {children}
      </div>
    </details>
  );
}
