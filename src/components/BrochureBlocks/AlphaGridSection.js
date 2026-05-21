import React from 'react';
import './blocks.css';

// :::alphagrid
// title: SMARTPNU — 8가지 인재상
// subtitle: TALENT MODEL
// columns: 4   (optional, default 4)
// - letter: S | label: 문제해결형 혁신인재 | sub: Software
export default function AlphaGridSection({ title, subtitle, columns = 4, items }) {
  const parsed = React.useMemo(() => {
    if (!items) return [];
    if (Array.isArray(items)) return items;
    if (typeof items === 'string') {
      try {
        const t = items.trim();
        if (t.startsWith('[')) return JSON.parse(t);
        const bytes = Uint8Array.from(atob(t), c => c.charCodeAt(0));
        return JSON.parse(new TextDecoder().decode(bytes));
      } catch { return []; }
    }
    return [];
  }, [items]);

  const cols = Number(columns) || 4;

  return (
    <div className="bb-alphagrid-wrap">
      {(title || subtitle) && (
        <div className="bb-alphagrid-header">
          {subtitle && <div className="bb-alphagrid-sup">{subtitle}</div>}
          {title && <div className="bb-alphagrid-title">{title}</div>}
        </div>
      )}
      <div className="bb-alphagrid-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {parsed.map((item, i) => (
          <div key={i} className="bb-alphagrid-item">
            {item.letter && <div className="bb-alphagrid-letter">{item.letter}</div>}
            <div className="bb-alphagrid-text">
              {item.label && <div className="bb-alphagrid-label">{item.label}</div>}
              {item.sub && <div className="bb-alphagrid-sub">{item.sub}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
