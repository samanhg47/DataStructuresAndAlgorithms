const LinkedList = require('./linkedList')

test('properly creates linked list', () => {
  const list = new LinkedList('4')
  const obj = {
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly prepends value', () => {
  const carla = { name: 'Carla' }
  const list = new LinkedList('4').prepend(carla)
  const obj = {
    head: { value: { name: 'Carla' }, next: { value: '4', next: null } },
    tail: { value: '4', next: null },
    length: 2
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly appends value', () => {
  const carla = { name: 'Carla' }
  const carla2 = { name: 'Carla' }
  const list = new LinkedList('4').prepend(carla).append(carla2)
  const obj = {
    head: {
      value: { name: 'Carla' },
      next: { value: '4', next: { value: { name: 'Carla' }, next: null } }
    },
    tail: { value: { name: 'Carla' }, next: null },
    length: 3
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly inserts value', () => {
  const carla = { name: 'Carla' }
  const carla2 = { name: 'Carla' }
  const list = new LinkedList('4').prepend(carla).append(carla2).insert(146, 2)
  const obj = {
    head: {
      value: { name: 'Carla' },
      next: {
        value: '4',
        next: { value: 146, next: { value: { name: 'Carla' }, next: null } }
      }
    },
    tail: { value: { name: 'Carla' }, next: null },
    length: 4
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

test('Properly removes value', () => {
  const carla = { name: 'Carla' }
  const carla2 = { name: 'Carla' }
  const list = new LinkedList('4')
    .prepend(carla)
    .append(carla2)
    .insert({ height: 4, width: 5 }, 2)
    .insert(146, 2)
    .remove(3)
  const obj = {
    head: {
      value: { name: 'Carla' },
      next: {
        value: '4',
        next: { value: 146, next: { value: { name: 'Carla' }, next: null } }
      }
    },
    tail: { value: { name: 'Carla' }, next: null },
    length: 4
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})
