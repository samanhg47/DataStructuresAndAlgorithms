const LinkedList = require('./sll')
const carla = { name: 'Carla' }
const carla2 = { name: 'Carla' }
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
 * @group sll/appending
 */

test('Properly Appepends Single Value To Empty List', () => {
  const testList = new LinkedList().appendOne('4')
  const testObj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Appepends Single Value To Filled List', () => {
  const testList = new LinkedList([carla]).appendOne('4')
  const testObj = {
    head: { value: carla, next: { value: '4', next: null } },
    tail: { value: '4', next: null },
    length: 2
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Appepends Multiple Values To Empty List', () => {
  const testList = new LinkedList().appendMany([carla, '4', 146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Appepends Multiple Values To Filled List', () => {
  const testList = new LinkedList([carla]).appendMany(['4', 146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})
