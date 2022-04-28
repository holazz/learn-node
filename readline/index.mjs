// node version > 17
import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output })

const answer = await rl.question('What is your name? ')

console.log(`Hello ${answer}!`)

// rl.close()

rl.on('line', (input) => {
  console.log(`Received: ${input}`)
})
