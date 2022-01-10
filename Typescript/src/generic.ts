interface Something<T> {
  name: string
} // Not OK

interface SomethingElse<T> {
  name: string
  some: T
} // OK

let a: SomethingElse<number> = {
  name: 'yang',
  some: 15,
}

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T,
) => ({ ...obj, fullName: obj.firstName + ' ' + obj.lastName })

const v = makeFullName({ firstName: 'hello', lastName: 'world', age: '2015' })
