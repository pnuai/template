import React from 'react';
import ChapterLayout from './ChapterLayout';
import {
  HeroSection,
  RoadmapSection,
  TimelineSection,
  CardsSection,
  ChapterHeaderSection,
} from '@site/src/components/BrochureBlocks';

const ROADMAP_ITEMS = [
  { phase: '기반 재정비 · 2023–2024', title: 'AI·SW 교육체계 재정비', bullets: '8개 전공트랙 신설 | 부산대–경북대 인공지능 공동학과 신설 | AI융합교육원 설립 | PNU DevCloud 구축' },
  { phase: '성과 내실화 · 2025–2026', title: '맞춤형 교육 내실화 및 산학협력 활성화', bullets: 'SMART-PNU 교육혁신모델 내실화 | 오픈소스 에코시스템 기반 산학협력 선순환 체계 구축 | 융합마이크로디그리 신설' },
  { phase: '성과 공유·확산 · 2027–2028', title: '성과 분석 및 공유확산', bullets: 'PNU-ICEx AI·SW통합 교육시스템 성과 관리 | 취업연계 인턴십 성과 확산 | 공교육 연계 우수사례 발굴·확산' },
];

const ACHIEVE_ITEMS = [
  { title: '전공 교육', description: '프로그래밍 및 실습교육 강화(4학점 교과목), 산업체 수요 맞춤형 프로젝트 교과목 신설, 학·석사·박사 연계과정 운영, PNU-ICEx SW 통합교육 시스템 구축', icon: '🎓' },
  { title: '산학 협력', description: '카카오테크캠퍼스 기업주도 교육 운영, AI·SW전공생 문제해결형 산학협력 프로젝트 의무화, 학점연계 인턴십-산학교류회-창업 해커톤', icon: '🤝' },
  { title: '기초·융합 교육', description: '전교생 AI·SW기초교육 의무화(1과목 3학점), AI·SW융합교육과정 다양화(융합연계전공·융합트랙·마이크로디그리 신설)', icon: '💡' },
  { title: '가치 확산', description: '지자체-지역교육청 공교육 협력 체계 구축, AI선도학교 멘토링, 중학교 자유학기제 교육 콘텐츠 및 전문 강사 지원', icon: '🌏' },
];

const ORG_ITEMS = [
  { title: '기초교육부', description: 'AI기본교육 전략수립 · AI기초교육과정 운영 · AI기초교육 비교과과정 운영 · 교육콘텐츠 공동개발', icon: '📚' },
  { title: '전공교육부', description: 'AI대학 연계 및 인프라 구축 · 전공특화트랙 및 부트캠프 운영 · AI교육과정혁신위원회 · 글로벌 표준 교육과정 연구', icon: '🎓' },
  { title: '융합교육부', description: 'AI융합연계전공 운영 · AI융합트랙 및 융합전공 운영 · AI융합마이크로디그리 운영 · 개방형 온라인과정 운영', icon: '🔗' },
  { title: '산학협력부', description: '산학협력프로젝트·인턴십 운영 · 기업주도 교육과정 운영 · 해외교육프로그램 운영 · 창업교육 지원', icon: '🏭' },
  { title: '가치확산부', description: '교내 대상별 AI기본교육지원 · 초중고 AI역량강화 교육 · 고교-대학연계프로그램 운영 · 타 대학과의 AI교육 협력', icon: '🌐' },
  { title: '행정실', description: '교내 협력업무 · 외부기관 협력업무 · 예산편성 및 결산 · 인사, 시설 및 장비관리', icon: '⚙️' },
];

export default function Chapter02() {
  return (
    <ChapterLayout chapterNum="02" title="교육목표 및 혁신노력" description="동남권 디지털 대전환을 이끄는 SMART 인재 양성 플랫폼">
      <HeroSection
        badge="CHAPTER 02 · 교육목표"
        title="동남권 디지털 대전환을 이끄는 SMART 인재 양성 플랫폼"
        description="AI·SW중심 대학 교육체계 개편 및 단계별 인력양성 전략 — 기반 재정비부터 글로벌 성과 확산까지 체계적으로 추진합니다."
        buttonText="추진 로드맵 보기 →"
        buttonLink="/chapter/02"
      />

      <ChapterHeaderSection chapter="01" label="3-Phase Action Plan" title="단계별 추진 로드맵" subtitle="2023 – 2028" />
      <RoadmapSection
        title="3단계 추진 로드맵"
        subtitle="THREE-PHASE ROADMAP"
        items={ROADMAP_ITEMS}
      />

      <ChapterHeaderSection chapter="02" label="Key Achievements" title="주요 성과" subtitle="Achievements Summary" />
      <CardsSection
        title="분야별 주요 성과"
        subtitle="KEY ACHIEVEMENTS"
        columns="4"
        variant="elevated"
        items={ACHIEVE_ITEMS}
      />

      <ChapterHeaderSection chapter="03" label="Organization" title="AI융합교육원 사업추진체계" subtitle="Organizational Structure" />
      <CardsSection
        title="AI융합교육원 조직 구성"
        subtitle="ORGANIZATION"
        columns="3"
        variant="elevated"
        items={ORG_ITEMS}
      />
    </ChapterLayout>
  );
}
