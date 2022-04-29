import path from 'path'

const url = '/foo/bar/baz/my/index.html'

// 获取文件名
console.log(path.basename(url)) // => index.html
console.log(path.basename(url, '.html')) // => index

// 获取目录名
console.log(path.dirname(url)) // => /foo/bar/baz/my

// 获取文件扩展名
console.log(path.extname(url)) // => .html

// 文件路径对象转字符串
// 如果提供 `dir`、`root` 和 `base`，则将返回 `${dir}${path.sep}${base}`。`root` 将被忽略
// 如果未指定 `dir`，则将使用 `root`
// 如果未指定 `base`，则将使用 `name` + `ext`
console.log(path.format({
  root: '/',
  dir: '/foo/bar/baz/my',
  base: 'index.html',
  ext: '.html',
  name: 'index',
}))

// 文件路径字符串转对象
console.log(path.parse(url))

// 路径连接
console.log(path.join('/foo', 'bar', 'baz/my', 'index.html')) // => /foo/bar/baz/my/index.html
console.log(path.join('/foo', 'bar', '/baz/my', 'index.html')) // => /foo/bar/baz/my/index.html

// 路径解析(将路径或路径片段的序列解析为绝对路径)
console.log(path.resolve('/foo', 'bar', 'baz/my', 'index.html')) // => /foo/bar/baz/my/index.html
console.log(path.resolve('/foo', 'bar', '/baz/my', 'index.html')) // => /baz/my/index.html

// 规范化给定的 path，解析 '..' 和 '.' 片段
console.log(path.normalize('/foo/bar/./baz/my/..'))

// 获取相对路径
console.log(path.relative('/foo/bar/baz', '/foo/bar/baz/my/index.html')) // => my/index.html

// 判断 path 是否为绝对路径

console.log(path.isAbsolute('/foo/bar/baz')) // => true
console.log(path.isAbsolute('foo/bar/baz')) // => false
console.log(path.isAbsolute('./foo/bar/baz')) // => false

// 平台相关
// path.posix：path 方法的 POSIX 实现
// path.win32：path 方法的 Windows 实现
// path.sep：路径分隔符。linux -> /，windows -> \
// path.delimiter：路径定界符。linux -> :，windows -> ;
