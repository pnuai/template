---
id: template
title: 브로슈어 블록 작성 가이드 — 전체 디렉티브 참조서
sidebar_position: 99
nav_label: 템플릿
theme: public-blue
hide_title: true
---

:::hero
badge: 📋 TEMPLATE GUIDE
title: 브로슈어 블록 작성 가이드
description: 모든 ::: 블록의 사용법과 라이브 예시를 한 곳에서 확인하세요. JSX 없이 ::: 문법만으로 모든 레이아웃을 만들 수 있습니다.
:::

---

## 핵심 규칙

- 모든 블록은 `:::블록이름` 으로 시작하고 `:::` 으로 끝납니다
- 속성은 `key: 값` 형태로 적습니다
- 목록 항목은 `-` 로 시작하며, 하위 속성은 2칸 들여쓰기합니다
- 항목 내 여러 값은 `|` 파이프로 구분합니다 (items 필드)
- 큰따옴표(`"`), 꺾쇠(`<>`)는 속성값에 넣지 마세요
- 숫자 특수기호(①②③)는 반드시 따옴표로 감쌉니다: `"①"`

---

## ① hero — 상단 히어로 배너

페이지 맨 위에 반드시 배치합니다. 파란 그라데이션 배경에 뱃지·제목·설명이 표시됩니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| badge | 권장 | 챕터 번호·카테고리 레이블 |
| title | 필수 | 크게 표시되는 메인 제목 |
| description | 권장 | 부제목 설명 (1~2문장) |

```
:::hero
badge: CHAPTER 01 · 사업소개
title: 진정한 AI·SW 가치확산을 실현하는 부산대학교 SW중심대학
description: 대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화합니다.
:::
```

:::hero
badge: CHAPTER 01 · 사업소개
title: 진정한 AI·SW 가치확산을 실현하는 부산대학교 SW중심대학
description: 대학교육을 SW중심으로 혁신함으로써 학생·기업·사회의 Software 경쟁력을 강화합니다.
:::

---

## ② kpi — 핵심 지표 가로 나열

숫자·통계를 가로로 나란히 보여줍니다. 큰 숫자가 강조됩니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| subtitle | 선택 | 영문 소제목 |
| title | 선택 | 한글 제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| label | 지표 이름 |
| value | 숫자/값 (크게 표시) |
| sub | 보조 설명 |

```
:::kpi
subtitle: Key Figures
title: 핵심 현황

- label: SW학과 정원
  value: 192명
  sub: 2019년 대비 43% 순증

- label: 전공 특화 트랙
  value: 8개
  sub: 클라우드·보안·IoT 등

- label: 동남권 AI·SW
  value: 거점 1위
  sub: 국립대학 최초 SW중심대학 선정
:::
```

:::kpi
subtitle: Key Figures
title: 핵심 현황

- label: SW학과 정원
  value: 192명
  sub: 2019년 대비 43% 순증

- label: 전공 특화 트랙
  value: 8개
  sub: 클라우드·보안·IoT 등

- label: 동남권 AI·SW
  value: 거점 1위
  sub: 국립대학 최초 SW중심대학 선정
:::

---

## ③ stats — 통계 카드 그리드

kpi와 비슷하지만 카드 형태로 배치됩니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| label | 지표 이름 |
| value | 숫자/값 |
| sub | 보조 설명 |

```
:::stats
title: 주요 성과 지표
subtitle: KEY PERFORMANCE INDICATORS

- label: 졸업생 취업률
  value: 89.3%
  sub: 전국 상위 5% 수준

- label: 산학협력 기업
  value: 247개사
  sub: 부울경 기반 주요 ICT 기업

- label: 교육 수혜 학생
  value: 12,400명
  sub: 누적 기준 2023년
:::
```

:::stats
title: 주요 성과 지표
subtitle: KEY PERFORMANCE INDICATORS

- label: 졸업생 취업률
  value: 89.3%
  sub: 전국 상위 5% 수준

- label: 산학협력 기업
  value: 247개사
  sub: 부울경 기반 주요 ICT 기업

- label: 교육 수혜 학생
  value: 12,400명
  sub: 누적 기준 2023년
:::

---

## ④ cards — 카드 그리드

아이콘+제목+설명 카드를 그리드로 배치합니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| title | 선택 | 섹션 제목 |
| subtitle | 선택 | 영문 소제목 |
| columns | 선택 | 열 수 (2~4, 기본 3) |
| variant | 선택 | `elevated` (그림자), `outlined` (테두리) |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| icon | 이모지 아이콘 |
| title | 카드 제목 |
| description | 카드 설명 |

