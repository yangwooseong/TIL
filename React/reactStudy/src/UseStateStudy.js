import { useReducer, useState } from 'react'

export const UseStateStudy = () => {
  /*
  1. Any time to compute new state based on previous state, use a function update.

  2. use useReducer when toggle something. useReducer 
  - can name toggle function
  - reduces repetitive boilerplate
  
  3. Use lazy initial state for expensive computation
  - 최초 렌더링에만 실행되고 그 이후에는 실행이 안된다. 
  - expensive computation 이 아니면 쓰지 말자. 
  - e.g. map, filter, find, localstorage의 접근, Date 

  4. React state update batching: 
  - 원래는 React event handler 가 실행되는 도중에 일어나는 업데이트만 batching 하고
  - 나머지(setTimeout, promises, native event handler)에서는 batching을 안하는 거였는데
  - 18version 부터는 전부 다 batching 처리해준다.
  */
  const [count, setCount] = useState(0)
  const [value, toggleValue] = useReducer((previous) => !previous, false)
  const expensiveComputing = (number) => {
    for (let i = 0; i < 10 ** 9; i++) {}
    return number + 1
  }

  // const [number, setNumber] = useState(expensiveComputing(0))
  const [number2, setNumber2] = useState(() => expensiveComputing(0))

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={toggleValue}>{value ? 'true' : 'false'}</button>
      {/* <button onClick={() => setNumber(number + 1)}>{number}</button> */}
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </>
  )
}
