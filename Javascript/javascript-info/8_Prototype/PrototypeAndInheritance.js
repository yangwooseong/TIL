// "프로토타입"이란?
// 객체의 hidden property 인 [[Prototype]]가 참조하는 객체
// 객체의 프로퍼티를 읽을 때 없으면 프로토타입에서 객체를 찾는다.

// __proto__: [[Prototype]]의 getter, setter (접근자 프로퍼티)

// 1. 프로토타입은 읽기 전용이다. 접근자 프로퍼티에 값을 할당할 때는 프로토타입의 setter 가 호출된다.

let animal = {
  eats: true,
  walk() {
    console.log('walk')
  },
}

let rabbit = {
  __proto__: animal,
}

rabbit.walk = () => {
  console.log('걷는다.')
} // animal 의 walk 에는 영향을 미치지 않음

animal.walk()
rabbit.walk()

// 접근자 프로퍼티로 값 할당하면 Prototype 의 setter 가 호출됨

let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  },

  get fullName() {
    return `${this.name} ${this.surname}`
  },
}

let admin = {
  __proto__: user,
  isAdmin: true,
}

console.log(admin.fullName)

admin.fullName = 'Yang wooseong'

console.log(user)
console.log(admin)

// 2. Prototype 에 있는 this 는 호출하는 대상을 가리킨다.

animal = {
  walk() {
    console.log(this.name + ' walks')
  },
}

rabbit = {
  name: 'rabbit',
  __proto__: animal,
}

rabbit.walk()

// 3. for .. in는 prototype 의 (enumerable flag가 true인) 키까지 순회 하지만,
// Object.keys()는 자신의 키만 순회한다.
