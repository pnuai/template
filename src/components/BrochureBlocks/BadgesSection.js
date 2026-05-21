import React from 'react';
import './blocks.css';

const BADGE_PALETTE = [
  ['#6366f1', '#4f46e5'],
  ['#0ea5e9', '#0284c7'],
  ['#10b981', '#059669'],
  ['#f59e0b', '#d97706'],
  ['#ef4444', '#dc2626'],
  ['#8b5cf6', '#7c3aed'],
  ['#ec4899', '#db2777'],
  ['#14b8a6', '#0d9488'],
];

export default function BadgesSection({ title, subtitle, dark, items }) {
  const parsedItems = React.useMemo(() => {
    if (!items) return [];
    if (Array.isArray(items)) return items;
    if (typeof items === 'string') {
      try {
        const trimmed = items.trim();
        if (trimmed.startsWith('[')) return JSON.parse(trimmed);
        const bytes = Uint8Array.from(atob(trimmed), c => c.charCodeAt(0));
        return JSON.parse(new TextDecoder().decode(bytes));
      } catch (e) {
        console.error('[BadgesSection Parse Error]:', e);
        return [];
      }
    }
    return [];
  }, [items]);

  const isDark = dark === true || dark === 'true';

  return (
    <section className={`bb-section bb-badges-section${isDark ? ' bb-badges-dark' : ''}`}>
      {(title || subtitle) && (
        <div className="bb-section-header">
          {subtitle && <span className="bb-section-subtitle">{subtitle}</span>}
          {title && <h3 className="bb-section-title">{title}</h3>}
        </div>
      )}
      <div className="bb-badges-grid">
        {parsedItems.map((item, i) => {
          const [from, to] = BADGE_PALETTE[i % BADGE_PALETTE.length];
          return (
            <div key={i} className="bb-badge-item">
              <div
                className="bb-badge-letter"
                style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
              >
                {item.letter}
              </div>
              {item.label && <div className="bb-badge-label">{item.label}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
