import { useReducer, useRef, useState } from 'react'

export const StudyUseReducer = () => {
  /* You don't know useReducer
  
  useReducer 의 가장 큰 장점은 action 과 reducer를 분리함으로써
  상태 변화를 추상화 할 수 있다는 것같다. 여기서 비롯되는 장점, 사용 예를 나열하자면...
  */

  // 1. useful for toggling state
  const [value, toggleValue] = useReducer((previous) => !previous, true)
  // useState로도 구현 가능하지만 updater 의 이름을 명시적으로 줄 수가 있어서
  // 쓰고 읽기가 좋다. () => setState(prev => !prev) 와 같이 콜백함수로
  // 적어줄 필요 없이 한번에 선언 가능하다.

  // 2. forceUpdate에 유용하다. React 와 관련없는 상태가 바뀌었을 때
  const forceUpdate = useReducer((state) => state + 1, 0)[1]

  // 3. make reducer event-driven
  // action을 setter 로 쓰지말고 event로 생각하고, 어떤 event 에 의해 일어나는
  // 상태변경을 reducer 안에 묘사하자.

  return (
    <>
      <button onClick={toggleValue}>Toggle</button>
    </>
  )
}
