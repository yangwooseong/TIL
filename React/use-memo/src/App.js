import './App.css'
import { useCallback, useMemo, useState } from 'react'
import { ChildComponent } from './components/ChildComponent'

function App() {
  const [value, setValue] = useState({ name: '', id: '' })
  const onChange = (e) => {
    const { value, name } = e.target
    setValue((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const foo = () => {
    console.log('foo')
    return 'foo'
  } // re render 될때마다 호출됨

  const bar = useMemo(() => {
    console.log('bar')
    return 'bar'
  }, [value.name]) // re render 되더라도 value.name 이 변하지 않으면 호출 안됨

  return (
    <div className='App'>
      <div>{foo()}</div>
      <div>{bar}</div>
      <input value={value.name} name={'name'} onChange={onChange} type='text' />
      <input value={value.id} name={'id'} onChange={onChange} type='text' />
      <ChildComponent props={value.name} />
    </div>
  )
}

export default App
