https://www.youtube.com/watch?v=PN_WmsgbQCo&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech 요약

브라우저 렌더링 과정은 4단계로 구성된다.

1. html 을 파싱해서 DOM 트리, css 와 inline style 을 파싱해서 CSS DOM 트리 구성
2. DOM tree + CSS DOM tree 결합하여 render tree 구성
3. 각 노드의 size, position 계산 해서 레이아웃 (reflow)
4. 실제 화면에 그리기 (repaint)

DOM 트리에서 일부분만 바뀌는데도 0에서부터 렌더링하는 것처럼 한다면 계산량이 크기 때문에 이것을 효율적으로 하고자 virtual DOM을 도입했다. virtual DOM 은 html을 자바스크립트 객체로 표현한 것인데, 실제로 rendering 을 하는게 아니라 메모리 상에서 동작한다는 점, 변화가 생기면 그것들을 배칭처리한다는 점 떄문에 연산량이 적다.

렌더링하고자하는 요소(JSX)가 변경되었을 때, virtual DOM 을 업데이트하고, 업데이트하기 전 virtual DOM 과 비교한다(diffing). Diffing 알고리즘은 계산량이 O(n)인데, 이것을 가능하게 하는 2가지 조건이 있다. 1) Element Type 이 같으면 같은 Element, 2) child elements 중에서 key값이 같으면 같은 element 이다. 1의 제약 조건에 의해 , Element 의 attribute 만 바뀌었다면 attribute 만 업데이트 하고, type이 아예 새로그린다. 2의 졔약 조건때문에, key값은 element 마다 유니크 해야되고 "잘" 대응되어야 한다.
그리고 리액트는 이런 업데이트 과정을 배칭처리해서 한 번만 업데이트 하도록 한다.

DOM 조작이 많이 발생하는 Single Page Application 에서는 DOM을 새로 그리는 것보다 virtual DOM 에 의해 바뀐 부분만 처리하는 것이 연산량이 적어서 메리트가 있다!
