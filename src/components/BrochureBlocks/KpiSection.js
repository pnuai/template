import React from 'react';
import './blocks.css';

// :::kpi
// label: SW학과 정원 | value: 192명 | sub: 2019년 대비 43% 순증
// - label: ... | value: ... | sub: ...
export default function KpiSection({ title, subtitle, items }) {
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
    <div className="bb-kpi-wrap">
      {(title || subtitle) && (
        <div className="bb-kpi-header">
          {subtitle && <span className="bb-kpi-sup">{subtitle}</span>}
          {title && <span className="bb-kpi-title">{title}</span>}
        </div>
      )}
      <div className="bb-kpi-row" style={{ gridTemplateColumns: `repeat(${parsed.length}, 1fr)` }}>
        {parsed.map((item, i) => (
          <div key={i} className="bb-kpi-cell" style={{ borderRight: i < parsed.length - 1 ? '1px solid #e8f0fc' : 'none' }}>
            <div className="bb-kpi-label">{item.label}</div>
            <div className="bb-kpi-value">{item.value}</div>
            {item.sub && <div className="bb-kpi-sub">{item.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
