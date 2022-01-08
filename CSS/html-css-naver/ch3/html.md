1. 기본 스타일
   웹 브라우저 마다 기본 스타일이 적용되는 게 있다. e.g. input 태그는 outline 이 지정되고 padding margin 이 알아서 설정되고 등등. 이런것들을 reset 시켜주는 css 파일을 먼저 가져온 다음에 스타일 하는 경우가 많다.

2. vertical align 특성
   어떻게 써야하는 지 잘 몰랐는데, sibling element 간에 vertical한 정렬을 맞춰주기 위해 사용한다. display: inline, inline-block 이어야 적용된다.

3. 이미지 스프라이트
   웹 사이트 한 페이지에 이미지가 많으면 서버에 요청하고 가져오는 데 시간이 많이 걸릴수가 있어서 이미지들을 뭉쳐서 하나로 만든다음에 그거를 잘라 쓰는 방식으로 사용하는 방법이다. background-image, position, size, repeat 등의 속성을 조작하여 사용한다.
