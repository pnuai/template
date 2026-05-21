import React from 'react';
import './blocks.css';

// :::panel
// header: 조직 구성         (파란 헤더 바 제목)
// headersub: Organization   (헤더 바 서브 영어)
// columns: 3                (그리드 컬럼 수, 기본 3)
// dark: true                (헤더 바 색상, 기본 blue. dark=true 이면 진한 파란)
// - icon: 📚 | title: 기초교육부 | items: AI기본교육 전략수립 | 교육과정 운영 | 비교과과정 운영
//   (items 필드는 "|"로 구분된 불릿 목록)
export default function PanelSection({ header, headersub, columns = 3, dark, items }) {
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

  const cols = Number(columns) || 3;
  const isDark = dark === true || dark === 'true';

  return (
    <div className="bb-panel-wrap">
      {(header || headersub) && (
        <div className={`bb-panel-bar${isDark ? ' bb-panel-bar-dark' : ''}`}>
          {headersub && <span className="bb-panel-bar-sub">{headersub}</span>}
          {header && <span className="bb-panel-bar-title">{header}</span>}
        </div>
      )}
      <div className="bb-panel-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {parsed.map((item, i) => {
          const bullets = item.items
            ? String(item.items).split('|').map(b => b.trim()).filter(Boolean)
            : [];
          const col = i % cols;
          const row = Math.floor(i / cols);
          const totalRows = Math.ceil(parsed.length / cols);
          return (
            <div
              key={i}
              className="bb-panel-cell"
              style={{
                borderRight: col < cols - 1 ? '1px solid #e8f0fc' : 'none',
                borderTop: row > 0 ? '1px solid #e8f0fc' : 'none',
              }}
            >
              <div className="bb-panel-cell-top">
                {item.icon && <span className="bb-panel-icon">{item.icon}</span>}
                {item.title && <span className="bb-panel-cell-title">{item.title}</span>}
              </div>
              {bullets.length > 0 && (
                <ul className="bb-panel-bullets">
                  {bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
              {item.desc && <p className="bb-panel-desc">{item.desc}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
