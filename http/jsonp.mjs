import http from 'http'

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost:8000')
  const cb = url.searchParams.get('cb')
  switch (url.pathname) {
    case '/api/data':
      res.write(`${cb}('hello')`)
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

