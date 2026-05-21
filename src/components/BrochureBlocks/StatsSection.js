import React from 'react';
import './blocks.css';

export default function StatsSection({ title, subtitle, items }) {
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
        console.error('[StatsSection Base64 Parse Error]:', e);
        return [];
      }
    }
    return [];
  }, [items]);

  return (
    <section className="bb-section bb-stats-section">
      {(title || subtitle) && (
        <div className="bb-section-header" style={{ marginBottom: '32px' }}>
          {subtitle && <span className="bb-section-subtitle" style={{
            fontSize: '15px',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '10px'
          }}>{subtitle}</span>}
          {title && <h3 className="bb-section-title" style={{
            fontSize: '38px',
            fontWeight: '800',
            margin: '0',
            letterSpacing: '-0.02em'
          }}>{title}</h3>}
        </div>
      )}
      <div className="bb-stats-grid">
        {parsedItems && parsedItems.map((item, index) => (
          <div key={index} className="bb-stat-card">
            <div>
              {item.label && <div className="bb-stat-label">{item.label}</div>}
              {item.value && <div className="bb-stat-value">{item.value}</div>}
            </div>
            {item.sub && <div className="bb-stat-sub">{item.sub}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
