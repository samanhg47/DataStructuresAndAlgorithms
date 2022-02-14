const LinkedList = require('./linkedList')

const carla = { name: 'Carla' }
const carla2 = { name: 'Carla' }
const arr = [carla, '4', 146, carla2]
const list = new LinkedList(['4']).prepend(carla).append(carla2).insert(2, 146)
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

test('Properly Prepends Value', () => {
  const testList = new LinkedList(['4']).prepend(carla)
  const testObj = {
    head: { value: carla, next: { value: '4', next: null } },
    tail: { value: '4', next: null },
    length: 2
  }
  expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
})

test('Properly Appends Value', () => {
  const testList = new LinkedList(['4']).prepend(carla).append(carla2)
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
    .prepend(carla)
    .append(carla2)
    .insert(2, 146)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Removes Value', () => {
  const testList = new LinkedList(['4'])
    .prepend(carla)
    .append(carla2)
    .insert(2, { height: 4, width: 5 })
    .insert(2, 146)
    .remove(3)
  expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
})

test('Properly Mutates Values', () => {
  const testList = new LinkedList(['4'])
    .prepend(carla)
    .append(carla2)
    .insert(2, { height: 4, width: 5 })
    .mutateValue(2, 146)
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
  expect(list._checkIndex(4)).toBe(true)
  expect(list._checkIndex(1000000)).toBe(true)
})

test('Index Length Check Fails Indices', () => {
  expect(() => {
    list._checkIndex(4, true)
  }).toThrow('That Index Is Undefined')
  expect(() => {
    list._checkIndex(1000000, true)
  }).toThrow('That Index Is Undefined')
})

test('Negative Numbers Fail Index Check', () => {
  expect(() => {
    list._checkIndex(-1, true)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex(-1)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex(-1000000, true)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex(-1000000)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
})

test('Strings Fail Index Check', () => {
  expect(() => {
    list._checkIndex('b')
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex('b', true)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
})

test('Arrays Fail Index Check', () => {
  expect(() => {
    list._checkIndex(['a'])
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex(['a'], true)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
})

test('Objects Fail Index Check', () => {
  expect(() => {
    list._checkIndex({ 1: 'a' })
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
  expect(() => {
    list._checkIndex({ 1: 'a' }, true)
  }).toThrow('Index Must Be A Natural Number (This Includes 0)')
})
