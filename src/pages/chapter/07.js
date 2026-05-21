import React from 'react';
import ChapterLayout from './ChapterLayout';
import {
  HeroSection,
  CardsSection,
  ChapterHeaderSection,
  StatsSection,
  RoadmapSection,
  QuoteSection,
} from '@site/src/components/BrochureBlocks';

const SPREAD_ITEMS = [
  { title: '초·중·고 연계 교육', description: '고교학점제 AI·SW 교과목 개설 운영. 중학교 자유학기제 AI 멘토링. AI선도학교 교사 역량강화 지원', icon: '🏫' },
  { title: '지역사회 가치확산', description: '정보 소외계층 맞춤형 AI·SW 교육. 미취업자·일반인 대상 디지털 리터러시 프로그램. 지자체-교육청 협력 체계 구축', icon: '🌆' },
  { title: '타 대학 성과 공유', description: '개방형 교육과정 공동 개발 및 공유. 지역 대학 간 AI·SW 혁신 네트워크 구축. 공동 콘텐츠 개발 및 OER 제공', icon: '🤝' },
  { title: '글로벌 네트워크', description: '국제 공동 R&D 네트워크 구축. 해외 우수 대학과 교육과정 협력. 오픈소스 교육 콘텐츠 글로벌 공유', icon: '🌐' },
];

const PSS_ITEMS = [
  { phase: 'STAGE 1 · 인식', title: 'AI·SW 창업 문화 확산', bullets: '창업 강연·세미나 운영 | 창업 동아리 지원 | 창업 아이디어 경진대회' },
  { phase: 'STAGE 2 · 발굴', title: '창업 아이디어 발굴·육성', bullets: '창업 멘토링 프로그램 | 아이디어 검증 워크숍 | 예비창업자 팀 빌딩 지원' },
  { phase: 'STAGE 3 · 도전', title: '프로토타입 개발 및 실증', bullets: 'PSS 랩 입주 지원 | 개발비 seed 지원 | 기술 멘토 매칭' },
  { phase: 'STAGE 4 · 성장', title: '스타트업 성장 가속화', bullets: '투자사 연계 IR 지원 | 지역 기업과 PoC 협업 | 글로벌 액셀러레이터 연계' },
  { phase: 'STAGE 5 · 확산', title: '성과 확산 및 생태계 조성', bullets: '졸업 창업기업 네트워크 | 선배 창업가 멘토링 | PSS+X 성과 전국 공유' },
];

const HIGHLIGHT_STATS = [
  { label: '공교육 연계 학교', value: '50+', sub: '초·중·고 AI·SW 교육 협력 기관' },
  { label: '창업 지원 프로그램', value: 'PSS+X', sub: '전주기적 5단계 창업 확산 전략' },
  { label: '개방형 교육과정', value: '상시 운영', sub: '재직자·일반인 대상 온라인 개방 과정' },
  { label: '지역 혁신 거점', value: '동남권 1위', sub: '부·울·경 AI·SW 가치확산 중심 허브' },
];

export default function Chapter07() {
  return (
    <ChapterLayout chapterNum="07" title="성과확산 및 인재기반 조성" description="AI·SW 저변확대, PSS+X 창업 확산, 지역사회 연계 성과 공유">
      <HeroSection
        badge="CHAPTER 07 · 성과확산"
        title="AI·SW 가치를 지역사회와 글로벌로 확산합니다"
        description="공교육 연계, 지역사회 가치확산, PSS+X 전주기 창업 지원, 타 대학 성과 공유를 통해 부산대학교 AI·SW 혁신의 가치를 동남권과 전국으로 퍼뜨립니다."
      />

      <StatsSection
        title="성과확산 핵심 지표"
        subtitle="OUTREACH KPI"
        items={HIGHLIGHT_STATS}
      />

      <ChapterHeaderSection chapter="01" label="AI·SW Value Diffusion" title="AI·SW 저변확대 추진 계획" subtitle="Value Diffusion Strategy" />
      <CardsSection
        title="연계 대상별 저변확대 전략"
        subtitle="OUTREACH STRATEGY"
        columns="4"
        variant="elevated"
        items={SPREAD_ITEMS}
      />

      <ChapterHeaderSection chapter="02" label="PSS+X Startup Program" title="전주기적 창업 확산 전략 PSS+X" subtitle="Startup Ecosystem" />
      <RoadmapSection
        title="PSS+X 5단계 창업 지원 체계"
        subtitle="STARTUP SUPPORT PIPELINE"
        items={PSS_ITEMS}
      />

      <QuoteSection
        text="부산대학교 AI융합교육원은 모든 학문 분야의 학생이 AI·SW 역량을 갖춘 융합 혁신 인재로 성장할 수 있도록, 가장 역동적인 산학 연계형 교육 생태계를 제공할 것을 약속합니다."
        author="부산대학교 AI융합교육원 운영위원회"
        role="PNU AI Convergence Education Center · Leadership Council"
        accent="true"
      />
    </ChapterLayout>
  );
}
