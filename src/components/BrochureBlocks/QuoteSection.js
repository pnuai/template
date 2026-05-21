import React from 'react';
import './blocks.css';

export default function QuoteSection({ text, author, role, accent }) {
  const isAccent = accent === true || accent === 'true';

  return (
    <section className="bb-section" style={{ padding: '0', background: 'transparent' }}>
      <div className={`bb-quote ${isAccent ? 'accent-quote' : ''}`}>
        <div className="bb-quote-icon">“</div>
        {text && <blockquote className="bb-quote-text">{text}</blockquote>}
        
        {(author || role) && (
          <div className="bb-quote-author">
            {author && <span className="bb-quote-name">{author}</span>}
            {role && <span className="bb-quote-role">{role}</span>}
          </div>
        )}
      </div>
    </section>
  );
}
