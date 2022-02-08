/*
currying 이란, 인자 여러개를 갖는 함수를 인자 하나만 갖는 고차함수로
변환하는 과정
- 인자를 따로 따로 구별해서 호출할 수 있다는 것이 근본적인 장점같다. 
- 다변수 함수 f(x,y)를 x = k 로 고정한 다음에, 
f(k, y)처럼 1변수 함수로 사용할 수 있음.
*/

const curry = (f) => (a) => (b) => f(a, b)

const sum = (a, b) => a + b

const curriedSum = curry(sum)

console.log(curriedSum(1)(2))

// 아래는 고급 커리

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args)
//     } else {
//       return function (...args2) {
//         console.log(args2)
//         return curried.apply(this, args.concat(args2))
//       }
//     }
//   }
// }

// function sum(a, b, c) {
//   return a + b + c
// }

// let curriedSum = curry(sum)
// console.log(curriedSum(1, 2, 3))
// console.log(curriedSum(1)(2, 3))
// console.log(curriedSum(1)(2)(3))

// Infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b)
    return a
  }
}

console.log(add(1)(2)(3)(4)(5)()) // cool!
