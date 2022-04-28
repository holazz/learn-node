import fs, { promises as fsp } from 'fs'

// 删除文件
try {
  await fsp.unlink('./tmp/1.txt')
} catch (e) {
  console.log(e.message)
}

// 判断文件权限
try {
  await fsp.access('./tmp/2.txt')
} catch (e) {
  console.log(e.message)
}

// 向文件追加内容
try {
  const content = `${new Date().toLocaleString()}\n`
  await fsp.appendFile('./tmp/2.txt', content, 'utf-8')
} catch (e) {
  console.log(e.message)
}

// 更改文件权限
try {
  await fsp.chmod('./tmp/2.txt', '777')
} catch (e) {
  console.log(e.message)
}

// 复制文件
try {
  await fsp.copyFile('./tmp/2.txt', './tmp/2-copy.txt')
} catch (e) {
  console.log(e.message)
}

// 复制文件夹 bug???
try {
  await fsp.cp('./tmp', './tmp-copy')
} catch (e) {
  console.log(e.message)
}

// 创建硬链接
try {
  await fsp.link('./tmp/2-copy.txt', 'hardlinkToFile')
  await fsp.unlink('./tmp/2-copy.txt')
  console.log(await fsp.readFile('hardlinkToFile', 'utf-8'))
} catch (e) {
  console.log(e.message)
}

// 创建符号链接(软链接)
try {
  await fsp.symlink('./tmp/2-copy.txt', 'symlinkToFile')
  await fsp.unlink('./tmp/2-copy.txt')
  console.log(await fsp.readFile('symlinkToFile', 'utf-8'))
} catch (e) {
  console.log(e.message)
}

// 找出符号链接指向的真实路径
try {
  console.log(await fsp.readlink('symlinkToFile'))
} catch (e) {
  console.log(e.message)
}

// 创建目录
// recursive 参数为 true 时，创建多级目录
try {
  await fsp.mkdir('./tmp/hello', { recursive: true })
} catch (e) {
  console.log(e.message)
}

// 删除目录
// 递归删除使用 rm 设置 recursive: true
try {
  await fsp.rmdir('./tmp/hello/zz') // 不能递归删除
  await fsp.rm('./tmp/hello/zz', { recursive: true, force: true })
} catch (e) {
  console.log(e.message)
}

// 创建临时目录
try {
  await fsp.mkdtemp('./tmp/zz')
} catch (e) {
  console.log(e.message)
}

// 读取文件
try {
  console.log(await fsp.readFile('./tmp/2.txt', 'utf-8'))
} catch (e) {
  console.log(e.message)
}

// 写入文件
try {
  const content = await fsp.readFile('./tmp/2.txt', 'utf-8')
  await fsp.writeFile('./tmp/2.txt', `${content}\nxxxxxxx\n`)
} catch (e) {
  console.log(e.message)
}

// 读取文件和目录信息
try {
  const list = await fsp.readdir('./tmp')
  for (const item of list) {
    const stats = await fsp.stat(`./tmp/${item}`)
    console.log(`${item} is a ${stats.isDirectory() ? 'directory' : 'file'}`)
  }
} catch (e) {
  console.log(e.message)
}

// 真实路径
try {
  console.log(await fsp.realpath('./tmp/2-copy.txt'))
  console.log(await fsp.realpath('hardlinkToFile'))
  console.log(await fsp.realpath('symlinkToFile'))
} catch (e) {
  console.log(e.message)
}

// 重命名
try {
  await fsp.rename('./tmp/3.txt', './tmp/3-rename.txt')
} catch (e) {
  console.log(e.message)
}

// 获取文件状态
try {
  console.log(await fsp.stat('./tmp/2.txt'))
} catch (e) {
  console.log(e.message)
}

// 监视文件或目录的变化
// 优先使用 watchFile
try {
  console.log(await fsp.watch('./tmp/2.txt'))
} catch (e) {
  console.log(e.message)
}
