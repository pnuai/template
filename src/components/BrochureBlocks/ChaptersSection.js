import React from 'react';
import './blocks.css';

export default function ChaptersSection({ title, subtitle, columns, items }) {
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
        console.error('[ChaptersSection Parse Error]:', e);
        return [];
      }
    }
    return [];
  }, [items]);

  const cols = parseInt(columns) || 3;

  return (
    <section className="bb-section">
      {(title || subtitle) && (
        <div className="bb-section-header">
          {subtitle && <span className="bb-section-subtitle">{subtitle}</span>}
          {title && <h3 className="bb-section-title">{title}</h3>}
        </div>
      )}
      <div className={`bb-chapters-grid cols-${cols}`}>
        {parsedItems.map((item, i) => (
          <div key={i} className="bb-chapter-card">
            <div className="bb-chapter-num">{String(i + 1).padStart(2, '0')}</div>
            {item.category && <div className="bb-chapter-category">{item.category}</div>}
            {item.title && <h4 className="bb-chapter-title">{item.title}</h4>}
            {item.description && <p className="bb-chapter-desc">{item.description}</p>}
            {item.link && (
              <a href={item.link} className="bb-chapter-link">
                자세히 보기 <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
