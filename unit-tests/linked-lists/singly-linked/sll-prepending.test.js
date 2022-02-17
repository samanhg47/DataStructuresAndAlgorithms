const LinkedList = require('./sll')
const carla = { name: 'Carla' }
const carla2 = { name: 'Carla' }
const arr = [carla, '4', 146, carla2]
const list = new LinkedList(['4'])
  .prependOne(carla)
  .appendOne(carla2)
  .insertOne(2, 146)
const obj = {
  head: {
    value: carla,
    next: {
      value: '4',
      next: { value: 146, next: { value: carla2, next: null } }
    }
  },
  tail: { value: carla2, next: null },
  length: 4
}

/**
 * @group LinkedLists
 * @group sll
 * @group sll/prepending
 */

test('Properly Prepends Single Value To Empty List', () => {
  const testList = new LinkedList().prependOne('4')
  const testObj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Prepends Single Value To Filled List', () => {
  const testList = new LinkedList(['4']).prependOne(carla)
  const testObj = {
    head: { value: carla, next: { value: '4', next: null } },
    tail: { value: '4', next: null },
    length: 2
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Prepends Multiple Values To Empty List', () => {
  const testList = new LinkedList().prependMany([carla, '4', 146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Prepends Multiple Values To Filled List', () => {
  const testList = new LinkedList([carla2]).prependMany([carla, '4', 146])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})
