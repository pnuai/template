import React from 'react';
import ChapterLayout from './ChapterLayout';
import {
  HeroSection,
  CardsSection,
  ChapterHeaderSection,
  StatsSection,
  ChaptersSection,
} from '@site/src/components/BrochureBlocks';

const FUSION_STATS = [
  { label: 'SW+X 융합트랙', value: '14개', sub: '인문·사회·이공·예체능 전 학문 분야 연계' },
  { label: '융합마이크로디그리', value: '5개', sub: '2026년 2학기 전면 개설 예정' },
  { label: '전교생 기초교육', value: '필수 3학점', sub: 'AI·SW기초 1과목 전교생 의무 이수' },
  { label: '비전공자 수강생', value: '2만+명', sub: '매 학기 전 학문 분야 학생 참여' },
];

const TRACK_14_ITEMS = [
  { category: '공과대학', title: '스마트제조 AI', description: '제조공정 AI 최적화, 스마트팩토리 시스템 설계' },
  { category: '의과대학', title: '의료 AI·빅데이터', description: '임상 데이터 분석, 의료영상 AI, 디지털헬스케어' },
  { category: '사범대학', title: 'AI 교육테크', description: 'AI 기반 맞춤형 교육 설계, 에듀테크 콘텐츠 개발' },
  { category: '경영대학', title: '비즈니스 데이터사이언스', description: '경영 데이터 분석, AI 마케팅, 디지털 전환 전략' },
  { category: '사회과학대학', title: '사회데이터 분석', description: '공공데이터 활용, 사회현상 AI 분석, 정책 데이터' },
  { category: '예술대학', title: '디지털 아트&크리에이티브', description: 'AI 생성예술, 인터랙티브 미디어, 디지털 창작' },
  { category: '인문대학', title: '디지털 인문학', description: '텍스트 마이닝, 문화유산 디지털화, 언어 AI 활용' },
  { category: '자연과학대학', title: '계산과학 AI', description: '시뮬레이션 AI, 바이오인포매틱스, 과학데이터 분석' },
];

const EDU_TYPE_ITEMS = [
  { title: '연계전공', description: 'AI·SW 관련 학과와 타 학과 간 연계전공 운영. 복수의 학과에서 이수학점 조합. 융합 학위 취득 가능', icon: '🔗' },
  { title: '융합트랙', description: '단과대학별 특화 SW+X 융합트랙 14개 운영. 트랙 이수 시 수료증 발급. 취업 포트폴리오 반영', icon: '🛤️' },
  { title: '마이크로디그리', description: '15학점 내외 단기 집중 과정. 2026년 2학기 5개 개설. 재직자·일반인도 수강 가능한 개방형 운영', icon: '🏅' },
  { title: '기초 필수 이수', description: '전교생 AI·SW기초 1과목(3학점) 필수 이수. 전공별 맞춤 기초 과정 다양화. 수준별 선택 수강 체계', icon: '📗' },
];

export default function Chapter06() {
  return (
    <ChapterLayout chapterNum="06" title="AI·SW융합교육 및 비전공자 전문교육 확대" description="전 학문 분야를 아우르는 14개 SW+X 융합트랙과 전교생 AI·SW 기초교육">
      <HeroSection
        badge="CHAPTER 06 · 융합교육"
        title="전 학문 분야와 AI·SW를 잇는 14개 SW+X 융합트랙"
        description="인문·사회·의학·예술 등 모든 전공에 AI·SW 역량을 접목합니다. 전교생 2만여 명 필수 AI·SW기초 교육과 5개 융합마이크로디그리로 진정한 융합 인재를 양성합니다."
      />

      <StatsSection
        title="융합교육 핵심 지표"
        subtitle="CONVERGENCE EDUCATION KPI"
        items={FUSION_STATS}
      />

      <ChapterHeaderSection chapter="01" label="14 SW+X Tracks" title="14개 SW+X 융합트랙" subtitle="Cross-disciplinary Tracks" />
      <ChaptersSection
        title="단과대학별 SW+X 융합트랙"
        subtitle="14 CONVERGENCE TRACKS"
        columns="4"
        items={TRACK_14_ITEMS}
      />

      <ChapterHeaderSection chapter="02" label="Education Types" title="AI·SW 융합교육 유형" subtitle="Learning Pathways" />
      <CardsSection
        title="융합교육 이수 유형"
        subtitle="EDUCATION PATHWAYS"
        columns="4"
        variant="elevated"
        items={EDU_TYPE_ITEMS}
      />
    </ChapterLayout>
  );
}
