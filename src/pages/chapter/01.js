import React from 'react';
import ChapterLayout from './ChapterLayout';
import {
  HeroSection,
  StatsSection,
  CardsSection,
  ChapterHeaderSection,
  BadgesSection,
} from '@site/src/components/BrochureBlocks';
import styles from './chapter.module.css';

const HERO_STATS = [
  { label: 'SW학과 정원', value: '192명', sub: '2019년 대비 43% 순증 · 교육부 승인' },
  { label: '전공 특화 트랙', value: '8개', sub: '클라우드·보안·IoT·메타버스·생성AI 등' },
  { label: 'SW-X 융합트랙', value: '14개', sub: '전 학문 분야 융합 교과목 운영' },
  { label: '동남권 AI·SW', value: '거점 1위', sub: '국립대학 최초 SW중심대학 선정' },
];

const MISSION_ITEMS = [
  { title: 'AI·SW 전문인력 양성', description: '이론과 실무를 겸비한 AI·SW 전문 교육으로 현장에서 즉각 활약할 수 있는 실무형 인재 양성', icon: '🎯' },
  { title: 'AI·SW 특화교육환경 구축', description: '신기술 분야 학습을 위한 교육 인프라 구축 (DevCloud, AI Platform, 전용 건물 신축)', icon: '🏗️' },
  { title: '실효성 있는 산학협력', description: '산학협력 프로젝트, 채용연계형 인턴십을 통해 실제 산업현장에 적용할 수 있는 AI·SW 역량 교육', icon: '🤝' },
  { title: 'AI·SW 가치확산', description: '공교육 내 AI·SW 교육 강화, 지역 소외계층과 미취업자·일반인을 위한 맞춤형 프로그램 운영', icon: '🌏' },
  { title: 'AI·SW 인력양성 저변 확대', description: '인문·사회 등 타 전공별 특성을 반영한 AI·SW기초 교육 의무화 및 융합과정 활성화', icon: '📐' },
];

const STRATEGY_ITEMS = [
  { title: 'Customized Education', description: '신기술 반영 교육과정 기반 맞춤형 교육혁신', icon: 'C' },
  { title: 'Convergence Research', description: '미래지향적 융합 연구 및 성과 창출', icon: 'C' },
  { title: 'Cooperative Industry-Univ.', description: '소통·관계 중심 융합 산학협력 네트워크 강화 / 현장 문제 공동해결', icon: 'C' },
  { title: 'Connected Regional Community', description: 'SW가치확산 지역거점 / AI·SW가치확산 중심 허브 구축', icon: 'C' },
];

const TALENT_ITEMS = [
  { letter: 'S', label: '문제해결형 혁신인재', sub: 'Software' },
  { letter: 'M', label: '미래지향적 혁신인재', sub: 'Medoid' },
  { letter: 'A', label: '자기주도형 혁신인재', sub: 'AIMCSD' },
  { letter: 'R', label: '지역 혁신인재', sub: 'Region' },
  { letter: 'T', label: '융합형 혁신인재', sub: 'Top' },
  { letter: 'P', label: '협동형 혁신인재', sub: 'Pioneer' },
  { letter: 'N', label: '글로컬 혁신인재', sub: 'Network' },
  { letter: 'U', label: '균형잡힌 혁신인재', sub: 'Universe' },
];

const SUPPORT_ITEMS = [
  { label: 'SW학과 정원 증원', value: '+43.3%', sub: '2019년 134명 → 2023년 192명 (58명 증원)' },
  { label: '전용 건물 신축', value: '21,302㎡', sub: 'AI·SW학과 전용 IT관·경암공학관 2개 신축' },
  { label: '인공지능 공동학과', value: '전국 최초', sub: '부산대–경북대 인공지능 공동학과 신설' },
  { label: '컨트롤타워', value: 'AI융합교육원', sub: 'AI·SW 인재양성 전담 컨트롤타워 운영' },
];

export default function Chapter01() {
  return (
    <ChapterLayout chapterNum="01" title="대학 소개 및 운영 방향" description="진정한 AI·SW 가치확산을 실현하는 부산대학교 SW중심대학">
      <HeroSection
        badge="CHAPTER 01 · 사업소개"
        title="진정한 AI·SW 가치확산을 실현하는 부산대학교 SW중심대학"
        description="대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화하고, 진정한 Software 가치의 확산을 실현하는 동남권 거점 국립대학입니다."
        buttonText="8대 특화 트랙 보기 →"
        buttonLink="/chapter/03"
      />

      <StatsSection
        title="핵심 현황"
        subtitle="KEY FIGURES"
        items={HERO_STATS}
      />

      <ChapterHeaderSection chapter="01" label="Core Education Mission" title="핵심 교육 미션" subtitle="5 Strategic Pillars" />
      <CardsSection
        title="5대 핵심 교육 미션"
        subtitle="CORE MISSION"
        columns="3"
        variant="elevated"
        items={MISSION_ITEMS}
      />

      <ChapterHeaderSection chapter="02" label="4C Strategy" title="4C 추진전략" subtitle="Strategic Framework" />
      <CardsSection
        title="4C 추진전략"
        subtitle="STRATEGIC FRAMEWORK"
        columns="4"
        variant="accent"
        items={STRATEGY_ITEMS}
      />

      <ChapterHeaderSection chapter="03" label="SMARTPNU Talent Model" title="8대 인재상 SMARTPNU" subtitle="Talent Identity" />
      <BadgesSection
        title="SMARTPNU — 8가지 인재상"
        subtitle="TALENT MODEL"
        items={TALENT_ITEMS}
      />

      <ChapterHeaderSection chapter="04" label="University Support" title="대학의 지원 의지" subtitle="Institutional Commitment" />
      <StatsSection
        title="대학의 지원 현황"
        subtitle="UNIVERSITY COMMITMENT"
        items={SUPPORT_ITEMS}
      />
    </ChapterLayout>
  );
}
