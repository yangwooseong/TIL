// ;(function () {
//   const tick = () => {
//     for (let i = 0; i < 10 ** 9; i++) {}
//   }

//   console.log('start')

//   setTimeout(() => console.log('macro task queue'), 0)

//   new Promise((res) => {
//     console.log('promise constructor is added to call stack immediately')
//     tick()
//     res(1)
//   })
//     .then((res) => {
//       console.log('micro task queue 2')
//       tick()
//       return res
//     })
//     .then((res) => {
//       console.log('micro task queue 3')
//       tick()
//       return res
//     })

//   console.log('end')
// })()

// call stack -> micro task queue -> macro task queue
// promise constructor 자체는 task queue 에 들어가지 않고 바로 실행됨
// micro task queue 가 전부 없어져야 macro task queue에서 pop이 됨

const greet = async () => 'task 1'

const myFunc = async () => {
  console.log('start')
  setTimeout(() => {
    console.log('called')
  }, 0)
  const res1 = await greet()
  const res2 = await Promise.resolve('task 2')
  console.log(res1)
  console.log(res2)
  console.log('end')
}

myFunc()
console.log('call stack here')
// start -> call stack here -> task 1 -> task 2 -> end -> called
// await 이후는 한 번 중지된 다음에 micro task queue 에 들어간다.
