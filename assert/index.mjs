import { strict as assert } from 'assert'

// 在严格断言模式下，非严格方法的行为与其对应的严格方法相同。例如，assert.deepEqual() 的行为类似于 assert.deepStrictEqual()

const obj1 = {
  a: {
    b: 1,
  },
}

const obj2 = {
  a: {
    b: 1,
  },
}

const obj3 = Object.create(obj1)

assert.deepEqual(obj1, obj1) // OK

assert.deepEqual(obj1, obj2) // OK

assert.deepEqual(obj1, obj3) // AssertionError: { a: { b: 1 } } deepEqual {} 原型被忽略
