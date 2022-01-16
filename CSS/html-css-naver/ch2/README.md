1. display: block, inline-block
   header, nav, main, footer의 display 속성은 전부 block 이 디폴트이며, block 속성으로 지정되면 가로 한줄을 다 차지하게 되지만, inline-block 으로 지정하면 width 크기만큼 지정이 된다.

2. block: 디폴트로 width 100%이며 width, height, margin, padding 속성이 모두 반영된다. e.g. div, p, h1

3. inline: 컨텐츠의 크기만큼만 공간을 차지하고 있어서 width height 지정 불가, 지정해도 무시된다. margin, padding 은 좌우 간격만 반영이 되고 상하 간격이 반영되지 않는다. e.g. span, a, em

4. inline-block: width, height, margin, padding 속성이 모두 지정 가능하다. e.g. button, input, select
