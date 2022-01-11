console.log('hello from typescript2')

const obj1 = {
  abc: 'string',
  d: {
    e: 'ab',
  },
} as const

const obj2 = {
  abc: 'string',
  d: {
    e: 'ab',
  },
}
/* 
obj1은 안에 있는 property 전부 value로 타입이 고정되지만
obj2는 string 타입이다. obj2는 value 수정 가능하지만 obj1는 불가능
*/

const permissions = ['read', 'write', 'execute'] as const
// permissions[1] = 'ha' // compile error

type Permission = typeof permissions[number]
// union type 을 쉽게 생성 가능하다.
const b: Permission = 'read'
