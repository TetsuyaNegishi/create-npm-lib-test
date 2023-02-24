import random from 'random'

export function sayHello() {
  console.log('hi')
}
export function sayGoodbye() {
  console.log('goodbye')
  return random.float()
}
