// Readable：可读，如 fs.createReadStream()
// Writable：可写，如 fs.createWriteStream()
// Duplex：可读+可写，如 net.Socket()
// Transform：在读写的过程中，可以对数据进行修改，如 zlib.createGzip()
import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'

const src = createReadStream('./input.txt')
const dest = createWriteStream('./input.txt.gz')
const gzip = createGzip()

src
  .pipe(gzip)
  .pipe(dest)
