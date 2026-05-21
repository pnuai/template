import React from 'react';
import './blocks.css';

// :::datatable
// header: 전형 방법 및 평가 요소
// headersub: ADMISSION METHOD
// note: ※ 비고 텍스트 (선택)
// columns: 전형구분 | 전형명 | 전형요소 및 평가방법 | 최고점 | 최저점 | 수능최저
// align:   left | left | left | center | center | center   (선택, 기본 left)
// - 수시 학생부 교과 | 학생부교과전형 | 서류(학생부) 평가 100% | 100 | 0 | 적용
// - 수시 학생부 교과 | 지역인재전형 | 학생부 교과 80% + 학업역량평가 20% | 100 | 0 | 적용

export default function DataTableSection({ header, headersub, columns, align, note, items }) {
  const cols = (columns || '').split('|').map(c => c.trim()).filter(Boolean);
  const aligns = (align || '').split('|').map(a => a.trim());

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

  // 각 item은 { row: "셀1 | 셀2 | 셀3" } 형태
  const rows = parsed.map(item => {
    const raw = item.row || Object.values(item)[0] || '';
    return raw.split('|').map(c => c.trim());
  });

  const getAlign = (i) => {
    const a = aligns[i] || 'left';
    if (a === 'center' || a === 'c') return 'center';
    if (a === 'right' || a === 'r') return 'right';
    return 'left';
  };

  // 인라인 서식 → React 노드 변환
  // **굵게**  [!텍스트] → accent 강조색  [~텍스트] → 이탤릭
  const renderCell = (text) => {
    if (!text.includes('**') && !text.includes('[!') && !text.includes('[~')) return text;
    const parts = text.split(/(\*\*[^*]+\*\*|\[![^\]]+\]|\[~[^\]]+\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**'))
        return <strong key={i} className="bb-dt-bold">{part.slice(2, -2)}</strong>;
      if (part.startsWith('[!') && part.endsWith(']'))
        return <span key={i} className="bb-dt-accent">{part.slice(2, -1)}</span>;
      if (part.startsWith('[~') && part.endsWith(']'))
        return <em key={i}>{part.slice(2, -1)}</em>;
      return part;
    });
  };

  return (
    <div className="bb-datatable-wrap">
      {(header || headersub) && (
        <div className="bb-panel-bar">
          {headersub && <span className="bb-panel-bar-sub">{headersub}</span>}
          {header && <span className="bb-panel-bar-title">{header}</span>}
        </div>
      )}
      <div className="bb-datatable-body">
        <table className="bb-datatable">
          {cols.length > 0 && (
            <thead>
              <tr>
                {cols.map((col, i) => (
                  <th key={i} style={{ textAlign: getAlign(i) }}>{col}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((cells, ri) => (
              <tr key={ri}>
                {(cols.length > 0 ? cols : cells).map((_, ci) => (
                  <td key={ci} style={{ textAlign: getAlign(ci) }}>
                    {renderCell(cells[ci] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {note && <p className="bb-datatable-note">{note}</p>}
      </div>
    </div>
  );
}
