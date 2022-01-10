/*
1. 0.1 + 0.2 != 0.3

0.3을 IEEE-754 부동소수점 표현으로 나타내려면 2의 배수가 아니기 때문에
53자리수의 mantissa로 나타내려면 반올림을 할 수밖에 없음
0.2와 0.1또한 마찬가지 => 좌변에서는 반올림 두번, 우변에서는 반올림 한번이 일어나서
안맞게 됨. 
*/
console.log(0.1 + 0.2 == 0.3) // false

let a = new String('abc')

/*
2. new String('abc') is an array-like object yet immutable

a is an array-like object whose value is {0: 'a', 1:'b', 2:'c', length: 3}
a cannot be modified

*/

a.length = 3
console.log(a.length)

/*
3. object and property

There are two types of properties, which are data property and accessor property
Every key has 6 property attributes

*/

let b = {
  a: 1,
}
Object.preventExtensions(b)
Object.seal(b)
