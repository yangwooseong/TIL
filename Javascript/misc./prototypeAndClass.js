function Animal(name) {}

Animal.prototype.sleep = function () {
  console.log('this: ', this)
  console.log(this.name + ' sleep')
}

function Dog(name) {
  this.name = name
}

Dog.prototype = Object.create(Animal.prototype)
// 혹은 Dog.prototype = new Animal()
Dog.prototype.bark = function () {
  console.log(this.name + ' bark')
}

console.log(Animal.prototype)
console.log(Dog.prototype)

const foo = new Dog('foo')
foo.bark()
foo.sleep()
console.log(foo.__proto__)

class AnimalClass {
  constructor(name) {
    this.name = name
  }

  sleep() {
    console.log('this: ', this)
    console.log(this.name + ' sleep')
  }
}

class DogClass extends AnimalClass {
  constructor(name) {
    super(name)
  }

  bark() {
    console.log(this.name + ' bark')
  }
}

console.log(AnimalClass.prototype)
console.log(DogClass.prototype)

const bar = new DogClass('bar')
bar.sleep()
bar.bark()
