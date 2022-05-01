// 环境变量
console.log(process.env)

// 命令行参数
// node index.mjs one two=three four
// [
//   '/Users/zhangjiawei/.nvm/versions/node/v18.0.0/bin/node',
//   '/Users/zhangjiawei/Desktop/learn-node/process/index.mjs',
//   'one',
//   'two=three',
//   'four'
// ]
console.log(process.argv)

// Node 特有参数
// node --harmony index.mjs --version
// [ '--harmony' ]
console.log(process.execArgv)

// 当前工作目录
console.log(`Starting directory: ${process.cwd()}`)
try {
  process.chdir('../') // 切换当前工作目录
  console.log(`New directory: ${process.cwd()}`)
} catch (err) {
  console.log(`chdir: ${err}`)
}

// 标准输入/标准输出/标准错误输出
process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null)
    process.stdout.write(`data: ${chunk}`)
})
process.stdin.on('end', () => {
  process.stdout.write('end')
})

// 版本/环境等信息
console.log(`Node version: ${process.version}`)
console.log(`Node versions: ${JSON.stringify(process.versions)}`)
console.log(`Node platform: ${process.platform}`)
console.log(`Node arch: ${process.arch}`)
console.log(`Node release: ${JSON.stringify(process.release)}`)
console.log(`Node pid: ${process.pid}`)
console.log(`Node title: ${process.title}`)

// 触发警告
process.emitWarning('Something happened!', {
  type: 'CustomWarning',
  code: 'MY_WARNING',
  detail: 'This is some additional information',
})

// process.emitWarning('Something Happened!') // (node:43103) Warning: Something Happened!
// process.emitWarning('Something Happened!', 'CustomWarning') // (node:43004) CustomWarning: Something Happened!
// process.emitWarning('Something happened!', 'CustomWarning', 'WARN001') // (node:43033) [WARN001] CustomWarning: Something happened!

process.on('warning', (warning) => {
  console.warn(warning.name) // 'Warning'
  console.warn(warning.message) // 'Something happened!'
  console.warn(warning.code) // 'MY_WARNING'
  console.warn(warning.stack) // Stack trace
  console.warn(warning.detail) // 'This is some additional information'
})

// 向进程发送信号(将 signal 发送到由 pid 标识的进程)
process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.')
})

setTimeout(() => {
  console.log('Exiting.')
}, 100)

console.log('hello')
process.kill(process.pid, 'SIGHUP')
console.log('world')

// 中止进程
process.exit(0)
