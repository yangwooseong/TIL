// 1. Object.create(proto, [descriptors])

let animal = {
  eats: true,
}

let rabbit = Object.create(animal, {
  jumps: {
    value: 'haha',
    enumerable: true,
    configurable: true,
    writable: true,
  },
})

console.log(rabbit)
console.log(
  Object.create(
    Object.getPrototypeOf(rabbit),
    Object.getOwnPropertyDescriptors(rabbit),
  ),
)
