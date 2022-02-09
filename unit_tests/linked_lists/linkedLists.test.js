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
  const obj = {
    set: { 4: 1 },
    head: { value: '4', next: null },
    tail: { value: '4', next: null },
    length: 1
  }
  obj.set[name] = 1
  obj.head = { value: { name: 'Carla' }, next: obj.tail }
  obj.length += 1
  expect(JSON.stringify(list2.set)).toBe(JSON.stringify(obj.set))
})
