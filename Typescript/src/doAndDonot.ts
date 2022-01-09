// primitive type: boolean, string, number, null, undefined, symbol
// is immutable

/*
Wrapper Object

string, number, boolean 와 같은 원시타입을 new 키워드로 생성하면 
원시타입에 대한 wrapper object가 만들어진다.
*/

console.log(typeof String(1337)) // string
console.log(typeof new String(321)) // object as below
// {
//   0: '3',
//   1: '2',
//   2: '1',
//   length: 3
// }

/*
Auto-boxing

원시 타입의 프로퍼티 혹은 메소드를 호출할 때 wrapper object 를 생성한뒤
그 object의 프로퍼티 혹은 메소드에 접근한다. 원본에는 영향을 미치지 않는다. 
*/

console.log(String('dog').constructor === String) // true

/*
1. Don't user types Number, String, Boolean, Symbol, or Object
They are "non-primitive objects" which are almost never used in Javascript
Instead of Object type, use object type
Object type 은 뭐지?
*/

// grammatically ok but this is barely used.
const nonPrimitiveNumberType: Number = new Number(1)

// const primitivenumberType: number = new Number(1) // error
const primitivenumberType: number = Number(1) // OK
