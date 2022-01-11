export {}

const permissions = ['read', 'write', 'execute'] as const
// permissions[1] = 'ha' // compile error

type Permission = typeof permissions[number]

interface Person {
  name: string
  age: number
  address: string
}

interface Person2 {
  name: string
  age: number
}

type Person3 = Pick<Person, 'name' | 'age'>
// Person 타입에서 새로운 타입 생성 가능
