# 신한라이프 디자인 스타일가이드

## 1. 디자인 원칙

| 원칙 | 설명 |
|------|------|
| **명확성 (Clarity)** | 정보 계층을 분명히 하고, 사용자가 즉시 이해할 수 있도록 설계 |
| **일관성 (Consistency)** | 컬러, 타이포, 간격, 컴포넌트를 통일되게 유지 |
| **신뢰감 (Trust)** | 금융 서비스에 걸맞은 안정적이고 정돈된 레이아웃 |
| **현대성 (Modernity)** | 트렌디하고 세련된 비주얼로 젊은 감성 전달 |

---

## 2. 레이아웃 시스템

### 2.1 그리드
- **Desktop**: 12컬럼, 최대 너비 1280px, 거터 24px, 마진 auto
- **Tablet**: 8컬럼, 최대 너비 768px, 거터 20px
- **Mobile**: 4컬럼, 최대 너비 100%, 거터 16px, 마진 16px

### 2.2 섹션 구조
```
┌─────────────────────────────────────────────┐
│  Header / Navigation (고정)                  │
├─────────────────────────────────────────────┤
│  Hero Section (풀 너비, 비주얼 중심)           │
├─────────────────────────────────────────────┤
│  주요 서비스 / 퀵메뉴 (카드 그리드)            │
├─────────────────────────────────────────────┤
│  상품 안내 섹션                               │
├─────────────────────────────────────────────┤
│  공지/이벤트/뉴스 영역                        │
├─────────────────────────────────────────────┤
│  고객 지원 / CTA 영역                         │
├─────────────────────────────────────────────┤
│  Footer                                      │
└─────────────────────────────────────────────┘
```

### 2.3 간격 체계 (Spacing)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `space-xs` | 4px | 인라인 요소 간격 |
| `space-sm` | 8px | 아이콘-텍스트 간격 |
| `space-md` | 16px | 컴포넌트 내부 패딩 |
| `space-lg` | 24px | 카드 패딩, 요소 간격 |
| `space-xl` | 32px | 섹션 내 그룹 간격 |
| `space-2xl` | 48px | 섹션 간 간격 |
| `space-3xl` | 64px | 주요 섹션 간 간격 |
| `space-4xl` | 96px | 히어로/풋터 여백 |

---

## 3. UI 컴포넌트

### 3.1 버튼

#### Primary Button
```css
background: #6B3FA0;
color: #FFFFFF;
border-radius: 8px;
padding: 14px 32px;
font-size: 16px;
font-weight: 600;
transition: all 0.2s ease;
/* hover */
background: #4A2B73;
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(107, 63, 160, 0.3);
```

#### Secondary Button
```css
background: transparent;
color: #6B3FA0;
border: 1.5px solid #6B3FA0;
border-radius: 8px;
padding: 14px 32px;
/* hover */
background: rgba(107, 63, 160, 0.08);
```

#### Ghost Button
```css
background: transparent;
color: #6B3FA0;
border: none;
padding: 14px 16px;
text-decoration: underline;
/* hover */
color: #4A2B73;
```

#### 버튼 크기
| 크기 | 높이 | 패딩 | 폰트 |
|------|------|------|------|
| Small | 36px | 8px 16px | 14px |
| Medium | 44px | 12px 24px | 16px |
| Large | 52px | 14px 32px | 16px |

### 3.2 카드

#### 기본 카드
```css
background: #FFFFFF;
border-radius: 16px;
padding: 24px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
transition: all 0.3s ease;
/* hover */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
transform: translateY(-4px);
```

#### 강조 카드
```css
background: linear-gradient(135deg, #6B3FA0 0%, #0046FF 100%);
color: #FFFFFF;
border-radius: 16px;
padding: 32px;
```

### 3.3 입력 필드

```css
background: #FFFFFF;
border: 1.5px solid #E5E5EA;
border-radius: 8px;
padding: 14px 16px;
font-size: 16px;
/* focus */
border-color: #6B3FA0;
box-shadow: 0 0 0 3px rgba(107, 63, 160, 0.12);
/* error */
border-color: #FF3B30;
```

