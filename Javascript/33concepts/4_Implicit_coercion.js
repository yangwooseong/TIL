/*
암시적 형변환 : 

1. string 일 경우
+-/* 에서 
+는 string을 으로 변환해서 이어붙이고
다른 ops 는 숫자로 취급해서(Number로 변환해서) 계산한다.
Number로 변환할 때 문자가 들어있으면 NaN이 된다. 

*/
console.log('1======')
console.log(3 + '3') // '33'
console.log(1 - '1a') // NaN
console.log(1 + '1a') // '11a'
console.log(1 + []) // 1
console.log(Number([]) === 0) // true

/*
2. object 일 경우
.toString() 메소드가 호출된다. 
*/

console.log('2======')
const foo = {
  toString: () => 4,
}
console.log(2 * foo === 8)

/*
3. Array 일 경우
join 메소드를 호출하는 것과 같다.

*/

console.log('3======')
console.log('me' + [1, 2, 3]) // "me1,2,3"
console.log(4 + [1, 2, 3]) // "41,2,3"
console.log(2 * [] === 0)
// 2 * [] === 2 * "" === 2 * Number("") === 0

// 정리하면 더하기 연산자에서는 문자의 우선순위가 숫자, 함수, 객체보다 높다.
// 나머지 연산자에서는 숫자가 문자보다 높다.

/*
4. 동등 연산자일 경우에도 형변환이 일어난다.
*/

0 == '0' // basically equal to the reason of 55 == '55'
0 == false
'' == false
'' == 0
'' == '0' // false because there is no implicit coercion ?
