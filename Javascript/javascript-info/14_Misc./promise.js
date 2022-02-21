const promise = new Promise((res, rej) => {
  setTimeout(() => res(2), 2000)
}).then(() => console.log('here'))
console.log('called')
