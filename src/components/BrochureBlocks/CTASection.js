import React from 'react';
import './blocks.css';

export default function CTASection({ title, description, buttonText, buttonLink }) {
  return (
    <section className="bb-section bb-cta">
      {title && <h2 className="bb-cta-title">{title}</h2>}
      {description && <p className="bb-cta-desc">{description}</p>}
      
      {buttonText && buttonLink && (
        <a href={buttonLink} className="bb-cta-btn">
          {buttonText}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      )}
    </section>
  );
}
