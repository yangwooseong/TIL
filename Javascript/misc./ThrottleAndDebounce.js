// closure 를 이용하면 higher order function을 만들어서 재밌는 구현을 할 수 있다.
// 물론 면접때 몰라서 정리하는 차원에서...

let normalCount = 0
const normalScroll = document.querySelector('.normal-scroll')
const normalFunc = () => {
  normalCount += 1
  normalScroll.innerHTML = `일반 스크롤링: ${normalCount}`
}

const debounced = (callback) => {
  let timer

  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => callback(), 1000)
  }
}

const throttled = (callback) => {
  let timer
  console.log(timer)
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        callback()
        timer = undefined
      }, 1000)
    }
  }
}

// window.addEventListener('scroll', normalFunc)
// window.addEventListener('scroll', debounced(normalFunc))
window.addEventListener('scroll', throttled(normalFunc))
