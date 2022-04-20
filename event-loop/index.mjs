// process.nextTick 始终在 setTimeout 和 setImmediate 之前执行
// 延迟 0 毫秒的 setTimeout 与 setImmediate 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行

const bar = () => console.log('bar')

const foo = () => {
  console.log('foo')

  setImmediate(() => console.log('setImmediate1'))
  setTimeout(() => console.log('setTimeout1'), 0)
  setImmediate(() => console.log('setImmediate2'))
  setTimeout(() => console.log('setTimeout2'), 0)

  process.nextTick(() => {
    console.log('nextTick')
  })

  new Promise(
    resolve => resolve('promise')
  ).then(console.log)

  bar()
}

foo()

// 执行结果
// foo
// bar
// promise
// nextTick
// setImmediate1
// setImmediate2
// setTimeout0
// setTimeout1
// setTimeout2
