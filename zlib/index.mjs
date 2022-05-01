import { createBrotliCompress, createDeflate, createGunzip, createGzip, deflate, unzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import http from 'http'

// 压缩文件
const src = createReadStream('./input.txt')
const dest = createWriteStream('./input.txt.gz')
const gzip = createGzip()
try {
  // 使用 pipeline 方法比 pipe 方法更好
  await pipeline(src, gzip, dest)
} catch (e) {
  console.error('Pipeline failed.', e)
}

// 解压文件
const src1 = createReadStream('./input.txt.gz')
const dest1 = createWriteStream('./input1.txt')
const gunzip = createGunzip()
try {
  await pipeline(src1, gunzip, dest1)
} catch (e) {
  console.error('Pipeline failed.', e)
}

// 压缩数据
const input = 'hello world'
deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err)
    process.exitCode = 1
  }
  console.log(buffer.toString('base64'))
})

// 解压数据
unzip(Buffer.from('eJzLSM3JyVcozy/KSQEAGgsEXQ==', 'base64'), (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err)
    process.exitCode = 1
  }
  console.log(buffer.toString())
})

// 压缩 HTTP 请求和响应
const server = http.createServer((req, res) => {
  const raw = createReadStream('./index.html')

  // 存储资源的压缩版本和未压缩版本
  res.setHeader('Vary', 'Accept-Encoding')
  const acceptEncoding = req.headers['accept-encoding'] || ''

  if (/\bdeflate\b/.test(acceptEncoding)) {
    res.writeHead(200, { 'Content-Encoding': 'deflate' })
    pipeline(raw, createDeflate(), res)
  } else if (/\bgzip\b/.test(acceptEncoding)) {
    res.writeHead(200, { 'Content-Encoding': 'gzip' })
    pipeline(raw, createGzip(), res)
  } else if (/\bbr\b/.test(acceptEncoding)) {
    res.writeHead(200, { 'Content-Encoding': 'br' })
    pipeline(raw, createBrotliCompress(), res)
  } else {
    res.writeHead(200, {})
    pipeline(raw, res)
  }
})

server.listen('3000')
