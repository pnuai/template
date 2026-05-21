import React from 'react';
import './blocks.css';

export default function TimelineSection({ title, subtitle, items }) {
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
        console.error('[TimelineSection Base64 Parse Error]:', e);
        return [];
      }
    }
    return [];
  }, [items]);

  return (
    <section className="bb-section bb-timeline-section">
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
      <div className="bb-timeline-flow">
        {parsedItems && parsedItems.map((item, index) => {
          const isAccent = item.accent === true || item.accent === 'true';
          return (
            <div key={index} className={`bb-timeline-step ${isAccent ? 'accent-step' : ''}`}>
              <div className="bb-timeline-badge">
                {index + 1}
              </div>
              <div className="bb-timeline-body">
                {item.phase && <div className="bb-timeline-phase">{item.phase}</div>}
                {item.title && <h4 className="bb-timeline-title">{item.title}</h4>}
                {item.description && <p className="bb-timeline-desc">{item.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
