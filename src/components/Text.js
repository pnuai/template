import React from 'react';

/**
 * 자유로운 텍스트 스타일링을 위한 컴포넌트
 * 
 * 사용법:
 * <Text size="24px" weight="800" color="red">강조 텍스트</Text>
 * <Text size="2rem">큼직한 텍스트</Text>
 */
export default function Text({ 
  children, 
  size, 
  weight, 
  color, 
  family,
  display = 'inline-block',
  style = {} 
}) {
  // 숫자가 들어오면 px를 자동으로 붙여줌 (비전공자 배려)
  const fontSize = typeof size === 'number' || (typeof size === 'string' && !isNaN(size)) 
    ? `${size}px` 
    : size;

  // 폰트 패밀리 매핑
  const fontFamilies = {
    noto: 'var(--font-noto)',
    pretendard: 'var(--font-pretendard)',
    gmarket: 'var(--font-gmarket)',
    nanum: 'var(--font-nanum)',
  };

  return (
    <span
      style={{
        fontSize: fontSize,
        fontWeight: weight,
        color: color,
        fontFamily: fontFamilies[family] || family, // 매핑된 이름이 없으면 입력값 그대로 사용
        display: display,
        lineHeight: '1.4',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
