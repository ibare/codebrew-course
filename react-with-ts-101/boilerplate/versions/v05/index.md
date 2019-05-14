# Boilerplate

## 비동기 작업 추가를 위한 redux-saga 추가하기

API 호출은 비동기 작업이며 순수 함수로 구현하는 redux의 reducer만으론 부수 효과가 있는 비동기 작업은 처리할 수 없습니다.
비동기 작업 등을 다루기 위해 redux는 미들웨어 아키텍처를 지원하며 redux-saga는 관련 도구 많이 사용되는 기술 중 하나입니다.
redux-saga 구조를 적용하고 컴포넌트가 처리하고 있는 모니터링 액션 등을 saga가 처리하는 구조로 개선해 봅니다.

### Goal

* redux-saga 적용
* monitoring toggle 로직을 컴포넌트에서 saga로 옮겨 컴포넌트의 로직 종속성을 제거하기

### 참고 사항
> CodeBrew는 아직 완전한 버전이 아니며 개발중입니다.
> 작동이 원할하지 않을 수 있으며 예상대로 작동에 문제가 있다면 다음 링크에서 코드를 확인해 주세요.
> codesandbox.io: [Boilerplate v04](https://codesandbox.io/s/n51jrkq2wl) 
