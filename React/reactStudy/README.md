# useMemo, useCallback

1. useMemo의 올바른 사용법

- 연산하는데 비용이 많이 들어서 re rendering되더라도 같은 값을 얻기 위한 계산을 피하고 싶을 때
- object 의 참조 동일성을 유지 하고 싶을 때. re rendering이 되면 객체의 참조값은 항상 달라지기 때문에, 객체를 dependency array 에 넣는 useEffect 의 콜백은 다시 실행되게 되는데, 이것을 방지하기 위해서 useMemo를 사용할 수 있다. 다만, themeStyle처럼 dark가 달라질 때마다 값이 달라지는 object 가 아니라 foo처럼 항상 같은 값을 유지하는 object라면 useRef를 이용하는 게 좋다.
- useMemo 를 사용하면 메모리 할당이 증가하고 오버헤드가 발생하기 때문에 항상 성능이 좋아지는 것이 아님에 주의하자.

```
const themeStyle = {
  backgroundColor: dark ? 'dark' : 'white'
}
const foo = [1, 2, 3]
```
