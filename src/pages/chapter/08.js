import React from 'react';
import ChapterLayout from './ChapterLayout';
import {
  HeroSection,
  CardsSection,
  ChapterHeaderSection,
  StatsSection,
  CTASection,
} from '@site/src/components/BrochureBlocks';

const DEPT_STATS = [
  { label: '컴퓨터공학전공', value: '84명', sub: '정보컴퓨터공학부 — 소프트웨어 설계·개발 전문' },
  { label: '인공지능전공', value: '60명', sub: '의생명융합공학부 — 부산대·경북대 공동학과' },
  { label: '데이터사이언스전공', value: '44명', sub: '의생명융합공학부 — 빅데이터·통계 전문' },
  { label: '첨단 IT 자율전공', value: '전공배정 시 선택', sub: '자율전공 입학 후 전공 배정 선택 가능' },
];

const ADMISSION_ITEMS = [
  { title: '학생부교과전형', description: '학생부 교과 80% + 학업역량평가 20%. 지역 인재 우선 선발. 수능 최저 기준 적용', icon: '📋' },
  { title: '학생부종합전형', description: '서류 종합평가. 지역인재·저소득층·사회배려자·농어촌·특성화고 유형 별도 운영. 수능 최저 미적용', icon: '📁' },
  { title: '논술전형', description: '논술 70% + 학생부 교과 30%. 이공계 논술 시험. 수능 최저 기준 적용', icon: '✏️' },
  { title: '정시(수능)', description: '수능 100% 반영 (가군·나군). 수능 성적 중심 선발. 군별 모집단위 분리 운영', icon: '📊' },
];

const INFRA_ITEMS = [
  { label: 'IT관 (AI·SW 전용)', value: '준공 완료', sub: '2025년 10월 준공 · AI·SW학과 전용 최신 교육시설' },
  { label: '경암공학관', value: '준공 완료', sub: '2023년 10월 준공 · 연구·실습 복합 시설' },
  { label: '총 전용 면적', value: '21,302㎡', sub: '두 건물 합산 — 국내 최대 규모 AI·SW 전용 캠퍼스' },
  { label: 'PNU DevCloud', value: '운영 중', sub: '8개 특화트랙 전용 클라우드 실습 인프라' },
];

export default function Chapter08() {
  return (
    <ChapterLayout chapterNum="08" title="대학 일반 현황" description="2026학년도 AI·SW학과 모집 정원 및 입학전형 안내">
      <HeroSection
        badge="CHAPTER 08 · 일반현황"
        title="2026학년도 AI·SW학과 모집 정원 및 입학전형"
        description="부산대학교 정보컴퓨터공학부·의생명융합공학부·자율전공의 2026학년도 모집 정원과 전형 방법을 안내합니다."
      />

      <ChapterHeaderSection chapter="01" label="2026 Admission" title="2026학년도 AI·SW학과 모집 정원" subtitle="정보컴퓨터공학부 · 의생명융합공학부 · 자율전공" />
      <StatsSection
        title="전공별 모집 정원"
        subtitle="2026 ADMISSION QUOTA"
        items={DEPT_STATS}
      />

      <ChapterHeaderSection chapter="02" label="Admission Types" title="입학전형 유형" subtitle="Selection Methods" />
      <CardsSection
        title="2026학년도 주요 입학전형"
        subtitle="ADMISSION METHODS"
        columns="4"
        variant="elevated"
        items={ADMISSION_ITEMS}
      />

      <ChapterHeaderSection chapter="03" label="Campus Infrastructure" title="AI·SW 전용 교육 인프라" subtitle="Campus Facilities" />
      <StatsSection
        title="전용 시설 및 인프라 현황"
        subtitle="CAMPUS INFRASTRUCTURE"
        items={INFRA_ITEMS}
      />

      <CTASection
        title="미래 인재와 함께 성장하는 산학 파트너가 되십시오"
        description="PNU DevCloud 인프라와 8대 특화 트랙의 우수 인재들이 귀사의 기술 혁신과 성장을 실질적으로 지원합니다."
        buttonText="산학협력 문의하기"
        buttonLink="https://pnuai.github.io"
      />
    </ChapterLayout>
  );
}
