import { fetchDog, fetchCat, fetchRat } from './api/mock.js'

const fetchCat = () => new Promise((res) => setTimeout(() => res('cat'), 1000))
const fetchDog = () => new Promise((res) => setTimeout(() => res('dog'), 2000))
const fetchRat = () => new Promise((res) => setTimeout(() => res('rat'), 3000))

function* asyncFuncWithGenerator() {
  const cat = yield fetchCat()
  console.log('doing with some process with ', cat)
  const dog = yield fetchDog()
  console.log('doing with some process with ', dog)
  const rat = yield fetchRat()
  console.log('doing with some process with ', rat)
}

const generatorWrapper = (generator) => {
  const gen = generator()
  const helper = (yielded) => {
    if (!yielded.done) {
      // yielded.value : Promise
      yielded.value.then((data) => {
        // console.log(data)
        helper(gen.next(data))
      })
    }
  }
  return helper(gen.next())
}

async function asyncFuncWithAwait() {
  const cat = await fetchCat()
  console.log('doing with some process with ', cat)
  const dog = await fetchDog()
  console.log('doing with some process with ', dog)
  const rat = await fetchRat()
  console.log('doing with some process with ', rat)
}

generatorWrapper(asyncFuncWithGenerator)
asyncFuncWithAwait()

// 완전히 같은 결과가 나온다!!!
