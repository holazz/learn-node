import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(`{ "a": ${JSON.stringify({
    name: 'zz',
  })}, "b": `)
  res.end(`${JSON.stringify({
    data: 'Hello World!',
  })}}`)
})

server.listen(8000)
