const {
  LinkedList,
  carla,
  carla2,
  obj,
  list,
  arr,
  buildList
} = require('./sll')

/**
 * @group LinkedLists
 * @group sll/appending
 */

test('Properly Appepends Single Value To Empty List', () => {
  const testList = new LinkedList().append(['4'])
  const testObj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Appepends Single Value To Filled List', () => {
  const testList = new LinkedList([carla]).append(['4'])
  const testObj = {
    head: { value: carla, next: { value: '4', next: null } },
    tail: { value: '4', next: null },
    length: 2
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Appepends Multiple Values To Empty List', () => {
  const testList = new LinkedList().append([carla, '4', 146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Appepends Multiple Values To Filled List', () => {
  const testList = new LinkedList([carla]).append(['4', 146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})
