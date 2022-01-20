import React from 'react'

function ChildComponent({ value }) {
  console.log('re rendered')
  return <div>child</div>
}

const Child = React.memo(ChildComponent)
// props 가 변하지 않으면 re render 안됨
export { Child as ChildComponent }