```
:::cards
title: 5대 핵심 교육 미션
subtitle: CORE EDUCATION MISSION
columns: 3
variant: elevated

- title: AI·SW 전문인력 양성
  description: 이론과 실무를 겸비한 AI·SW 전문 교육으로 실무형 인재 양성
  icon: 🎯

- title: 실효성 있는 산학협력
  description: 산학협력 프로젝트, 채용연계형 인턴십을 통한 실무 역량 교육
  icon: 🤝

- title: AI·SW 가치확산
  description: 공교육 내 AI·SW 교육 강화, 맞춤형 프로그램 운영
  icon: 🌏
:::
```

:::cards
title: 5대 핵심 교육 미션
subtitle: CORE EDUCATION MISSION
columns: 3
variant: elevated

- title: AI·SW 전문인력 양성
  description: 이론과 실무를 겸비한 AI·SW 전문 교육으로 실무형 인재 양성
  icon: 🎯

- title: 실효성 있는 산학협력
  description: 산학협력 프로젝트, 채용연계형 인턴십을 통한 실무 역량 교육
  icon: 🤝

- title: AI·SW 가치확산
  description: 공교육 내 AI·SW 교육 강화, 맞춤형 프로그램 운영
  icon: 🌏
:::

---

## ⑤ panel — 아이콘+제목+목록 패널

파란 헤더바 아래 그리드로 나열합니다. 두 가지 스타일로 사용 가능합니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| header | 필수 | 상단 헤더 제목 |
| headersub | 선택 | 헤더 영문 부제목 |
| columns | 선택 | 열 수 (2~4, 기본 3) |

**항목 속성 — 목록형 (`items`):**
```
:::panel
header: AI융합교육원 사업추진체계
headersub: Organization
columns: 3

- icon: 📚
  title: 기초교육부
  items: AI기본교육 전략수립 | AI기초교육과정 운영 | 교육콘텐츠 공동개발

- icon: 🎓
  title: 전공교육부
  items: AI대학 연계 및 인프라 구축 | 전공특화트랙 운영

- icon: 🔗
  title: 융합교육부
  items: AI융합연계전공 운영 | 개방형 온라인과정 운영
:::
```

:::panel
header: AI융합교육원 사업추진체계
headersub: Organization
columns: 3

- icon: 📚
  title: 기초교육부
  items: AI기본교육 전략수립 | AI기초교육과정 운영 | 교육콘텐츠 공동개발

- icon: 🎓
  title: 전공교육부
  items: AI대학 연계 및 인프라 구축 | 전공특화트랙 운영

- icon: 🔗
  title: 융합교육부
  items: AI융합연계전공 운영 | 개방형 온라인과정 운영
:::

**항목 속성 — 설명형 (`desc`):**
```
:::panel
header: 8개 AI·SW 전공 특화 트랙
headersub: SPECIALIZED CURRICULUM TRACKS
columns: 4

- icon: ☁️
  title: 클라우드
  desc: 클라우드 시장 연 18% 성장. 2030년 약 80만 명 신규 일자리 창출 전망

- icon: 🔒
  title: 융합보안
  desc: 차세대 보안 세계시장 연평균 15.33% 성장

- icon: 🤖
  title: 생성AI
  desc: 글로벌 시장 연평균 20% 이상 성장

- icon: 🧠
  title: 인공지능응용
  desc: 글로벌 시장 2030년까지 연평균 30% 이상 성장 전망
:::
```

:::panel
header: 8개 AI·SW 전공 특화 트랙
headersub: SPECIALIZED CURRICULUM TRACKS
columns: 4

- icon: ☁️
  title: 클라우드
  desc: 클라우드 시장 연 18% 성장. 2030년 약 80만 명 신규 일자리 창출 전망

- icon: 🔒
  title: 융합보안
  desc: 차세대 보안 세계시장 연평균 15.33% 성장

- icon: 🤖
  title: 생성AI
  desc: 글로벌 시장 연평균 20% 이상 성장

- icon: 🧠
  title: 인공지능응용
  desc: 글로벌 시장 2030년까지 연평균 30% 이상 성장 전망
:::

---

## ⑥ stepper — 단계별 프로세스

가로로 나열된 단계 카드입니다. 로드맵·PDCA·절차 표현에 적합합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| header | 섹션 헤더 제목 |
| headersub | 영문 부제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| phase | 단계 레이블 (PLAN, DO, 1단계 등) |
| period | 기간 또는 보조 레이블 |
| title | 단계 제목 |
| items | 세부 항목 (`|` 파이프 구분) |

```
:::stepper
header: 3단계 추진 로드맵 · 2023–2028
headersub: THREE-PHASE ROADMAP

- phase: 1단계
  period: 2023–2024
  title: AI·SW 교육체계 재정비
  items: 8개 전공트랙 신설 | 인공지능 공동학과 신설 | PNU DevCloud 구축

- phase: 2단계
  period: 2025–2026
  title: 맞춤형 교육 내실화
  items: SMART-PNU 교육혁신모델 내실화 | 산학협력 선순환 체계 구축

- phase: 3단계
  period: 2027–2028
  title: 성과 분석 및 공유확산
  items: PNU-ICEx 성과 관리 | 취업연계 인턴십 성과 확산
:::
```

