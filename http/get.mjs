import https from 'https'
import http from 'http'

// 从本地服务器获取数据
http.get('http://localhost:8000/', (res) => {
  let data = ''
  res.on('data', (chunk) => {
    data += chunk
  })
  res.on('end', () => {
    try {
      console.log('localhost:8000: ', JSON.parse(data))
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`)
})

// 效果同上
const req = http.request({
  protocol: 'http:',
  hostname: 'localhost',
  method: 'get',
  port: 8000,
  path: '/',
}, (res) => {
  let data = ''
  res.on('data', (chunk) => {
    data += chunk
  })
  res.on('end', () => {
    try {
      console.log('localhost:8000: ', JSON.parse(data))
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`)
})
req.end()

// 从其它服务器获取数据
https.get('https://www.v2ex.com/api/members/show.json?id=1', (res) => {
  let data = ''
  res.on('data', (chunk) => {
    data += chunk
  })
  res.on('end', () => {
    try {
      console.log('v2ex: ', JSON.parse(data))
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`)
})