### 3.4 네비게이션

```
┌──────────────────────────────────────────────────────┐
│  [로고]   보험상품  고객서비스  회사소개   [검색] [로그인] │
└──────────────────────────────────────────────────────┘
```

- 배경: `#FFFFFF` (스크롤 시 `backdrop-filter: blur(20px)`)
- 높이: 72px (Desktop), 56px (Mobile)
- 액티브 메뉴: Contemporary Purple 색상 + 하단 인디케이터
- 모바일: 햄버거 메뉴 → 슬라이드 드로어

### 3.5 배지 / 태그

```css
/* 기본 태그 */
background: rgba(107, 63, 160, 0.1);
color: #6B3FA0;
border-radius: 20px;
padding: 4px 12px;
font-size: 12px;
font-weight: 600;
```

---

## 4. 아이콘 시스템

### 4.1 스타일
- **라인 아이콘**: 두께 1.5px~2px, 라운드 캡
- **크기**: 16px / 20px / 24px / 32px
- **컬러**: 맥락에 따라 브랜드 컬러 팔레트 적용

### 4.2 주요 카테고리
| 카테고리 | 아이콘 예시 |
|---------|-----------|
| 보험 상품 | 우산, 방패, 하트, 가족 |
| 금융 서비스 | 계산기, 차트, 동전, 지갑 |
| 고객 지원 | 헤드셋, 말풍선, 문서, 돋보기 |
| 네비게이션 | 화살표, 메뉴, 검색, 닫기 |

---

## 5. 모션 & 인터랙션

### 5.1 트랜지션
| 유형 | 속성 | 이징 |
|------|------|------|
| 호버 | 0.2s | ease |
| 카드 인터랙션 | 0.3s | ease-out |
| 페이지 전환 | 0.4s | ease-in-out |
| 모달 오픈 | 0.3s | cubic-bezier(0.4, 0, 0.2, 1) |

### 5.2 스크롤 애니메이션
- **Fade In Up**: 요소가 아래에서 위로 페이드인 (20px 이동)
- **Fade In**: 투명도만 변경
- **스크롤 트리거**: 뷰포트 진입 시 동작 (threshold 0.1)
- **딜레이**: 그리드 아이템은 50ms 간격 stagger

### 5.3 마이크로 인터랙션
- 버튼 클릭 → 살짝 축소 후 복귀 (scale 0.97 → 1)
- 토글/체크박스 → 부드러운 상태 전환
- 로딩 → 퍼플 그라데이션 스피너

---

## 6. 반응형 브레이크포인트

| 이름 | 범위 | 컬럼 | 비고 |
|------|------|------|------|
| Mobile S | ~374px | 4 | 소형 모바일 |
| Mobile | 375px~767px | 4 | 기본 모바일 |
| Tablet | 768px~1023px | 8 | 태블릿 |
| Desktop | 1024px~1439px | 12 | 기본 데스크톱 |
| Desktop L | 1440px~ | 12 | 대형 화면 |

---

## 7. 접근성 (Accessibility)

- **색상 대비**: WCAG 2.1 AA 기준 (텍스트 4.5:1, 대형 텍스트 3:1)
- **포커스 표시**: 키보드 포커스 시 3px 퍼플 아웃라인
- **대체 텍스트**: 모든 이미지에 alt 텍스트 필수
- **폰트 크기**: 최소 14px, 모바일 최소 16px (input)
- **터치 타겟**: 최소 44x44px

---

## 8. 다크 모드 (선택)

| 요소 | Light | Dark |
|------|-------|------|
| 배경 | `#FFFFFF` | `#1C1C1E` |
| 카드 배경 | `#FFFFFF` | `#2C2C2E` |
| 텍스트 | `#1C1C1E` | `#F5F5F7` |
| 보조 텍스트 | `#8E8E93` | `#98989D` |
| 브랜드 컬러 | `#6B3FA0` | `#9B7AC7` |
| 구분선 | `#E5E5EA` | `#38383A` |
