import os from 'os'

console.log(os.EOL) // POSIX -> \n Windows -> \r\n
console.log(os.type()) // Linux -> Linux macOS -> Darwin Windows -> Windows_NT
console.log(os.platform())
console.log(os.version())
console.log(os.tmpdir())
console.log(os.homedir())
console.log(os.userInfo())
