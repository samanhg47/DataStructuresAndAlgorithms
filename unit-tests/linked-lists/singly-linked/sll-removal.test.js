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
 */

test('Properly Removes Head', () => {
  const testList = new LinkedList(['4'])
    .prependOne(carla)
    .appendOne(carla2)
    .insertOne(0, { height: 4, width: 5 })
    .insertOne(3, 146)
    .remove(0)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Removes Intermediate Value', () => {
  const testList = new LinkedList(['4'])
    .prependOne(carla)
    .appendOne(carla2)
    .insertOne(2, { height: 4, width: 5 })
    .insertOne(2, 146)
    .remove(3)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Removes Tail', () => {
  const testList = new LinkedList(['4'])
    .prependOne(carla)
    .appendOne(carla2)
    .insertOne(20, { height: 4, width: 5 })
    .insertOne(2, 146)
    .remove(21)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})
