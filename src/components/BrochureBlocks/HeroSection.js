import React from 'react';
import './blocks.css';

export default function HeroSection({ badge, title, description, buttonText, buttonLink }) {
  return (
    <section className="bb-section bb-hero">
      <div className="bb-hero-deco">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="bb-hero-content">
        {badge && (
          <div className="bb-hero-badge">
            <span className="bb-hero-badge-dot"></span>
            {badge}
          </div>
        )}
        {title && <h1 className="bb-hero-title">{title}</h1>}
        {description && <p className="bb-hero-desc">{description}</p>}

        {buttonText && buttonLink && (
          <a href={buttonLink} className="bb-hero-btn">
            {buttonText}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
