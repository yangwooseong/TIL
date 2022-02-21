// 'use strict' 라고 명시하면 더 엄격하게 javascript 코드를 실행하게 된다.
// 브라우저 콘솔은 엄격 모드가 아니고 엄격 모드를 사용하기 위해서는 IIFE를 써서 함수 안에다가 'use strict'
// 선언해야 한다. 전체 스크립트 또는 함수별로 부분적으로 적용 가능하다. 
// 개발자가 실수해서 의도치 않은 동작을 할 수 있는 코드를 실행 못하게 에러를 던져 준다.
// module 안에는 자동으로 엄격모드..

// 일반적으로 js쓸 때는 엄격모드라서 실행 안되지만 콘솔에서는 가능
// 1. let, var안쓰면 global 변수 됨
a = 5

// 2. unwritable한 객체의 프로퍼티 쓰기 가능
const testObj = Object.defineProperties(
  {},
  {
    prop1: {
      value: 10,
      writable: false, // by default
    },
  },
)

testObj.prop1 = 10

// 3. 리터럴로 정의할 때 프로퍼티 두번 선언, 함수의 매개변수 중복 선언 가능
const a = {
  b: 2,
  b: 3,
}

// 4. 함수를 최상위 레벨 말고 문이나 블록내에서 선언
var arr = [1, 2, 3, 4, 5]
var index = null
for (index in arr) {
  function myFunc() {}
}

// 5. arguments가 예약어가 아님
let arguments = 10