import React from 'react';
import Link from '@docusaurus/Link';

export default function HeroButton({children, href, outline}) {
  const baseStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    marginTop: '10px',
    marginBottom: '10px',
  };

  const style = outline
    ? { ...baseStyle, border: '2px solid #2563eb', color: '#2563eb', backgroundColor: 'transparent' }
    : { ...baseStyle, backgroundColor: '#2563eb', color: '#fff' };

  return (
    <Link to={href} style={style} className="hero-button">
      {children}
    </Link>
  );
}
