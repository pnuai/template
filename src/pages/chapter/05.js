import React from 'react';
import ChapterLayout from './ChapterLayout';
import {
  HeroSection,
  CardsSection,
  ChapterHeaderSection,
  StatsSection,
} from '@site/src/components/BrochureBlocks';

const TRACK_DETAIL_ITEMS = [
  { title: '클라우드', description: 'AWS·Azure·GCP 멀티클라우드 아키텍처, Kubernetes 컨테이너 오케스트레이션, MSA 설계, CI/CD 파이프라인 실무', icon: '☁️' },
  { title: '융합보안', description: '제로트러스트 아키텍처(ZTA), 클라우드 사이버 위협 탐지·대응, 대칭·비대칭 암호화, 침해사고 분석', icon: '🔒' },
  { title: '지능형IoT', description: '산업용 실시간 센서 제어, 엣지 클라우드 연동, 임베디드 RTOS 최적화, 스마트팩토리 구현', icon: '📡' },
  { title: '메타버스', description: 'Unity·Unreal 기반 실시간 렌더링, XR/VR/AR 플랫폼, 3D 데이터 시각화, 메타버스 가상 상호작용', icon: '🌐' },
  { title: '생성AI', description: '초거대 언어모델(LLM) 프롬프트 엔지니어링, 멀티모달 딥러닝 아키텍처, 자연어 처리(NLP) 실무 설계', icon: '✨' },
  { title: '인공지능응용', description: '대규모 데이터 파이프라인 구축, 통계·ML 기반 의사결정 지원, 딥러닝 모델 최적화 및 서비스 배포', icon: '🧠' },
  { title: '의생명빅데이터통계', description: '보건·의료 데이터 분석, 임상 통계 모델링, 맞춤형 진단·예측 시스템, 의료 AI 윤리 및 규제', icon: '🏥' },
  { title: '디자인테크', description: 'UX 데이터 분석, 디지털 프로토타이핑, 고급 인터페이스 구현, XR·UI/UX 융합 서비스 설계', icon: '🎨' },
];

const INDUSTRY_ITEMS = [
  { title: '기업주도 캡스톤 PBL', description: '산업체 실제 문제를 해결하는 프로젝트 기반 학습 의무화. 기업 멘토 직접 참여. 결과물 채용 연계', icon: '🏭' },
  { title: '채용연계형 인턴십', description: '50+ 동남권 거점 IT 선도 기업 연계. 3개월 이상 중장기 인턴십. 인턴 후 정규직 전환 트랙 운영', icon: '👔' },
  { title: '해커톤·경진대회', description: '학점연계 해커톤 문제해결대회 운영. 산업체 시상 및 채용 직결. 전국 규모 AI·SW 경진대회 연계', icon: '🏆' },
  { title: '학·석사 연계과정', description: '우수 학부생 조기 대학원 진학 지원. 산학협력 기반 고급 AI·SW 인재 양성 패스트트랙. 연구비 지원', icon: '📚' },
];

const KPI_ITEMS = [
  { label: '전공 특화 트랙', value: '8개', sub: '클라우드·보안·IoT·메타버스·생성AI·AI응용·의생명·디자인테크' },
  { label: '트랙운영위원회', value: '8개', sub: '트랙별 산업체 전문가 참여 — 교과과정 개편·산학협력 일원화' },
  { label: '산학 연계 기업', value: '50+', sub: '동남권 거점 IT 선도 기업 채용연계형 인턴십 네트워크' },
  { label: 'PNU 코딩인증', value: '4단계', sub: '기초 → 융합 → 전공 → 심화 단계별 역량 인증 체계' },
];

export default function Chapter05() {
  return (
    <ChapterLayout chapterNum="05" title="SW전공교육 강화" description="8개 AI·SW 전공 특화 트랙과 산학협력 교육·취업 플랫폼">
      <HeroSection
        badge="CHAPTER 05 · 전공교육"
        title="산업 수요 직결 8개 AI·SW 전공 특화 트랙"
        description="클라우드·융합보안·지능형IoT·메타버스·생성AI·인공지능응용·의생명빅데이터통계·디자인테크 — 동남권 디지털 대전환을 이끌 전문 인재를 체계적으로 양성합니다."
      />

      <StatsSection
        title="전공교육 핵심 지표"
        subtitle="KEY PERFORMANCE INDICATORS"
        items={KPI_ITEMS}
      />

      <ChapterHeaderSection chapter="01" label="8 Specialized Tracks" title="8개 전공 특화 트랙 상세" subtitle="Track Curriculum Details" />
      <CardsSection
        title="트랙별 핵심 교육과정"
        subtitle="TRACK CURRICULUM"
        columns="4"
        variant="elevated"
        items={TRACK_DETAIL_ITEMS}
      />

      <ChapterHeaderSection chapter="02" label="Industry Collaboration" title="산학협력 교육·취업 플랫폼" subtitle="Industry Partnership" />
      <CardsSection
        title="산학협력 교육 플랫폼"
        subtitle="INDUSTRY COLLABORATION"
        columns="4"
        variant="elevated"
        items={INDUSTRY_ITEMS}
      />
    </ChapterLayout>
  );
}
