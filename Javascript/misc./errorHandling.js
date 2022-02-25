const foo = async () => {
  try {
    await new Promise(() => {
      throw new Error('hihi')
    })
  } catch (e) {
    console.log(e)
  }
}
foo() // catch 안에서 error 처리 가능
try {
  new Promise(() => {
    throw new Error('hihi')
  })
} catch (e) {
  console.log(e)
} // catch 안에서 error 처리 불가능

// https://helloworldjavascript.net/pages/290-exception.html
