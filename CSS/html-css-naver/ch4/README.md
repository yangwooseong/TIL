1. Container block

- 요소의 크기와 위치는 컨테이닝 블록의 영향을 받는다. width, height, padding, margin 등이 컨테이닝 블록의 영향을 받는다. ==> **요소의 width와 height는 컨테이닝 블록의 width와 height에 의존한다.**
- 보통 컨테이닝 블록은 자기 부모의 콘텐츠 영역이지만 항상 그런 것은 아니다.
- position 속성이 static, relative, sticky 중 하나라면 가장 가까운 블록 컨테이너(inline-block, block, list-item 요소) 혹은 가장 가까우면서 서식 맥랑을 형성하는 요소(table, flex, grid)의 콘텐츠 영역이 컨테이닝 블록 식별이 된다. ==> **position 속성이 static, relative, sticky => inline요소가 아닌 부모**
- position 속성이 absolute 라면 컨테이닝 블록은 position 속성 값이 static 이 아닌 가장 가까운 조상의 내부 여백 영역이다.
- position 속성이 fixed인 경우 컨테이닝 블록은 뷰포트 이다.
- position 속성이 absolute 혹은 fixed 인 경우, transform 이나 perspective속성이 none 이 아닌 조상
- height, top, bottom 은 컨테이닝 블록의 height에 의해 결정되고, width, left, right, padding, margin 은 컨테이닝 블록의 width 를 사용한다.

2. Position

- default 는 static 이며, left, top, right, bottom, z-index 속성을 지정해도 영향을 받지 않는다.
- flex는 오래된 IE에서 지원이 안되거나 최신 IE에서 버그가 발생하는 경우가 있어서 가운데 정렬할 때 flex를 안쓰고 position, transition, transoform을 이용해야 하는 경우가 있다.

3. 태그 우선 순위

- 기본적으로 뒤에 나오는 css가 우선순위가 더 높다.
- !important > inline style > id > class, 다른 attribute, 수도 클래스 > tag, 수도 엘레먼트
- 우선순위가 같다면 갯수가 많은 css가 우선순위가 더 높다.
