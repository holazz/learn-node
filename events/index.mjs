import { EventEmitter, errorMonitor } from 'events'

const eventEmitter = new EventEmitter()

eventEmitter.on('event', function(number) {
  console.log(this) // EventEmitter
  console.log('event: ', number)
})

let n = 0
eventEmitter.once('event2', () => {
  // console.log(this) // undefined
  console.log('event2: ', ++n)
})

eventEmitter.emit('event', 123)

eventEmitter.emit('event2') // event2: 1
eventEmitter.emit('event2') // 忽略

// error 事件
eventEmitter.on('error', (err) => {
  console.error('error: ', err)
})

eventEmitter.on(errorMonitor, (err) => {
  console.error('errorMonitor: ', err)
})

eventEmitter.emit('error', new Error('whoops!'))