:::stepper
header: 3단계 추진 로드맵 · 2023–2028
headersub: THREE-PHASE ROADMAP

- phase: 1단계
  period: 2023–2024
  title: AI·SW 교육체계 재정비
  items: 8개 전공트랙 신설 | 인공지능 공동학과 신설 | PNU DevCloud 구축

- phase: 2단계
  period: 2025–2026
  title: 맞춤형 교육 내실화
  items: SMART-PNU 교육혁신모델 내실화 | 산학협력 선순환 체계 구축

- phase: 3단계
  period: 2027–2028
  title: 성과 분석 및 공유확산
  items: PNU-ICEx 성과 관리 | 취업연계 인턴십 성과 확산
:::

---

## ⑦ timeline — 순서형 타임라인

번호가 달린 단계를 세로로 나열합니다. stepper의 세로 버전입니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| phase | 단계/기간 레이블 |
| title | 단계 제목 |
| description | 단계 설명 |
| accent | `true` 입력 시 강조 스타일 |

```
:::timeline
title: 추진 일정
subtitle: PROJECT TIMELINE

- phase: 2023년 1분기
  title: 사업 출범 및 기반 구축
  description: SW중심대학 사업 선정, 추진위원회 구성, 전담 조직 설치

- phase: 2024년
  title: 교육과정 전면 개편
  description: 8개 특화트랙 교육과정 신설, 산업체 자문위원회 운영
  accent: true

- phase: 2025–2028년
  title: 성과 창출 및 확산
  description: 취업률 90% 목표, 지역 SW 가치확산 거점 완성
:::
```

:::timeline
title: 추진 일정
subtitle: PROJECT TIMELINE

- phase: 2023년 1분기
  title: 사업 출범 및 기반 구축
  description: SW중심대학 사업 선정, 추진위원회 구성, 전담 조직 설치

- phase: 2024년
  title: 교육과정 전면 개편
  description: 8개 특화트랙 교육과정 신설, 산업체 자문위원회 운영
  accent: true

- phase: 2025–2028년
  title: 성과 창출 및 확산
  description: 취업률 90% 목표, 지역 SW 가치확산 거점 완성
:::

---

## ⑧ strategy — 전략 카드

어두운 그라데이션 배경에 알파벳 레터+전략 카드를 배치합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| letter | 강조 알파벳 1자 |
| title | 전략 이름 |
| desc | 전략 설명 |

```
:::strategy
title: 4C 추진전략
subtitle: STRATEGIC FRAMEWORK

- letter: C
  title: Customized Education
  desc: 신기술 반영 교육과정 기반 맞춤형 교육혁신

- letter: C
  title: Convergence Research
  desc: 미래지향적 융합 연구 및 성과 창출

- letter: C
  title: Cooperative Industry-Univ.
  desc: 소통·관계 중심 산학협력 네트워크 강화

- letter: C
  title: Connected Regional Community
  desc: SW가치확산 지역거점 AI·SW 허브 구축
:::
```

:::strategy
title: 4C 추진전략
subtitle: STRATEGIC FRAMEWORK

- letter: C
  title: Customized Education
  desc: 신기술 반영 교육과정 기반 맞춤형 교육혁신

- letter: C
  title: Convergence Research
  desc: 미래지향적 융합 연구 및 성과 창출

- letter: C
  title: Cooperative Industry-Univ.
  desc: 소통·관계 중심 산학협력 네트워크 강화

- letter: C
  title: Connected Regional Community
  desc: SW가치확산 지역거점 AI·SW 허브 구축
:::

---

## ⑨ alphagrid — 알파벳 뱃지 그리드

컬러 뱃지+레이블을 그리드로 나열합니다. 약어 모델·인재상 표현에 적합합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |
| columns | 열 수 (2~4, 기본 4) |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| letter | 뱃지 알파벳 1자 |
| label | 한글 설명 |
| sub | 영문 보조 설명 |

```
:::alphagrid
title: SMARTPNU — 8가지 인재상
subtitle: TALENT MODEL
columns: 4

- letter: S
  label: 문제해결형 혁신인재
  sub: Software

- letter: M
  label: 미래지향적 혁신인재
  sub: Medoid

- letter: A
  label: 자기주도형 혁신인재
  sub: AIMCSD

- letter: R
  label: 지역 혁신인재
  sub: Region
:::
```

:::alphagrid
title: SMARTPNU — 8가지 인재상
subtitle: TALENT MODEL
columns: 4

