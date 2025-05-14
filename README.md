# design-pattern-analytics

## 개요

scss를 이용해 디자인 시스템을 일관되게 유지하는 방법을 관리합니다.


## 시작 방법

깃 레포지토리를 pull하고, 라이브러리 브랜치를 기준으로 아래의 명령어를 실행합니다.

```bash
yarn dev
```

### /src/styles/_variables.scss

/src/styles/_variables.scss에서 기본 여백에 대한 $base-unit 변수와 $font-sizes 등에 대해 설정해 주세요.

### @use '@/styles/common' as *;

사용하고자 하는 scss 모듈에서 위와 같이 임포트하여 사용합니다.

#### @include text(...);

지정된 디자인 시스템의 폰트에 대한 부분을 일관되게 사용할 수 있습니다.

```css
  .item {
    @include text(h1);
  }
```

#### spacing(...);

지정된 디자인 시스템의 여백에 대한 부분을 일관되게 사용할 수 있습니다. <br />
_variables.scss에 기록된 $base-unit * 4px의 값을 사용하게 되며,
인자로 6의 값을 전달 시 6(argument) * 4($base-unit) = 24px의 값을 적용합니다.<br />
디자인 시스템의 여백 기준이 상이한 경우 $base-unit을 수정합니다.

```css
  .item {
    padding-top: spacing(6);
  }
```

#### @include respond-max(...) {

지정된 디자인 미디어 쿼리에 대한 부분을 일관되게 사용할 수 있습니다.

```css
  @include respond-max($breakpoint-desktop) {
    .item {
      padding-top: spacing(6);
    }
  }
```

## 의존성 목록

프로젝트 개발에 사용된 의존성 목록 리스트입니다.

| 의존성명 | 버전 | 비고 |
| --- | --- | --- |
| Next.js | 15.3.2 | - |
| sass | 1.85.1 | - |
