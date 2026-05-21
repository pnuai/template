import React from 'react';
import './blocks.css';

// :::strategy
// title: 4C 추진전략
// subtitle: STRATEGIC FRAMEWORK
// - letter: C | title: Customized Education | desc: 신기술 반영 교육과정...
export default function StrategySection({ title, subtitle, items }) {
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

  return (
    <div className="bb-strategy-wrap">
      <div className="bb-strategy-header">
        {subtitle && <div className="bb-strategy-sup">{subtitle}</div>}
        {title && <div className="bb-strategy-title">{title}</div>}
      </div>
      <div className="bb-strategy-grid" style={{ gridTemplateColumns: `repeat(${parsed.length}, 1fr)` }}>
        {parsed.map((item, i) => (
          <div key={i} className="bb-strategy-card">
            {item.letter && <div className="bb-strategy-letter">{item.letter}</div>}
            {item.title && <div className="bb-strategy-card-title">{item.title}</div>}
            {item.desc && <div className="bb-strategy-card-desc">{item.desc}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
