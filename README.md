# Next.js CSS Module Template

Next.js + CSS Module 기반 웹 프로젝트 템플릿입니다.

## 시작하기

```bash
# 의존성 설치
yarn install
# 또는
npm install

# 개발 서버 실행
yarn start:dev
# 또는
yarn start:local
yarn start:prod
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속하세요.

## 폴더 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 최소한의 전역 스타일 (reset, variables import)
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css    # 페이지 전용 CSS Module
├── components/             # 공용 컴포넌트
│   └── Button/
│       ├── Button.tsx
│       ├── Button.module.css
│       └── index.ts
└── styles/
    └── variables.css      # 공용 CSS 변수 (색상, 간격 등)
```

## CSS Module 사용법

### 1. 컴포넌트에 CSS Module 적용

```tsx
// MyComponent.tsx
import styles from "./MyComponent.module.css";

export default function MyComponent() {
  return <div className={styles.container}>Hello</div>;
}
```

### 2. 여러 클래스 조합

```tsx
<div className={`${styles.base} ${styles.variant}`} />
```

### 3. 공용 CSS 변수 사용

`src/styles/variables.css`에 정의된 변수를 모듈에서 사용할 수 있습니다.

```css
/* MyComponent.module.css */
.button {
  background: var(--text-primary);
  color: var(--background);
}
```

## GitHub Template으로 사용하기

1. 이 저장소를 **Template** 로 설정  
   - GitHub 저장소 → Settings → General → Template repository 체크

2. 새 프로젝트 생성  
   - "Use this template" 버튼으로 새 레포지토리 생성

3. 로컬에 클론 후 `package.json`의 `name`을 프로젝트명으로 변경

## 환경 변수 (.env)

`.env.development`, `.env.production`, `.env.local` 파일이 템플릿에 포함되어 있습니다.  
비밀키 등 민감한 정보를 `.env.local`에 넣을 경우, `.gitignore`에 추가하여 커밋되지 않도록 하세요.

```gitignore
.env.local
```

## 스크립트

| 명령어         | 설명                      |
| -------------- | ------------------------- |
| `yarn start:dev`  | 개발 서버 (development)   |
| `yarn start:local` | 개발 서버 (local)       |
| `yarn start:prod`  | 개발 서버 (production)  |
| `yarn host:dev`    | 빌드 후 서버 (development) |
| `yarn host:local`  | 빌드 후 서버 (local)     |
| `yarn host:prod`   | 빌드 후 서버 (production)  |
| `yarn lint`       | ESLint 실행              |
