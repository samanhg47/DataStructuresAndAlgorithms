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
 * @group sll/creation
 */

test('Properly Creates Linked List', () => {
  const testList = new LinkedList(['4'])
  const testObj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Handles No Input', () => {
  const testList = new LinkedList()
  const testObj = {
    head: null,
    tail: null,
    length: 0
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Handles Multiple Inputs In Array Format', () => {
  const testList = new LinkedList(arr)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Throws Error When Given Multiple Arguments', () => {
  expect(() => {
    buildList(arr, 7)
  }).toThrow('One Input Maximum')
})

test('Throws Error When Argument Is Not Array', () => {
  expect(() => {
    buildList(7)
  }).toThrow('Input Must Be An Array')
})
