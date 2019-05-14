# Boilerplate

## Redux를 적용하여 상태를 관리하기

첫 번째 버전은 앱의 상태(성공, 실패 수)를 컴포넌트의 로컬 상태로 관리했다.
상태가 많아지고 복잡해 지면 컴포넌트의 상태로 관리하기 어려워진다.
redux 를 이용하여 상태를 전역 스토어로 옮기고 컴포넌트는 상태 값을 Props로 수신 받는 방식으로 개선해보자.

### Goal

* redux를 추가한다.
* store를 모델링한다.
* action을 만들고 reducer를 연결하여 store를 업데이트한다.

### 참고 사항
> CodeBrew는 아직 완전한 버전이 아니며 개발중입니다.
> 작동이 원할하지 않을 수 있으며 예상대로 작동에 문제가 있다면 다음 링크에서 코드를 확인해 주세요.
> codesandbox.io: [Boilerplate v02](https://codesandbox.io/s/xlkmn0kpp4) 
