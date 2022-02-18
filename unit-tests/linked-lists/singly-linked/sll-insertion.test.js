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
 * @group sll/insertion
 */

test('Properly Inserts Single Value To Empty List (index = 0)', () => {
  const testList = new LinkedList().insert(0, ['4'])
  const testObj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Inserts Single Value To Empty List (index > 0)', () => {
  const testList = new LinkedList().insert(100, ['4'])
  const testObj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Inserts Single Value To Start Of Filled List', () => {
  const testList = new LinkedList(['4', 146, carla2]).insert(0, [carla])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Single Value To Middle Of Filled List', () => {
  const testList1 = new LinkedList([carla, '4', carla2]).insert(2, [146])
  expect(JSON.stringify(testList1)).toBe(JSON.stringify(obj))

  const testList2 = new LinkedList([carla, 146, carla2]).insert(1, ['4'])
  expect(JSON.stringify(testList2)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Single Value To End Of Filled List (index = length)', () => {
  const testList = new LinkedList([carla, '4', 146]).insert(3, [carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Single Value To End Of Filled List (index < length)', () => {
  const testList = new LinkedList([carla, '4', 146]).insert(100, [carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Multiple Values To Empty List (index = 0)', () => {
  const testList = new LinkedList().insert(0, [carla, '4', 146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Multiple Values To Empty List (index > 0)', () => {
  const testList = new LinkedList().insert(100, [carla, '4', 146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Multiple Values To Start Of Filled List', () => {
  const testList = new LinkedList([146, carla2]).insert(0, [carla, '4'])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Multiple Values To Middle Of Filled List', () => {
  const testList = new LinkedList([carla, carla2]).insert(1, ['4', 146])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Multiple Values To End Of Filled List (index = length)', () => {
  const testList = new LinkedList([carla, '4']).insert(2, [146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Inserts Multiple Values To End Of Filled List (index > length)', () => {
  const testList = new LinkedList([carla, '4']).insert(100, [146, carla2])
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})
