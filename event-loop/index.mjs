// macroTask: I/O setTimeout setInterval setImmediate requestAnimationFrame(browser)
// microTask: process.nextTick Promise MutationObserver(browser)

function main() {
  setTimeout(() => {
    console.log(12)
    Promise.resolve().then(() => {
      console.log(13)
    })
  })

  console.log(1)

  setImmediate(() => console.log(10))

  new Promise((resolve) => {
    console.log(2)
    resolve()
    console.log(3)
  }).then(() => {
    process.nextTick(() => console.log(9))
    Promise.resolve().then(() => {
      console.log(6)
      Promise.resolve().then(() => console.log(7))
    })
    console.log(5)
    setTimeout(() => {
      console.log(14)
    })
    setImmediate(() => console.log(11))
  })

  process.nextTick(() => console.log(8))

  console.log(4)
}

main()

// process.nextTick(() => console.log(1))
// Promise.resolve().then(() => console.log(2))
// Promise.resolve().then(() => {
//   console.log(3)
//   process.nextTick(() => console.log(4))
//   Promise.resolve().then(() => console.log(5))
// }).then(() => {
//   console.log(6)
// })
// 输出 2 3 5 6 1 4
