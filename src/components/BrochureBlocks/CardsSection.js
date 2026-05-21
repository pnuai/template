import React from 'react';
import './blocks.css';

export default function CardsSection({ title, subtitle, columns = 3, variant = 'elevated', items }) {
  const parsedItems = React.useMemo(() => {
    if (!items) return [];
    if (Array.isArray(items)) return items;
    if (typeof items === 'string') {
      try {
        const trimmed = items.trim();
        if (trimmed.startsWith('[')) {
          return JSON.parse(trimmed);
        }
        const bytes = Uint8Array.from(atob(trimmed), c => c.charCodeAt(0));
        return JSON.parse(new TextDecoder().decode(bytes));
      } catch (e) {
        console.error('[CardsSection Base64 Parse Error]:', e);
        return [];
      }
    }
    return [];
  }, [items]);

  return (
    <section className="bb-section bb-cards-section">
      {(title || subtitle) && (
        <div className="bb-section-header" style={{ marginBottom: '32px' }}>
          {subtitle && <span className="bb-section-subtitle" style={{
            fontSize: '11.5px',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '8px'
          }}>{subtitle}</span>}
          {title && <h3 className="bb-section-title" style={{
            fontSize: '22px',
            fontWeight: '800',
            margin: '0',
            letterSpacing: '-0.02em'
          }}>{title}</h3>}
        </div>
      )}
      <div className={`bb-cards-grid cols-${columns}`}>
        {parsedItems && parsedItems.map((item, index) => (
          <div key={index} className={`bb-card variant-${variant}`}>
            {item.icon && <div className="bb-card-icon">{item.icon}</div>}
            {item.title && <h4 className="bb-card-title">{item.title}</h4>}
            {item.description && <p className="bb-card-desc">{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
