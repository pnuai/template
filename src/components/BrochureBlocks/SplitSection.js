import React from 'react';
import './blocks.css';

// :::split
// 두 개의 블록을 좌우로 나란히 배치
// left-type: kpi | strategy | panel | stat-dark   (왼쪽 블록 스타일)
// right-type: panel | steps              (오른쪽 블록 스타일)
//
// 실제로는 split 안에 두 개의 하위 items를 넘기는 방식 대신
// left-* / right-* prefix 속성으로 각각 설정
//
// :::split
// left-header: 부산대-경북대 인공지능 공동학과
// left-sub: Joint AI Department · 전국 최초
// left-dark: true
// left-items: value:68명|label:부산대학교|desc:... ; value:60명|...
// right-header: 융합교육 혁신 4방향
// right-sub: Convergence Strategy
// right-items: num:①|title:...|desc:... ; ...

function parseItems(str) {
  if (!str) return [];
  if (Array.isArray(str)) return str;
  if (typeof str === 'string') {
    try {
      const t = str.trim();
      if (t.startsWith('[')) return JSON.parse(t);
      const bytes = Uint8Array.from(atob(t), c => c.charCodeAt(0));
      return JSON.parse(new TextDecoder().decode(bytes));
    } catch { return []; }
  }
  return [];
}

export default function SplitSection(props) {
  const leftItems = parseItems(props['left-items'] || props.leftItems);
  const rightItems = parseItems(props['right-items'] || props.rightItems);
  const leftHeader = props['left-header'] || props.leftHeader;
  const leftSub = props['left-sub'] || props.leftSub;
  const leftDark = props['left-dark'] === 'true' || props['left-dark'] === true || props.leftDark;
  const rightHeader = props['right-header'] || props.rightHeader;
  const rightSub = props['right-sub'] || props.rightSub;

  return (
    <div className="bb-split-wrap">
      {/* 왼쪽: 다크 통계 패널 */}
      <div className="bb-split-left">
        {leftDark ? (
          <div className="bb-split-dark-panel">
            {leftSub && <div className="bb-split-dark-sup">{leftSub}</div>}
            {leftHeader && <div className="bb-split-dark-title">{leftHeader}</div>}
            <div className="bb-split-stat-grid" style={{ gridTemplateColumns: `repeat(${Math.min(leftItems.length, 3)}, 1fr)` }}>
              {leftItems.map((item, i) => (
                <div key={i} className="bb-split-stat-cell">
                  {item.label && <div className="bb-split-stat-label">{item.label}</div>}
                  {item.value && <div className="bb-split-stat-value">{item.value}</div>}
                  {item.desc && <div className="bb-split-stat-desc">{item.desc}</div>}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bb-split-light-panel">
            {leftSub && <div className="bb-split-light-sup">{leftSub}</div>}
            {leftHeader && <div className="bb-split-light-title">{leftHeader}</div>}
            <div className="bb-split-list">
              {leftItems.map((item, i) => (
                <div key={i} className="bb-split-list-item">
                  {item.num && <div className="bb-split-list-num">{item.num}</div>}
                  <div>
                    {item.title && <div className="bb-split-list-title">{item.title}</div>}
                    {item.desc && <div className="bb-split-list-desc">{item.desc}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 오른쪽: 라이트 목록 패널 */}
      <div className="bb-split-right">
        <div className="bb-split-light-panel">
          {rightSub && <div className="bb-split-light-sup">{rightSub}</div>}
          {rightHeader && <div className="bb-split-light-title">{rightHeader}</div>}
          <div className="bb-split-list">
            {rightItems.map((item, i) => (
              <div key={i} className="bb-split-list-item">
                {item.num && <div className="bb-split-list-num">{item.num}</div>}
                <div>
                  {item.title && <div className="bb-split-list-title">{item.title}</div>}
                  {item.desc && <div className="bb-split-list-desc">{item.desc}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
