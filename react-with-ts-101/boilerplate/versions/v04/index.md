# Boilerplate

## 컴포넌트의 역할을 분리하고 액션 처리의 비효율 개선하기

각각의 컴포넌트가 필요한 상태를 수신 받는 로직을 포함하는 구조는 컴포넌트가 많아질 경우 관리하기 힘들어진다.
컴포넌트를 역할에 따라 Container와 Componens로 분리하여 스케일이 커져도 문제 없는 구조를 만들자.

### Goal

* 컴포넌트를 Container 와 Component 로 분리하기
* 컴포넌트의 역할을 작게 만들어 재활용성 높이기
* action type과 action이 합쳐진 단일 구조 만들기

### 참고 사항
> CodeBrew는 아직 완전한 버전이 아니며 개발중입니다.
> 작동이 원할하지 않을 수 있으며 예상대로 작동에 문제가 있다면 다음 링크에서 코드를 확인해 주세요.
> codesandbox.io: [Boilerplate v03](https://codesandbox.io/s/xjnzyn38mo) 
