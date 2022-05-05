import { exec, execFile, fork, spawn } from 'child_process'

// child_process.exec(): 衍生 shell 并在该 shell 中运行命令，完成后将 stdout 和 stderr 传给回调函数。
// child_process.execFile(): 与 child_process.exec() 类似，不同之处在于，默认情况下，它直接衍生命令，而不先衍生 shell。
// child_process.fork(): 衍生新的 Node.js 进程并使用建立的 IPC 通信通道（其允许在父子进程之间发送消息）调用指定的模块。

// https://m.php.cn/article/482872.html
// 创建 node 子进程用 fork，因为自带通道方便通信。
// 创建非 node 子进程用 execFile 或 spawn。如果输出内容较少用 execFile，会缓存结果并传给回调方便处理；如果输出内容多用 spawn，使用流的方式不会占用大量内存。
// 执行复杂的、固定的终端命令用 exec，写起来更方便。但一定要记住 exec 会创建 shell，效率不如 execFile 和 spawn，且存在命令行注入的风险。

const ls = spawn('ls', ['-lh', '/'], {
  shell: false,
})

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})

execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) throw error
  console.log(stdout)
})

// ipc
const child = fork('./child.mjs') // spawn('node', ['./child.mjs'])
child.on('message', (msg) => {
  console.log('Message from child', msg)
})
child.send({ from: 'parent' })
