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
 * @group sll/removal
 */

// Removes One At Head
test('Properly Removes One Value At Head (Index1 = 0)', () => {
  list.prepend([{ height: 4, width: 5 }]).remove(0)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})
test('Properly Removes One Value At Head (Index1 = 0, Index2 = 1)', () => {
  list.prepend([{ height: 4, width: 5 }]).remove(0, 1)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

// test('Properly Removes Intermediate Value', () => {
//   const testList = new LinkedList(['4'])
//     .prepend([carla])
//     .append([carla2])
//     .insert(2, [{ height: 4, width: 5 }])
//     .insert(2, [146])
//     .remove(3)
//   expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
// })

// Removes One At Tail
test('Properly Removes One Value at Tail (Index1 = lastIndex)', () => {
  list.append([{ height: 4, width: 5 }])
  list.remove(list._lastIndex())
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})
test('Properly Removes One Value at Tail (Index1 = lastIndex, Index2 = Length)', () => {
  list.append([{ height: 4, width: 5 }])
  list.remove(list._lastIndex(), list.length)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})
test('Properly Removes One Value at Tail (Index1 > lastIndex)', () => {
  list.append([{ height: 4, width: 5 }]).remove(21)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

// Removes Multiple At Tail
test('Properly Removes Multiple Values at Tail (Index2 = Length)', () => {
  const testList = new LinkedList(arr)
  testList.remove(1, testList.length)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(new LinkedList([carla])))
})
test('Properly Removes Multiple Values at Tail (Index2 > Length)', () => {
  const testList = new LinkedList(arr)
  testList.remove(1, 21)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(new LinkedList([carla])))
})

// Clears List
test('Properly Clears List: Remove Method (Index2 = Length)', () => {
  list.remove(0, list.length)
  expect(JSON.stringify(list)).toBe(JSON.stringify(new LinkedList()))
})
test('Properly Clears List: Remove Method (Index2 > Length)', () => {
  list.remove(0, 100)
  expect(JSON.stringify(list)).toBe(JSON.stringify(new LinkedList()))
})
test('Properly Clears List: Clear Method', () => {
  list.clear()
  expect(JSON.stringify(list)).toBe(JSON.stringify(new LinkedList()))
})
