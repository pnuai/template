import React from 'react';
import './blocks.css';

// :::stepper
// header: 3단계 추진 로드맵
// headersub: THREE-PHASE ROADMAP
// - phase: 1단계 | period: 2023-2024 | title: 교육체계 재정비 | items: 항목1 | 항목2 | 항목3
export default function StepperSection({ header, headersub, items }) {
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
    <div className="bb-stepper-wrap">
      {(header || headersub) && (
        <div className="bb-panel-bar">
          {headersub && <span className="bb-panel-bar-sub">{headersub}</span>}
          {header && <span className="bb-panel-bar-title">{header}</span>}
        </div>
      )}
      <div className="bb-stepper-grid" style={{ gridTemplateColumns: `repeat(${parsed.length}, 1fr)` }}>
        {parsed.map((item, i) => {
          const bullets = item.items
            ? String(item.items).split('|').map(b => b.trim()).filter(Boolean)
            : [];
          return (
            <div key={i} className="bb-stepper-cell" style={{ borderRight: i < parsed.length - 1 ? '1px solid var(--theme-border, #e8f0fc)' : 'none' }}>
              <div className="bb-stepper-badge-row">
                <span className="bb-stepper-badge">{item.phase || `${i + 1}단계`}</span>
                {item.period && <span className="bb-stepper-period">{item.period}</span>}
              </div>
              {item.title && <div className="bb-stepper-title">{item.title}</div>}
              {bullets.length > 0 && (
                <ul className="bb-panel-bullets">
                  {bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
