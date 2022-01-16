1. Block format context

- BFC를 쓰는 상황은 float속성을 지정할 때 자주 쓰는 모양이다.
- float 속성을 지정하면 부모 태그가 float 속성이 지정된 자식 태그를 감싸줄 수가 없게 된다. 해결하려면, **부모 태그도 BFC를 생성해야 된다.**
- 완전히 감싼다 => 부모 태그에 BFC를 생성해서 height 가 BFC를 생성하는 자식 태그의 height에 의존하게 한다. 만약 부모 태그 height < 자식 태그 height이고 부모 태그의 overflow가 auto 라면 자식 태그의 height과 같아지게 되고, overflow: hidden 이라면 부모 태그의 height 만큼 자식 태그가 잘리게 된다.
- clear 속성을 쓰면 float 속성이 있는 요소를 block 처럼 만들어서 그 다음 줄에 위치하게 할 수 있다.

너무 어려운데 진짜 실무에서 이걸 쓸 일이 있을지 궁금하네..
float속성의 요소의 부모에 BFC를 추가하거나, float속성의 요소와 형제 관계에 있는 요소에 clear 속성을 추가하는 것을 기억해두자.

요약하면 float 대신에 flex, absolute, text align를 쓰자. float를 쓰게 되면 BFC를 찾아보자.