- letter: S
  label: 문제해결형 혁신인재
  sub: Software

- letter: M
  label: 미래지향적 혁신인재
  sub: Medoid

- letter: A
  label: 자기주도형 혁신인재
  sub: AIMCSD

- letter: R
  label: 지역 혁신인재
  sub: Region
:::

---

## ⑩ roadmap — 단계별 로드맵 트랙

번호+단계명+제목+불릿을 가로 트랙으로 나열합니다. stepper와 유사하나 더 컴팩트합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| phase | 단계 이름 (1단계, Phase 1 등) |
| title | 단계 제목 |
| bullets | 세부 항목 (`|` 파이프 구분) |

```
:::roadmap
title: 사업 추진 로드맵
subtitle: IMPLEMENTATION ROADMAP

- phase: 1단계
  title: 기반 구축
  bullets: SW중심대학 출범 | 전담조직 설치 | 기초 교과 개편

- phase: 2단계
  title: 교육 고도화
  bullets: 8개 특화트랙 운영 | 산학협력 확대 | PNU DevCloud 구축

- phase: 3단계
  title: 성과 확산
  bullets: 지역 SW 허브 완성 | 성과 공유 세미나 | 모델 이전
:::
```

:::roadmap
title: 사업 추진 로드맵
subtitle: IMPLEMENTATION ROADMAP

- phase: 1단계
  title: 기반 구축
  bullets: SW중심대학 출범 | 전담조직 설치 | 기초 교과 개편

- phase: 2단계
  title: 교육 고도화
  bullets: 8개 특화트랙 운영 | 산학협력 확대 | PNU DevCloud 구축

- phase: 3단계
  title: 성과 확산
  bullets: 지역 SW 허브 완성 | 성과 공유 세미나 | 모델 이전
:::

---

## ⑪ badges — 컬러 뱃지 모음

컬러 그라데이션 원형 뱃지를 나열합니다. alphagrid보다 단순한 형태입니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |
| dark | `true` 입력 시 어두운 배경 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| letter | 뱃지 알파벳 1자 |
| label | 뱃지 레이블 |

```
:::badges
title: 핵심 역량 키워드
subtitle: CORE COMPETENCIES

- letter: A
  label: AI

- letter: D
  label: Data

- letter: S
  label: Security

- letter: C
  label: Cloud
:::
```

:::badges
title: 핵심 역량 키워드
subtitle: CORE COMPETENCIES

- letter: A
  label: AI

- letter: D
  label: Data

- letter: S
  label: Security

- letter: C
  label: Cloud
:::

---

## ⑫ chapters — 챕터 목차 카드

번호+카테고리+제목+설명+링크를 그리드로 나열합니다. 목차나 과목 소개에 사용합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| title | 섹션 제목 |
| subtitle | 영문 소제목 |
| columns | 열 수 |

**항목 속성:**
| 속성 | 설명 |
|------|------|
| category | 카테고리 레이블 |
| title | 챕터 제목 |
| description | 챕터 설명 |
| link | 링크 URL (선택) |

```
:::chapters
title: 브로슈어 구성
subtitle: BROCHURE CONTENTS
columns: 3

- category: CHAPTER 01
  title: 대학 소개 및 운영 방향
  description: 부산대학교 AI·SW 교육의 비전과 목표, 중장기 추진 전략을 소개합니다.
  link: /docs/intro

- category: CHAPTER 02
  title: 핵심 성과 및 역량
  description: SW중심대학 선정 이후 달성한 정량·정성적 성과를 정리합니다.
  link: /docs/part-2

- category: CHAPTER 03
  title: 교육혁신 체계
  description: 학사 조직 개편과 글로벌 표준 교육모델 SMART-PNU를 소개합니다.
  link: /docs/part-3
:::
```

:::chapters
title: 브로슈어 구성
subtitle: BROCHURE CONTENTS
columns: 3

- category: CHAPTER 01
  title: 대학 소개 및 운영 방향
  description: 부산대학교 AI·SW 교육의 비전과 목표, 중장기 추진 전략을 소개합니다.
  link: /docs/intro

- category: CHAPTER 02
  title: 핵심 성과 및 역량
  description: SW중심대학 선정 이후 달성한 정량·정성적 성과를 정리합니다.
  link: /docs/part-2

- category: CHAPTER 03
  title: 교육혁신 체계
  description: 학사 조직 개편과 글로벌 표준 교육모델 SMART-PNU를 소개합니다.
  link: /docs/part-3
:::

---

## ⑬ quote — 인용문 블록

강조 인용문을 표시합니다. 학장 인사말, 핵심 메시지 등에 사용합니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| text | 필수 | 인용 문장 |
| author | 선택 | 발화자 이름 |
| role | 선택 | 직책·소속 |
| accent | 선택 | `true` 입력 시 강조 스타일 |

