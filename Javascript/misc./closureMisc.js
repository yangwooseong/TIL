const generatePromise = (time, name) => {
  return new Promise((res) =>
    setTimeout(() => {
      res(name)
    }, time),
  )
}

let lastPromise
const resolveLastPromise = (pro) => {
  return () => {
    if (lastPromise) {
      return lastPromise.then((res) => {
        lastPromise = undefined
        return res
      })
    } else {
      lastPromise = pro
      return lastPromise
    }
  }
}

;(function () {
  resolveLastPromise(generatePromise(2000, 'cat'))().then((res) =>
    console.log(res),
  )
  resolveLastPromise(generatePromise(1000, 'dog'))().then((res) =>
    console.log(res),
  )

  setTimeout(() => {
    resolveLastPromise(generatePromise(1000, 'rat'))().then((res) =>
      console.log(res),
    )
  }, 3000)
})()

// 2초 뒤에 cat, 1초 뒤에 dog => 2초 뒤에 cat 두번, cleanup, 4초 뒤 rat
