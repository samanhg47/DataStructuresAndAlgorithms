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
function buildList(inp1, inp2 = null) {
  return inp2 ? new LinkedList(inp1, inp2) : new LinkedList(inp1)
}

test('Properly Appends Value', () => {
  const testList = new LinkedList(['4']).prependOne(carla).appendOne(carla2)
  const testObj = {
    head: {
      value: carla,
      next: { value: '4', next: { value: carla2, next: null } }
    },
    tail: { value: carla2, next: null },
    length: 3
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Inserts Value', () => {
  const testList = new LinkedList(['4'])
    .prependOne(carla)
    .appendOne(carla2)
    .insertOne(2, 146)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

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

test('Properly Changes Values', () => {
  const testList = new LinkedList(['4'])
    .prependOne(carla)
    .appendOne(carla2)
    .insertOne(2, { height: 4, width: 5 })
    .changeValue(2, 146)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Converts List To Array', () => {
  expect(JSON.stringify(list.asArray())).toBe(JSON.stringify(arr))
})

test('Properly Converts List To Hash Table', () => {
  expect(JSON.stringify([...list.hashed().keys()])).toBe(JSON.stringify(arr))
  expect(list.hashed().get(carla)).toBe(1)
  expect(list.hashed().get(carla2)).toBe(1)
  expect(list.hashed().get(146)).toBe(1)
  expect(list.hashed().get('4')).toBe(1)
})

test('Returns Correct Value At Selected Index', () => {
  expect(list.valueAt(0)).toBe(carla)
  expect(list.valueAt(1)).toBe('4')
  expect(list.valueAt(2)).toBe(146)
  expect(list.valueAt(3)).toBe(carla2)
})

test('Correct Indices Pass Check', () => {
  expect(list._checkIndex(0)).toBe(true)
  expect(list._checkIndex(1)).toBe(true)
  expect(list._checkIndex(2)).toBe(true)
  expect(list._checkIndex(3)).toBe(true)
  expect(list._checkIndex(4, false)).toBe(true)
  expect(list._checkIndex(1000000, false)).toBe(true)
})

test('Index Length Check Fails Indices', () => {
  expect(() => {
    list._checkIndex(4)
  }).toThrow('That Index Is Undefined')
  expect(() => {
    list._checkIndex(1000000)
  }).toThrow('That Index Is Undefined')
})

test('Negative Numbers Fail Index Check', () => {
  expect(() => {
    list._checkIndex(-1)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex(-1, false)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex(-1000000)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex(-1000000, false)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
})

test('Strings Fail Index Check', () => {
  expect(() => {
    list._checkIndex('b')
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex('b', false)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
})

test('Arrays Fail Index Check', () => {
  expect(() => {
    list._checkIndex(['a'])
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex(['a'], false)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
})

test('Objects Fail Index Check', () => {
  expect(() => {
    list._checkIndex({ 1: 'a' })
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex({ 1: 'a' }, false)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
})