```
:::quote
text: AI·SW 교육은 더 이상 선택이 아닌 필수입니다. 부산대학교는 동남권 AI 교육의 거점으로서 대한민국 디지털 미래를 이끌어 나가겠습니다.
author: 차정인
role: 부산대학교 총장
accent: true
:::
```

:::quote
text: AI·SW 교육은 더 이상 선택이 아닌 필수입니다. 부산대학교는 동남권 AI 교육의 거점으로서 대한민국 디지털 미래를 이끌어 나가겠습니다.
author: 차정인
role: 부산대학교 총장
accent: true
:::

---

## ⑭ cta — 행동 유도(Call to Action)

행동을 유도하는 버튼과 메시지를 표시합니다. 페이지 하단에 배치하는 경우가 많습니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| title | 필수 | 메인 메시지 |
| description | 선택 | 부제 설명 |
| buttonText | 선택 | 버튼 텍스트 |
| buttonLink | 선택 | 버튼 클릭 시 이동할 URL |

```
:::cta
title: AI·SW 교육, 지금 시작하세요
description: 부산대학교 AI융합교육원의 다양한 교육 프로그램을 만나보세요.
buttonText: 교육과정 바로가기
buttonLink: /docs/intro
:::
```

:::cta
title: AI·SW 교육, 지금 시작하세요
description: 부산대학교 AI융합교육원의 다양한 교육 프로그램을 만나보세요.
buttonText: 교육과정 바로가기
buttonLink: /docs/intro
:::

---

## ⑮ split — 좌우 분할 패널

왼쪽(통계·다크)과 오른쪽(목록·라이트)을 나란히 배치합니다.

**속성:**
| 속성 | 설명 |
|------|------|
| left-header | 왼쪽 패널 제목 |
| left-sub | 왼쪽 패널 부제목 |
| left-dark | `true` 입력 시 왼쪽 어두운 배경 |
| right-header | 오른쪽 패널 제목 |
| right-sub | 오른쪽 패널 부제목 |

**`left:` 섹션 항목 속성:**
| 속성 | 설명 |
|------|------|
| label | 항목 이름 |
| value | 숫자/값 (크게 표시) |
| desc | 보조 설명 |

**`right:` 섹션 항목 속성:**
| 속성 | 설명 |
|------|------|
| num | 번호 (반드시 따옴표: `"①"`) |
| title | 항목 제목 |
| desc | 항목 설명 |

```
:::split
left-header: 부산대–경북대 인공지능 공동학과
left-sub: Joint AI Department · 전국 최초
left-dark: true
right-header: 융합교육 혁신 4방향
right-sub: Convergence Strategy

left:
- label: 부산대학교
  value: 68명
  desc: AI Software 특화 교과목 주관

- label: 경북대학교
  value: 60명
  desc: AI Hardware 특화 교과목 주관

- label: 총 정원
  value: 128명
  desc: 전국 최초 인공지능 공동학과

right:
- num: "①"
  title: 융합교육체계 다변화
  desc: AI·SW융합트랙(14개) 추가. 수요별 다양한 융합 교육 과정

- num: "②"
  title: 융합 범위 확장
  desc: 이공계 중심에서 인문·사회 포함 전 분야로 확장
:::
```

:::split
left-header: 부산대–경북대 인공지능 공동학과
left-sub: Joint AI Department · 전국 최초
left-dark: true
right-header: 융합교육 혁신 4방향
right-sub: Convergence Strategy

left:
- label: 부산대학교
  value: 68명
  desc: AI Software 특화 교과목 주관

- label: 경북대학교
  value: 60명
  desc: AI Hardware 특화 교과목 주관

- label: 총 정원
  value: 128명
  desc: 전국 최초 인공지능 공동학과

right:
- num: "①"
  title: 융합교육체계 다변화
  desc: AI·SW융합트랙(14개) 추가. 수요별 다양한 융합 교육 과정

- num: "②"
  title: 융합 범위 확장
  desc: 이공계 중심에서 인문·사회 포함 전 분야로 확장
:::

---

## ⑯ datatable — 데이터 테이블

열 헤더가 있는 정형 데이터 표를 브로슈어 스타일로 표시합니다. 입학 전형표, 모집 인원표 등에 사용합니다.

**속성:**
| 속성 | 필수 | 설명 |
|------|------|------|
| header | 필수 | 상단 헤더 제목 |
| headersub | 선택 | 헤더 영문 부제목 |
| columns | 필수 | 열 이름 (`\|` 파이프 구분) |
| align | 선택 | 각 열 정렬 (`left \| center \| right`, 기본 left) |
| note | 선택 | 하단 주석 |

