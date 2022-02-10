const LinkedList = require('./linkedList')

const carla = { name: 'Carla' }
const carla2 = { name: 'Carla' }

test('Properly Creates Linked List', () => {
  const list = new LinkedList('4')
  const obj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Prepends Value', () => {
  const list = new LinkedList('4').prepend(carla)
  const obj = {
    head: { value: carla, next: { value: '4', next: null } },
    tail: { value: '4', next: null },
    length: 2
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Appends Value', () => {
  const list = new LinkedList('4').prepend(carla).append(carla2)
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
  const list = new LinkedList('4').prepend(carla).append(carla2).insert(2, 146)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Removes Value', () => {
  const list = new LinkedList('4')
    .prepend(carla)
    .append(carla2)
    .insert(2, { height: 4, width: 5 })
    .insert(2, 146)
    .remove(3)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Mutates Values', () => {
  const list = new LinkedList('4')
    .prepend(carla)
    .append(carla2)
    .insert(2, { height: 4, width: 5 })
    .mutateValue(2, 146)
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly Converts List To Array', () => {
  const list = new LinkedList('4')
    .prepend(carla)
    .append(carla2)
    .insert(2, 146)
    .asArray()
  const arr = [carla, '4', 146, carla2]
  expect(JSON.stringify(list)).toBe(JSON.stringify(arr))
})

test('Properly Converts List To Hash Table', () => {
  const list = new LinkedList('4')
    .prepend(carla)
    .append(carla2)
    .insert(2, 146)
    .hashed()
  expect(list.get(carla)).toBe(1)
  expect(list.get(carla2)).toBe(1)
  expect(list.get(146)).toBe(1)
  expect(list.get('4')).toBe(1)
})
