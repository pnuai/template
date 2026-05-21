# PNU Modu — AI 변환 프롬프트 템플릿

> 시연 당일 이 프롬프트를 Claude(또는 GPT-4o)에 붙여넣고, 아래 `[여기에 원문 텍스트 붙여넣기]` 자리에 변환할 텍스트를 넣으면 됩니다.

---

## 사용법

1. 아래 프롬프트 전체를 복사
2. AI 채팅창에 붙여넣기
3. `[여기에 원문 텍스트 붙여넣기]` 부분을 실제 텍스트로 교체
4. 전송 → 결과 마크다운을 복사해서 새 `.md` 파일에 붙여넣기

---

## 프롬프트

```
당신은 공공기관 브로슈어 마크다운 변환 전문가입니다.
아래 원문 텍스트를 PNU Modu 브로슈어 시스템의 마크다운 형식으로 변환해 주세요.

---

## 시스템 규칙

### 1. 파일 헤더 (필수)
모든 파일은 아래 frontmatter로 시작합니다:
```
---
id: part-X
title: "챕터 제목"
sidebar_position: X
nav_label: 짧은메뉴명
theme: public-blue
hide_title: true
---
```

### 2. 사용 가능한 블록 종류

**:::hero** — 챕터 첫 화면 대형 타이틀 (챕터당 1개, 반드시 첫 번째)
```
:::hero
badge: CHAPTER 0X · 섹션명
title: 메인 타이틀
description: 한두 줄 설명
:::
```

**:::kpi** — 숫자·수치 강조 카드 (4개 이하 권장)
```
:::kpi
subtitle: 영문 소제목
title: 한글 대제목

- label: 항목명
  value: 수치
  sub: 보조설명
:::
```

**:::cards** — 아이콘+제목+설명 격자 카드
```
:::cards
title: 섹션 제목
subtitle: ENGLISH SUBTITLE
columns: 3
variant: elevated

- title: 카드 제목
  description: 카드 설명 (2~3줄 이내)
  icon: 🎯
:::
```
- columns: 2~4 중 선택
- variant: elevated(그림자), borderless(테두리없음) 중 선택
- icon: 내용에 어울리는 이모지 선택

**:::panel** — 아이콘+제목+항목리스트 패널 (조직도, 역할 설명에 적합)
```
:::panel
header: 섹션 제목
headersub: ENGLISH SUBTITLE
columns: 3

- icon: 📚
  title: 패널 제목
  items: 항목1 | 항목2 | 항목3
:::
```
- items 구분자는 ` | ` (공백+파이프+공백)

**:::stepper** — 단계별 프로세스 (로드맵, 절차 설명에 적합)
```
:::stepper
header: 섹션 제목
headersub: ENGLISH SUBTITLE

- phase: Step 1
  period: 단계 부제
  title: 단계 제목
  items: 세부내용1 | 세부내용2 | 세부내용3
:::
```

**:::strategy** — 전략 프레임워크 (4C, 4P 등 전략 표현에 적합)
```
:::strategy
title: 전략명
subtitle: ENGLISH SUBTITLE

- letter: C
  title: 영문 전략명
  desc: 한글 설명
:::
```

**:::alphagrid** — 영문 이니셜+한글 설명 격자 (인재상, 핵심역량 표현에 적합)
```
:::alphagrid
title: 섹션 제목
subtitle: ENGLISH SUBTITLE
columns: 4

- letter: S
  label: 한글 설명
  sub: English
:::
```

### 3. 일반 마크다운 (블록 밖에서 사용)
- `### 소제목` — 표 앞 소제목
- 표 — `| 열1 | 열2 |` 형식의 마크다운 표
- `<br/>` — 단락 사이 여백

---

## 변환 원칙

1. **구조 우선**: 원문의 논리 흐름을 파악해 가장 적합한 블록 선택
   - 수치/성과 → :::kpi
   - 단계/프로세스 → :::stepper
   - 조직/역할 → :::panel
   - 특징/기능 나열 → :::cards
   - 전략 키워드 → :::strategy 또는 :::alphagrid

2. **텍스트 압축**: 각 블록의 텍스트는 간결하게 — description은 2~3줄, items는 핵심만
3. **챕터 흐름**: hero → kpi(있으면) → 핵심 내용 블록들 → 세부 내용 순서
4. **영문 subtitle**: 모든 블록의 subtitle/headersub는 관련 영문 키워드로 작성
5. **이모지**: cards와 panel의 icon은 내용에 맞는 이모지로 — 과하지 않게

---

## 변환할 원문 텍스트

[여기에 원문 텍스트 붙여넣기]

---

위 원문을 분석하여 브로슈어 마크다운으로 변환해 주세요.
- 원문의 주요 섹션마다 적합한 블록을 선택하여 구성
- 챕터 번호와 제목은 원문에서 유추
- 블록은 최소 3개 이상 사용하여 풍부하게 구성
- 결과물만 코드블록으로 출력 (설명 없이)
```

---

## 시연 팁

### 변환 후 체크리스트
- [ ] frontmatter의 `id`, `sidebar_position`, `nav_label` 값이 올바른가
- [ ] `:::hero` 블록이 첫 번째에 있는가
- [ ] 각 블록의 들여쓰기가 2칸인가 (tab 금지)
- [ ] `items` 구분자가 ` | ` (공백+파이프+공백)인가
- [ ] `:::` 닫는 줄이 빠지지 않았는가

### 자주 나오는 오류와 수정법
| 증상 | 원인 | 수정 |
|:--|:--|:--|
| 블록이 텍스트로 그대로 출력 | `:::` 닫는 줄 누락 | 블록 끝에 `:::` 추가 |
| items가 한 줄로 안 나옴 | 구분자 오류 | `\|` → ` | ` (공백 추가) |
| 이모지가 깨짐 | 텍스트 인코딩 | UTF-8로 저장 확인 |
| 카드가 1열로 나옴 | columns 누락 | `columns: 3` 추가 |
