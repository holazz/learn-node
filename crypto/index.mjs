// import { createHmac } from 'crypto'
const { createHash, createHmac } = await import('crypto')
const password = 'abc123'

// hash
const hash = createHash('sha1')
  .update(password)
  .digest('hex')
console.log(hash)

// hmac
const secret = 'secret'
const hash2 = createHmac('sha256', secret)
  .update(password)
  .digest('hex')

console.log(hash2)
