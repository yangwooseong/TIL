// 어떤 객체를 new 생성자 함수() 문법을 사용해 만들면, 객체는 생성자 함수를 상속한다.
// 객체의 프로토타입은 생성자 함수의 프로토 타입이 된다.

let animal = {
  eats: true,
}

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal

let rabbit = new Rabbit('흰 토끼') //  rabbit.__proto__ == animal

console.log(rabbit.eats) // true

// Function has default property which is {constructor: function}

function Rabbitt() {}

console.log(Rabbitt.prototype.constructor === Rabbitt) // true
