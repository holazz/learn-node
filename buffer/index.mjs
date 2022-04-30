import { Buffer } from 'buffer'

console.log(Buffer.alloc(10)) // 长度为10 初始值为 0

console.log(Buffer.alloc(10, 1)) // 长度为10 初始值为 1

console.log(Buffer.allocUnsafe(10)) // 长度为10 初始值未定义

console.log(Buffer.from([1, 2, 3])) // <Buffer 01 02 03>

const buf = Buffer.from('hello world', 'utf8') // 默认utf8编码
console.log('toString: ', buf.toString())
console.log('toJSON: ', buf.toJSON())
console.log('keys: ', buf.keys())
console.log('values: ', buf.values())
console.log('entries: ', buf.entries())

// length & bytelength
const str = '\u00BD + \u00BC = \u00BE'
console.log(`${str}: ${str.length} characters, `
            + `${Buffer.byteLength(str, 'utf8')} bytes`) // ½ + ¼ = ¾: 9 characters, 12 bytes
console.log(Buffer.from(str).length === Buffer.byteLength(str, 'utf8')) // true

// 乱码
const letter = 'é'
const buff = Buffer.from(letter)
console.log(buff.length) // 2

// 将传入的 buffer 数据复制到新的 Buffer 实例上
const buf1 = Buffer.from('buffer')
const buf2 = Buffer.from(buf1)

// buffer 比较(只要内容相同就返回true)
const buf3 = Buffer.from('627566666572', 'hex')
console.log(buf1.equals(buf2)) // true
console.log(buf1.equals(buf3)) // true

// compare
const buf4 = Buffer.from('ABC')
const buf5 = Buffer.from('BCD')
const buf6 = Buffer.from('ABCD')
console.log(buf4.compare(buf4)) // 0 (buf4 = buf4)
console.log(buf4.compare(buf5)) // -1 (buf4 < buf5)
console.log(buf4.compare(buf6)) // -1 (buf4 < buf6)
console.log(buf5.compare(buf6)) // 1 (buf5 > buf6)

console.log([buf4, buf5, buf6].sort(Buffer.compare))

// 连接
const buf7 = Buffer.from('ABC')
const buf8 = Buffer.from('BCD')
const totalLength = buf7.length + buf8.length
const buf9 = Buffer.concat([buf7, buf8], totalLength)
console.log(buf9.toString()) // ABCBCD

// 拷贝
const buf10 = Buffer.from([1, 2])
const buf11 = Buffer.alloc(2)
buf10.copy(buf11)
console.log(buf11) // <Buffer 01 02>

// 查找
const buf12 = Buffer.from('this is a buffer')
console.log(buf12)
console.log(buf12.indexOf('this')) // 0
console.log(buf12.indexOf('is')) // 2
console.log(buf12.indexOf(Buffer.from('a buffer'))) // 8
console.log(buf12.indexOf(97)) // 8 (97 是 'a' 的十进制 ASCII 值)
console.log(buf12.indexOf(Buffer.from('a buffer example'))) // -1
console.log(buf12.indexOf(Buffer.from('a buffer example').slice(0, 8))) // 8

const utf16Buffer = Buffer.from('\u039A\u0391\u03A3\u03A3\u0395', 'ucs2')
console.log(utf16Buffer.indexOf('\u03A3', 0, 'ucs2')) // 4
console.log(utf16Buffer.indexOf('\u03A3', -4, 'ucs2')) // 6

// 写入
const buff13 = Buffer.alloc(4)
buff13.write('a')
console.log(buff13) // <Buffer 61 00 00 00>
buff13.write('ab')
console.log(buff13) // <Buffer 61 62 00 00>

// 填充
const buff14 = Buffer.alloc(20).fill('h')
console.log(buff14.toString()) // hhhhhhhhhhhhhhhhh
