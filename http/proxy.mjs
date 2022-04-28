import http from 'http'
import { createProxyMiddleware } from 'http-proxy-middleware'

const proxyVipOptions = {
  target: 'https://mst.vip.com',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api-vip': '',
  },
}

const proxyV2EXOptions = {
  target: 'https://www.v2ex.com',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api-v2ex': '/api',
  },
}

const server = http.createServer((req, res) => {
  const url = req.url
  if (url.startsWith('/api-vip')) {
    const proxyVip = createProxyMiddleware(proxyVipOptions)
    proxyVip(req, res)
    return
  }
  if (url.startsWith('/api-v2ex')) {
    const proxyV2EX = createProxyMiddleware(proxyV2EXOptions)
    proxyV2EX(req, res)
    return
  }
  res.end('No proxy')
})

server.listen(8000, () => {
  console.log('server is running at http://localhost:8000')
})
