import React from 'react';
import './blocks.css';

export default function RoadmapSection({ title, subtitle, items }) {
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
        console.error('[RoadmapSection Parse Error]:', e);
        return [];
      }
    }
    return [];
  }, [items]);

  return (
    <section className="bb-section">
      {(title || subtitle) && (
        <div className="bb-section-header">
          {subtitle && <span className="bb-section-subtitle">{subtitle}</span>}
          {title && <h3 className="bb-section-title">{title}</h3>}
        </div>
      )}
      <div className="bb-roadmap-track">
        {parsedItems.map((item, i) => {
          const bullets = item.bullets
            ? item.bullets.split('|').map(b => b.trim()).filter(Boolean)
            : [];
          return (
            <div key={i} className="bb-roadmap-phase">
              <div className="bb-roadmap-phase-header">
                <div className="bb-roadmap-phase-num">{i + 1}</div>
                {item.phase && <div className="bb-roadmap-phase-name">{item.phase}</div>}
              </div>
              {item.title && <h4 className="bb-roadmap-title">{item.title}</h4>}
              {bullets.length > 0 && (
                <ul className="bb-roadmap-bullets">
                  {bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