**행 항목:**

`-` 로 시작하며 셀 값을 `|` 파이프로 구분합니다. 셀 안에서 아래 인라인 서식이 지원됩니다.

| 문법 | 결과 |
|------|------|
| `**텍스트**` | 굵게 (테마 primary 색) |
| `[~텍스트]` | 이탤릭 |
| `[!텍스트]` | 강조색 (테마 accent 색) |

```
:::datatable
header: 2026학년도 모집 인원
headersub: ENROLLMENT QUOTAS
columns: 모집단위 | 정원 | 비고
align: left | center | left
note: ※ 인공지능전공은 부산대-경북대 공동학과

- **컴퓨터공학전공** | [!84명] | SW 전공 핵심 학과
- **인공지능전공** | [!60명] | 전국 최초 공동학과
- **데이터사이언스전공** | 44명 | [~의생명융합공학부 내 전공]
:::
```

:::datatable
header: 2026학년도 모집 인원
headersub: ENROLLMENT QUOTAS
columns: 모집단위 | 정원 | 비고
align: left | center | left
note: ※ 인공지능전공은 부산대-경북대 공동학과

- **컴퓨터공학전공** | [!84명] | SW 전공 핵심 학과
- **인공지능전공** | [!60명] | 전국 최초 공동학과
- **데이터사이언스전공** | 44명 | [~의생명융합공학부 내 전공]
:::

---

## MDX 인라인 컴포넌트 — JSX 태그로 자유롭게 꾸미기

`:::` 디렉티브가 아닌 **JSX 컴포넌트 태그**를 일반 마크다운 문단 사이에 직접 쓸 수 있습니다. import 없이 바로 사용 가능합니다.

---

### `<Highlight>` — 형광펜 하이라이트

배경색이 있는 인라인 강조 스팬입니다. 문장 중간에 끼워 쓸 수 있습니다.

| 속성 | 설명 |
|------|------|
| color | 배경색 (기본 `#2563eb` 파란색) |

```jsx
취업률이 <Highlight>89.3%</Highlight>로 전국 상위 5% 수준입니다.

<Highlight color="#16a34a">합격</Highlight> 또는 <Highlight color="#dc2626">불합격</Highlight>
```

취업률이 <Highlight>89.3%</Highlight>로 전국 상위 5% 수준입니다.

<Highlight color="#16a34a">합격</Highlight> 또는 <Highlight color="#dc2626">불합격</Highlight>

---

### `<Text>` — 폰트 크기·굵기·색상·폰트 자유 지정

인라인 또는 블록 텍스트에 임의 스타일을 줍니다.

| 속성 | 설명 |
|------|------|
| size | 폰트 크기 (`"24px"`, `"2rem"`, 숫자 입력 시 px 자동) |
| weight | 굵기 (`"700"`, `"900"` 등) |
| color | 색상 (`"red"`, `"#1565c0"` 등) |
| family | 폰트 (`noto` / `pretendard` / `gmarket` / `nanum` 또는 직접 입력) |

```jsx
<Text size="28px" weight="900" color="#1565c0">크고 굵은 파란 텍스트</Text>

<Text size="13" color="#6b7a99">작고 회색인 보조 설명</Text>

폰트 변경: <Text family="gmarket" weight="700">GmarketSans 폰트</Text>
```

<Text size="28px" weight="900" color="#1565c0">크고 굵은 파란 텍스트</Text>

<Text size="13" color="#6b7a99">작고 회색인 보조 설명</Text>

폰트 변경: <Text family="gmarket" weight="700">GmarketSans 폰트</Text>

---

### `<Callout>` — 알림/강조 박스

`info` / `success` / `warning` / `danger` 네 가지 타입의 박스입니다.

| 속성 | 설명 |
|------|------|
| type | `info`(기본) / `success` / `warning` / `danger` |
| title | 박스 제목 (선택) |

```jsx
<Callout type="info" title="안내">
  2026학년도 입시 일정은 별도 공지를 확인하세요.
</Callout>

<Callout type="success" title="선정 완료">
  부산대학교는 SW중심대학 사업에 최종 선정되었습니다.
</Callout>

<Callout type="warning">수능최저학력기준은 모집단위별로 다릅니다.</Callout>

<Callout type="danger" title="주의">마감일을 반드시 확인하세요.</Callout>
```

<Callout type="info" title="안내">
  2026학년도 입시 일정은 별도 공지를 확인하세요.
</Callout>

<Callout type="success" title="선정 완료">
  부산대학교는 SW중심대학 사업에 최종 선정되었습니다.
</Callout>

<Callout type="warning">수능최저학력기준은 모집단위별로 다릅니다.</Callout>

<Callout type="danger" title="주의">마감일을 반드시 확인하세요.</Callout>

---

