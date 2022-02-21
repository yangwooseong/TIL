const promiseFunction = () =>
  new Promise((resolve) => setTimeout(() => resolve('result'), 1000))
function test() {
  Array(10)
    .fill(0)
    .forEach(async () => {
      const result = await promiseFunction()
      console.log(result)
    })
}

async function testWithFor() {
  for (let i = 0; i < 10; i++) {
    const result = await promiseFunction()
    console.log(result)
  }
}

test() // 1초 뒤에 result 10번
testWithFor() // 1초에 result 1개씩

// forEach polyfill을 보면 callback만 호출하고 다음으로 넘어감.
// 즉 호출은 차례차례 하되, 호출이 종료할때까지 기다려주지 않기 떄문에
// resolve되는 건 신경 안쓰고 넘어가게 된다.

Array.prototype.forEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this)
  }
}

// map 역시 callback 만 호출
Promise.all([1, 2, 3].map(async () => await promiseFunction())).then((v) =>
  console.log(v),
)
