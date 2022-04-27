import http from 'http'

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost:8000')
  switch (url.pathname) {
    case '/api/login':
      res.writeHead(200, {
        'content-type': 'application/json',
        'Access-control-Allow-Origin': '*',
      })
      res.write(JSON.stringify({
        message: 'hello',
      }))
      break
    default:
      res.write('404')
      break
  }
  res.end()
})

server.listen(8000, () => {
  console.log('server is running at http://localhost:8000')
})