### `<Columns>` / `<Col>` — 다단 레이아웃

일반 마크다운 내용을 가로로 나란히 배치합니다.

```jsx
<Columns>
  <Col>

  **왼쪽 열**

  일반 마크다운도 그대로 씁니다.

  </Col>
  <Col>

  **오른쪽 열**

  - 목록도 가능
  - 아무거나

  </Col>
</Columns>
```

<Columns>
  <Col>

  **왼쪽 열**

  일반 마크다운도 그대로 씁니다.

  </Col>
  <Col>

  **오른쪽 열**

  - 목록도 가능
  - 아무거나

  </Col>
</Columns>

---

### 폰트 굵기 전체 미리보기 (눈누 스타일)

`weight` 100–900을 한눈에 비교할 때 사용합니다. 폰트체별로 지원하는 굵기가 다르므로 실제 렌더링으로 확인하세요.

```jsx
<Text size="22px" weight="100" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 100</Text>
<Text size="22px" weight="200" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 200</Text>
<Text size="22px" weight="300" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 300</Text>
<Text size="22px" weight="400" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 400</Text>
<Text size="22px" weight="500" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 500</Text>
<Text size="22px" weight="600" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 600</Text>
<Text size="22px" weight="700" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 700</Text>
<Text size="22px" weight="800" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 800</Text>
<Text size="22px" weight="900" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 900</Text>
```

<Text size="22px" weight="100" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 100</Text>
<Text size="22px" weight="200" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 200</Text>
<Text size="22px" weight="300" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 300</Text>
<Text size="22px" weight="400" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 400</Text>
<Text size="22px" weight="500" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 500</Text>
<Text size="22px" weight="600" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 600</Text>
<Text size="22px" weight="700" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 700</Text>
<Text size="22px" weight="800" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 800</Text>
<Text size="22px" weight="900" color="#1565c0" display="block">세상에 이런 폰트가 나오다니 천재인듯 — 900</Text>

폰트를 바꾸려면 `family` 속성을 추가하세요: `family="gmarket"` / `family="noto"` / `family="pretendard"` / `family="nanum"`

---

### `<Details>` — 접기/펼치기 (아코디언)

클릭하면 펼쳐지는 상세 설명 박스입니다.

| 속성 | 설명 |
|------|------|
| summary | 접힌 상태에서 보이는 제목 |

```jsx
<Details summary="컴퓨터공학전공 입학전형 상세 안내">
  학생부교과전형 20명, 지역인재전형 12명, 학생부종합전형 15명으로 구성됩니다.
  논술전형은 6명이며 정시 가군 10명, 나군 10명입니다.
</Details>
```

<Details summary="컴퓨터공학전공 입학전형 상세 안내">
  학생부교과전형 20명, 지역인재전형 12명, 학생부종합전형 15명으로 구성됩니다.
  논술전형은 6명이며 정시 가군 10명, 나군 10명입니다.
</Details>

---

### `<StepList>` / `<StepItem>` — 번호형 단계 목록

순서가 중요한 절차·프로세스를 세로로 나열합니다.

| StepItem 속성 | 설명 |
|------|------|
| step | 원 안에 표시할 번호 또는 텍스트 |
| title | 단계 제목 |

```jsx
<StepList>
  <StepItem step="1" title="원서 접수">
    입학처 홈페이지에서 온라인 원서를 작성하고 전형료를 납부합니다.
  </StepItem>
  <StepItem step="2" title="서류 제출">
    학생부, 자기소개서 등 요구 서류를 기한 내에 제출합니다.
  </StepItem>
  <StepItem step="3" title="합격자 발표">
    입학처 홈페이지 및 개별 통보로 결과를 확인합니다.
  </StepItem>
</StepList>
```

<StepList>
  <StepItem step="1" title="원서 접수">
    입학처 홈페이지에서 온라인 원서를 작성하고 전형료를 납부합니다.
  </StepItem>
  <StepItem step="2" title="서류 제출">
    학생부, 자기소개서 등 요구 서류를 기한 내에 제출합니다.
  </StepItem>
  <StepItem step="3" title="합격자 발표">
    입학처 홈페이지 및 개별 통보로 결과를 확인합니다.
  </StepItem>
</StepList>

---

### `<HeroButton>` — 링크 버튼

페이지 내 링크 버튼입니다. 파란 채움형과 테두리형 두 가지입니다.

| 속성 | 설명 |
|------|------|
| href | 이동할 경로 |
| outline | `true` 입력 시 테두리형 |

```jsx
<HeroButton href="/docs/intro">브로슈어 처음으로</HeroButton>
<HeroButton href="/docs/intro" outline>테두리형 버튼</HeroButton>
```

