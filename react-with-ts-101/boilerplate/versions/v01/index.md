# Boilerplate

## React 프로젝트 시작하기

[TypeScript](https://www.typescriptlang.org/) 기반의 [ReactJS](https://reactjs.org/) 프로젝트를 시작하는 여러 가지 방법이 있습니다.
프로젝트 셋업 전반에 대해 직접 번들링, 트랜스파일 환경 등등을 구성할 수도 있으나 설정할 내용이 매우 많습니다.
본 교안은 가장 간단하다고 알려진 [react-scripts](https://facebook.github.io/create-react-app/) 기반으로 진행합니다.

앱을 번들링하고 실행하는데 필요한 모든 환경을 제공하는 CodeBrew 서비스만을 이용한다면 특별한 준비는 필요 없이 바로 시작할 수 있습니다.
직접 프로젝트를 다운로드 받아 로컬에서 실행해 본다면 다음의 구성 요소가 필요합니다.

* [nodejs](https://nodejs.org)
* [npm](https://www.npmjs.com)(nodejs 와 함께 설치됨) or [yarn](https://yarnpkg.com)
* [create-react-app](https://www.npmjs.com/package/create-react-app)

다음과 같이 프로젝트를 만들고 시작할 수 있습니다.

```
$ npx create-react-app hello-react --typescript
```
또는 

```
$ yarn create react-app my-app --typescript
```

Boilerplate의 첫 번째 버전이 바로 create-react-app으로 만들어진 버전입니다.
간단히 다음 명령으로 앱을 빌드하고 실행해 볼 수 있습니다.

```
$ yarn start
```

> 패키지 커맨드로 npm을 사용해도 됩니다. 
> 이 코스에선 yarn을 사용합니다.

## Boilerplate 기반 기술

React & Typescript 101 코스는 전문적인 웹 프론트앤드 개발자가 아닌 개발자가 - ex) Java 백앤드 개발자 - 웹앱을 만들어야 할 때 도움을 주기 위한 목표로 디자인 되었습니다.
따라서 어떤 분들에겐 적당한 내용일 수 있지만 어떤 분들에겐 너무 어렵거나 너무 쉬울 수도 있습니다.

코스의 목표를 달성하기 위해 이 코스에서 다루는 예제들은 다음의 라이브러리를 기반으로 작성되었습니다.

* [ant.design](https://ant.design) - UI 레이아웃과 컴포넌트 라이브러리
* [redux](https://redux.js.org) - 상태 관리 라이브러리
* [redux-saga](https://redux-saga.js.org) - side effects 관리를 위한 redux middleware
* [sass](https://sass-lang.com) - CSS 전처리기

### 참고 사항
> CodeBrew는 아직 완전한 버전이 아니며 개발중입니다.
> 작동이 원할하지 않을 수 있으며 예상대로 작동에 문제가 있다면 다음 링크에서 코드를 확인해 주세요.
> codesandbox.io: [Boilerplate v01](https://codesandbox.io/s/924zj53kwr) 

> 이 코스에서는 Javascript 문법의 기본적인 내용을 포함하고 있지 않습니다.
> Javascript 기본 문법 학습이 필요한 분은 [Woowabros play javascript](http://woowabros-play-javascript.herokuapp.com/) 사이트를 참고하여 학습해 주세요.
