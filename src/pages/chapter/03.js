import React from 'react';
import ChapterLayout from './ChapterLayout';
import {
  HeroSection,
  CardsSection,
  ChapterHeaderSection,
  StatsSection,
} from '@site/src/components/BrochureBlocks';

const PILLAR_ITEMS = [
  { title: 'AI·SW학과 정원 증원', description: '대학 중장기 발전계획 상 대표 특성화 분야 지정. 컴퓨터공학전공 80명 / 인공지능전공 68명 / 데이터사이언스전공 44명 — 총 192명', icon: '🎓' },
  { title: '학사 조직·제도 개편', description: '인공지능전공 신설 및 경북대와 공동학과 운영. 8개 SW 특화 트랙 신설. 산업체 참여 교과과정혁신위원회 및 트랙운영위원회 설치', icon: '🏛️' },
  { title: '글로벌 표준 교육혁신모델', description: 'AI·SW 전공교육 혁신모델 SMART-PNU 수립. ACM/IEEE CS2013, CE2016, CC2020 기반 PNU-SW2023 교육과정 체계화', icon: '🤖' },
  { title: '전공 교육 운영·지원 강화', description: '산업체 전문가 주도 교과과정혁신위원회 구성·운영. 트랙별 트랙운영위원회 운영. 교과과정 개편·산학협력 일원화 체계 구축', icon: '⚙️' },
];

const TRACK_ITEMS = [
  { title: '클라우드', description: '클라우드 시장 연 18% 성장. 2030년 기준 약 80만 명 신규 일자리 창출 전망', icon: '☁️' },
  { title: '융합보안', description: '차세대 보안 세계시장 연평균 15.33% 성장, 2026년 시장규모 2.3배 이상 확대', icon: '🔒' },
  { title: '지능형IoT', description: '미래자동차·IoT가전·디지털헬스케어 등 5개 신산업 분야 1만 명 이상 산업인력 부족', icon: '📡' },
  { title: '메타버스', description: '가트너 선정 2023년 10대 ICT 전략기술. 디지털 대전환 대표 기술로 전세계적 주목', icon: '🌐' },
  { title: '생성AI', description: '자연어 처리·이미지·영상 생성 등 핵심 역할. 글로벌 시장 연평균 20% 이상 성장 예상', icon: '✨' },
  { title: '인공지능응용', description: '의료 포함 전 산업으로 확산. 글로벌 시장 2030년까지 연평균 30% 이상 성장 전망', icon: '🧠' },
  { title: '의생명빅데이터통계', description: '보건·의료 데이터산업 시장 2023년 약 6,407억 원. 맞춤형 진단·예측 서비스 수요 확대', icon: '🏥' },
  { title: '디자인테크', description: 'XR·UI/UX·디지털 트윈 등 신기술 활용 확대. 디자인과 디지털 기술의 융합 혁신 주도', icon: '🎨' },
];

const JOINT_STATS = [
  { label: '부산대학교', value: '68명', sub: 'AI Software 특화 교과목 주관 · 교육부 증원 포함' },
  { label: '경북대학교', value: '60명', sub: 'AI Hardware 특화 교과목 주관 · 교육부 증원 포함' },
  { label: '총 정원', value: '128명', sub: '전국 최초 인공지능 공동학과 — 교원·교육시설 공유 운영' },
];

const FUSION_ITEMS = [
  { title: '융합교육체계 다변화', description: 'AI·SW융합트랙(14개), 융합마이크로디그리(5개) 추가. 신기술 분야 융합 교과목 확대. 수요·수준별 다양한 융합 교육 과정 마련', icon: '①' },
  { title: '융합 범위 확장', description: '이공계 중심에서 인문·사회 포함 전 분야로 융합 범위 확장. 다양한 학문 분야를 수용하는 SW 융합다전공 교육체계 마련', icon: '②' },
  { title: '능동적 양방향 융합교육', description: '비AI·SW학과 주관의 융합교육과정 도입. In-Bound형(자과 학생 대상) + Out-Bound형(타과 학생 대상) 융합 교육 운영', icon: '③' },
  { title: '대학융합교육 총괄체계', description: 'AI융합교육원 설립 — 융합 교육과정 및 교과목 개설 권한 부여. 융합교육위원회·융합교육부 전담 조직 구성', icon: '④' },
];

export default function Chapter03() {
  return (
    <ChapterLayout chapterNum="03" title="대학의 자율적인 교육혁신" description="AI·SW 전공 및 융합 교육체계 도입 — 특성화·전문화를 위한 학사 조직과 제도 개편">
      <HeroSection
        badge="CHAPTER 03 · 교육혁신"
        title="대학 자율의 AI·SW 전공 및 융합 교육체계 도입"
        description="특성화·전문화를 위한 학사 조직과 제도 개편, 글로벌 표준 반영 AI·SW 교육혁신모델 수립, 융합교육체계 다변화를 추진합니다."
        buttonText="8개 특화 트랙 →"
        buttonLink="/chapter/03"
      />

      <ChapterHeaderSection chapter="01" label="4 Strategic Pillars" title="4대 추진 방향" subtitle="Key Directions" />
      <CardsSection
        title="4대 추진 방향"
        subtitle="STRATEGIC PILLARS"
        columns="4"
        variant="elevated"
        items={PILLAR_ITEMS}
      />

      <ChapterHeaderSection chapter="02" label="AI·SW Specialized Tracks" title="8개 AI·SW 전공 특화 트랙" subtitle="Specialized Curriculum Tracks" />
      <CardsSection
        title="8개 전공 특화 트랙"
        subtitle="SPECIALIZED TRACKS"
        columns="4"
        variant="elevated"
        items={TRACK_ITEMS}
      />

      <ChapterHeaderSection chapter="03" label="Joint Department" title="부산대–경북대 인공지능 공동학과" subtitle="전국 최초" />
      <StatsSection
        title="인공지능 공동학과 현황"
        subtitle="JOINT AI DEPARTMENT"
        items={JOINT_STATS}
      />

      <ChapterHeaderSection chapter="04" label="Convergence Education" title="융합교육 혁신 4방향" subtitle="Convergence Strategy" />
      <CardsSection
        title="융합교육 혁신 4방향"
        subtitle="CONVERGENCE EDUCATION"
        columns="4"
        variant="elevated"
        items={FUSION_ITEMS}
      />
    </ChapterLayout>
  );
}
