/*
iterable 객체 == 반복 가능한 객체 == for of 반복문을 적용할 수 있는 객체 == Symbol.Iterator 메서드를 갖는 객체

for of -> 객체의 Symbol.Interator 메서드를 호출하고 다음 값을 찾을 떄마다 메서드의 next() 함수를 호출하게 됨.

iterable <-> array-like

iterable has Symbol.iterator method
array-like has index and length property e.g. scope chain

Both of them can be converted into array by using Array.from method

*/

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

const aclean = (arr) => {
  let map = new Map()

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  }

  console.log(map)

  return Array.from(map.values())
}

console.log(aclean(arr))
