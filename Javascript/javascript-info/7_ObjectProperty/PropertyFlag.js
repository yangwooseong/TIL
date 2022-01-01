// 객체의 프로퍼티에는 프로퍼티의 성질을 명시하는 3가지 플래그가 존재
// 1. wrtiable: 값수정 가능한지
// 2. enumerable: 반복문을 통해 나열 가능한지
// 3. configurable: 프로퍼티 삭제나 수정이 가능한지

// 관련 메소드 : Object.getOwnPropertyDescriptor , Object.defineProperty

let user = {
  name: 'user',
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))
Object.defineProperty(user, 'gender', { value: 'male', enumerable: true })
console.log(Object.getOwnPropertyDescriptor(user, 'gender'))

let user_copy = {}

for (let key in user) {
  user_copy[key] = user[key]
}

console.log(user_copy)
console.log(Object.getOwnPropertyDescriptors(user_copy)) // property 의 플래그는 복사 안해줌

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user))
// defineProperties 메소드를 쓰면 프로퍼티의 플래그까지 복사 가능
console.log(Object.getOwnPropertyDescriptors(clone))
