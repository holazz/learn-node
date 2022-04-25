import http from 'http'
import https from 'https'

const serve = http.createServer((req, res) => {
  https.get('https://www.v2ex.com/api/members/show.json?id=1', (result) => {
    let data = ''
    result.on('data', (chunk) => {
      data += chunk
    })
    result.on('end', () => {
      res.writeHead(200, {
        'content-type': 'application/json; charset=utf-8',
      })
      res.write(data)
      res.end()
    })
  })
})
serve.listen(3000, () => {
  console.log('server is running on port 3000')
})
