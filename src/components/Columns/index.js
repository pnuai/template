import React from 'react';

/**
 * 멀티컬럼 레이아웃 컴포넌트
 *
 * 사용법:
 * <Columns>
 *   <Col>왼쪽 내용</Col>
 *   <Col>오른쪽 내용</Col>
 * </Columns>
 *
 * 3컬럼:
 * <Columns cols={3}>
 *   <Col>1</Col><Col>2</Col><Col>3</Col>
 * </Columns>
 */
export default function Columns({ children, gap = '32px' }) {
  const validChildren = React.Children.toArray(children)
    .filter(child => {
      if (typeof child === 'string') {
        return child.trim() !== '';
      }
      return true;
    });

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap', // 모바일에서 세로로 쌓이게 함
        gap,
        margin: '2.5rem 0',
        alignItems: 'stretch',
      }}
    >
      {validChildren.map((child, index) => {
        if (!child) return null;
        return (
          <div 
            key={index}
            style={{ 
              flex: '1 1 300px', // 최소 300px 확보 후 남은 공간 채움
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function Col({ children, style = {} }) {
  return <div style={style}>{children}</div>;
}
