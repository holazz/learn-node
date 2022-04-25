import http from 'http'

const postData = JSON.stringify({
  name: 'zz',
  age: '26',
})

const options = {
  protocol: 'http:',
  hostname: 'localhost',
  method: 'post',
  port: 3000,
  path: '/data',
  headers: {
    'content-type': 'application/json',
    'content-length': Buffer.byteLength(postData),
  },
}

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`)
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  })
  res.on('end', () => {
    console.log('No more data in response.')
  })
})

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`)
})

// 将数据写入请求正文
req.write(postData)
req.end()
