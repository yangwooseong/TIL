function* pseudoRandom(seed) {
  let value = seed

  while (true) {
    value = (value * 16807) % 2147483647
    yield value
  }
}

let step = 10
const g = pseudoRandom(1)
for (let i of g) {
  console.log(i)
  step--
  if (!step) g.return('foo')
}
