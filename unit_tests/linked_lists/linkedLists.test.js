const LinkedList = require('./linkedList')

function copyObj(o) {
  return JSON.parse(JSON.stringify(o))
}

// First Test
test('properly creates linked list', () => {
  const list = new LinkedList('4')
  const obj = {
    set: { 4: 1 },
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
})

// Second Test
test('Properly prepends value', () => {
  const carla = { name: 'Carla' }
  const list2 = new LinkedList('4').prepend(carla)
  const name = JSON.stringify(carla)
  const set = { 4: 1 }
  set[name] = 1
  const obj = {
    set: set,
    head: { value: { name: 'Carla' }, next: { value: '4', next: null } },
    tail: { value: '4', next: null },
    length: 2
  }
  expect(JSON.stringify(list2)).toBe(JSON.stringify(obj))
})

test('Properly appends value', () => {
  const carla = { name: 'Carla' }
  const carla2 = { name: 'Carla' }
  const list2 = new LinkedList('4').prepend(carla).append(carla2)
  const name = JSON.stringify(carla)
  const set = { 4: 1 }
  set[name] = 2
  const obj = {
    set: set,
    head: {
      value: { name: 'Carla' },
      next: { value: '4', next: { value: { name: 'Carla' }, next: null } }
    },
    tail: { value: { name: 'Carla' }, next: null },
    length: 3
  }
  expect(JSON.stringify(list2.set)).toBe(JSON.stringify(obj.set))
})
