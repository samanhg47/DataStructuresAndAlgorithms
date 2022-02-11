const LinkedList = require('./linkedList')

const carla = { name: 'Carla' }
const carla2 = { name: 'Carla' }

test('Properly Creates Linked List', () => {
  const list = new LinkedList(['4'])
  const obj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Handles No Input', () => {
  const list = new LinkedList()
  const obj = {
    head: null,
    tail: null,
    length: 0
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Prepends Value', () => {
  const list = new LinkedList(['4']).prepend(carla)
  const obj = {
    head: { value: carla, next: { value: '4', next: null } },
    tail: { value: '4', next: null },
    length: 2
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Appends Value', () => {
  const list = new LinkedList(['4']).prepend(carla).append(carla2)
  const obj = {
    head: {
      value: carla,
      next: { value: '4', next: { value: carla2, next: null } }
    },
    tail: { value: carla2, next: null },
    length: 3
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

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

test('Properly Inserts Value', () => {
  const list = new LinkedList(['4'])
    .prepend(carla)
    .append(carla2)
    .insert(2, 146)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Removes Value', () => {
  const list = new LinkedList(['4'])
    .prepend(carla)
    .append(carla2)
    .insert(2, { height: 4, width: 5 })
    .insert(2, 146)
    .remove(3)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Mutates Values', () => {
  const list = new LinkedList(['4'])
    .prepend(carla)
    .append(carla2)
    .insert(2, { height: 4, width: 5 })
    .mutateValue(2, 146)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

const arr = [carla, '4', 146, carla2]
const list = new LinkedList(['4']).prepend(carla).append(carla2).insert(2, 146)

test('Properly Converts List To Array', () => {
  carla[3] = true
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
  }).toThrow('That index is undefined')
  expect(() => {
    list._checkIndex(1000000, true)
  }).toThrow('That index is undefined')
})

test('Negative Numbers Fail Index Check', () => {
  expect(() => {
    list._checkIndex(-1, true)
  }).toThrow('Index must be a natural number (this includes 0)')
  expect(() => {
    list._checkIndex(-1)
  }).toThrow('Index must be a natural number (this includes 0)')
  expect(() => {
    list._checkIndex(-1000000, true)
  }).toThrow('Index must be a natural number (this includes 0)')
  expect(() => {
    list._checkIndex(-1000000)
  }).toThrow('Index must be a natural number (this includes 0)')
})

test('Strings Fail Index Check', () => {
  expect(() => {
    list._checkIndex('b')
  }).toThrow('Index must be a natural number (this includes 0)')
  expect(() => {
    list._checkIndex('b', true)
  }).toThrow('Index must be a natural number (this includes 0)')
})

test('Arrays Fail Index Check', () => {
  expect(() => {
    list._checkIndex(['a'])
  }).toThrow('Index must be a natural number (this includes 0)')
  expect(() => {
    list._checkIndex(['a'], true)
  }).toThrow('Index must be a natural number (this includes 0)')
})

test('Objects Fail Index Check', () => {
  expect(() => {
    list._checkIndex({ 1: 'a' })
  }).toThrow('Index must be a natural number (this includes 0)')
  expect(() => {
    list._checkIndex({ 1: 'a' }, true)
  }).toThrow('Index must be a natural number (this includes 0)')
})
