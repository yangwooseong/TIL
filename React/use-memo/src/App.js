import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { ChildComponent } from './components/ChildComponent'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // const doubleNumber = useMemo(() => slowFuntion(number), [number])
  // 사용법 1) rerendering 되더라도 연산량이 많은 연산을 피하고 싶을 때
  const doubleNumber = slowFuntion(number)

  // const themeStyles = useMemo(
  //   () => ({
  //     backgroundColor: dark ? 'black' : 'white',
  //     color: dark ? 'white' : 'black',
  //   }),
  //   [dark],
  // )
  // 사용법 2) object의 reference 를 유지하고 싶을 때
  // useMemo 를 안해주면 rendering 이 다시 일어날 때마다
  // 새로운 reference를 가지는 themeStyles 가 만들어지면서
  // useEffect안의 콜백이 실행되게 된다.

  // ** Anti pattern : themeStyles가 dark 에 의존하는 것이 아니라
  // 정적인 object라면 useMemo를 피하고 useRef를 이용하는게 올바른 사용법이다.
  // useRef 를 사용하면 reference 를 그대로 유지하기 때문에 rerendering 되더라도
  // useEffect안의 콜백이 실행되지 않는다.
  let myThemeStyles = useRef({
    backgroundColor: 'black',
  })

  function slowFuntion(num) {
    console.log('calling slow function')
    for (let i = 0; i <= 10 ** 9; i++) {}
    return num * 2
  }

  useEffect(() => {
    console.log('Theme Changed')
    slowFuntion(1)
  }, [myThemeStyles])

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={myThemeStyles}>{doubleNumber}</div>
    </>
  )
}

export default App
