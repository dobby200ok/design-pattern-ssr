# design-pattern-analytics

## 개요

구글 서치 어드바이저와 애널리틱스, 네이버 서치 어드바이저 등 주요 비즈니스 분석 도구에 대한 사용법을 관리합니다.


## 시작 방법

깃 레포지토리를 pull하고, 라이브러리 브랜치를 기준으로 아래의 명령어를 실행합니다.

```bash
yarn dev
```

### /src/app/layout.tsx

/src/app/layout.tsx에서 구글 애널리틱스와 네이버 서치어드바이저 관련 설정을 완료해 주세요.

### .env.local

환경 변수를 통해 구글 애널리틱스에 대한 GA_ID, 네이버 인증 값을 설정해 주세요.

## 의존성 목록

프로젝트 개발에 사용된 의존성 목록 리스트입니다.

| 의존성명 | 버전 | 비고 |
| --- | --- | --- |
| Next.js | 15.3.2 | - |
| @next/third-parties | 15.3.2 | [구글 애널리틱스 설정 라이브러리](https://nextjs.org/docs/app/guides/third-party-libraries) |
