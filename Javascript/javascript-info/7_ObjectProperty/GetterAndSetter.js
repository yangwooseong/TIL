// 객체 프로퍼티는 2가지 종류로 나뉜다.
// 1. Data property : 일반적으로 알고 쓰고 있는 그거
// 2. Accessor peoperty : 실제로는 value를 얻고 설정할 때 호출되는 함수지만 외부에서는 일반적인 프로퍼티인 것처럼 사용된다.

// Accessor property 는 getter, setter 2종류가 있다.

let user = {
  name: 'john',
  surname: 'smith',

  get fullName() {
    return `${this.name} ${this.surname}`
    // 객채 안에서 다른 value 들에 접근 가능하다.
  },
  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  }, // set 함수 조작해서 설정하고자 하는 fullname에 제약 걸 수 있다.
}

console.log(user.fullName)
user.fullName = 'yang wooseong'
console.log(user, user.fullName)
