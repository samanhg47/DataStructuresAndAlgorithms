const LinkedList = require('./linkedList')

const linkedList = new LinkedList('4')
const obj = {
  set: { 4: 1 },
  head: { value: '4', next: null },
  tail: { value: '4', next: null },
  length: 1
}

test('Properly creates linked list', () => {
  expect(JSON.stringify(linkedList)).toBe(JSON.stringify(obj))
})
