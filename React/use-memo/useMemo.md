rerendering 될 때마다 원하지 않는 함수 호출 혹은 함수 생성을 안하기 위해 useMemo, useCallback을 사용한다.

1. useMemo의 devs array 안에 값이 바뀌지 않으면 캐싱된 값을 사용한다.
2. useCallback의 devs arrary 안에 값이 바뀌지 않으면 캐싱된 함수를 사용한다.
3. React.memo로 function Component 를 감싸지 않으면, 부모 Component가 rerender 가 되어도 자신의 props 가 바뀌지 않는 이상 rerender가 되지 않는다.