<HeroButton href="/docs/intro">브로슈어 처음으로</HeroButton>
<HeroButton href="/docs/intro" outline>테두리형 버튼</HeroButton>

---

## 프론트매터(파일 헤더) 작성 규칙

모든 md 파일 맨 위에 반드시 다음 형식을 포함합니다:

```
---
id: part-5
title: 전공 교육 운영
sidebar_position: 5
nav_label: 전공교육
theme: public-blue
---
```

| 필드 | 설명 |
|------|------|
| id | URL 경로 (영문 소문자, 하이픈) |
| title | 페이지 전체 제목 |
| sidebar_position | 네비게이션 탭 순서 (숫자) |
| nav_label | 상단 네비게이션 탭에 짧게 표시되는 이름 |
| theme | 브로슈어 색상 테마 (`public-blue` 권장) |

---

## AI에게 새 챕터 작성 요청할 때 프롬프트

아래 프롬프트를 복사해서 텍스트 자료와 함께 AI에게 붙여넣으세요.

```
아래 텍스트 자료를 바탕으로 Docusaurus MDX 파일을 작성해줘.
코드블록 없이 파일 내용 그대로 출력해줘 (마크다운 코드펜스로 감싸지 말 것).

## 필수 규칙

1. 반드시 ::: 디렉티브 문법만 사용할 것
2. JSX, HTML 태그(<div> 등)는 절대 쓰지 말 것
3. 파일 맨 위 frontmatter 형식:
   ---
   id: part-N
   title: 챕터 제목
   sidebar_position: N
   nav_label: 탭에 짧게 표시될 이름 (6자 이내)
   theme: public-blue
   description: 한 줄 요약 (홈 목차 카드에 표시됨)
   ---
4. 블록 배치 순서: hero → kpi(숫자 있을 때) → quote(인용문 있을 때) → panel/cards/stepper → strategy/timeline → cta
5. 내용을 빠짐없이 담을 것. 생략하거나 요약하지 말 것
6. 숫자 특수기호(①②③)는 반드시 따옴표로 감쌀 것: "①"
7. 속성값 안에 큰따옴표("), 꺾쇠(<>), 콜론(:) 넣지 말 것
8. 각 ::: 블록 사이에 빈 줄을 한 줄 넣을 것

## 블록 선택 기준

| 내용 유형 | 사용할 블록 |
|---|---|
| 페이지 상단 제목+설명 | hero (필수 1개) |
| 숫자·퍼센트·통계 3~5개 나열 | kpi |
| 숫자 통계를 카드 형태로 | stats |
| 아이콘+짧은 설명 항목 여러 개 | cards |
| 조직·부서·트랙 구조 나열 | panel (items: 사용) |
| 특징·장점을 설명 문장으로 | panel (desc: 사용) |
| PDCA·절차·단계 가로 나열 | stepper |
| 연도별·순서별 세로 나열 | timeline |
| 비전·전략 프레임워크 (S·M·A·R·T 등) | strategy |
| 약어 모델·인재상 알파벳 뱃지 | alphagrid |
| 중장기 로드맵 트랙 | roadmap |
| 역량 키워드 뱃지 모음 | badges |
| 목차·과목 소개 카드 | chapters |
| 학장·총장 인용문, 핵심 메시지 | quote |
| 페이지 하단 버튼+안내 | cta |
| 숫자통계(왼쪽) + 설명목록(오른쪽) 2단 | split |
| 열 헤더가 있는 정형 표 (입학전형, 모집인원 등) | datatable |

## 블록별 문법 주의사항

**panel — items와 desc 구분**
- 짧은 목록 나열 → items: 항목1 | 항목2 | 항목3
- 한 문장 설명 → desc: 설명 문장

**split — left:/right: 섹션 구분 필수**
:::split
left-header: 왼쪽 제목
left-dark: true
right-header: 오른쪽 제목

left:
- label: 항목명
  value: 숫자
  desc: 설명

right:
- num: "①"
  title: 항목 제목
  desc: 설명
:::

**roadmap — bullets 사용 (items 아님)**
- bullets: 항목1 | 항목2 | 항목3

**stepper — items 사용**
- items: 항목1 | 항목2 | 항목3

**timeline — accent로 강조**
- accent: true  ← 중요 단계에만 추가

**strategy — letter는 알파벳 1자만**
- letter: C  ← 한 글자만, 단어 전체 쓰지 말 것

**datatable — 행은 파이프 구분, 인라인 서식 지원**
- columns와 align의 열 수를 반드시 일치시킬 것
- 행: - **굵게** | [!강조색] | [~이탤릭]  ← | 파이프로 구분, 앞에 - 붙임
- 빈 셀(해당 없음): - 로 표시
- note는 하단 주석 한 줄

## 텍스트 자료

[여기에 텍스트 자료 붙여넣기]
```
