const { LinkedList, carla, carla2, obj } = require('./sll')

const appendingTests = () =>
  describe('Appending', () => {
    // Appends Single Value To Empty List
    test('Appepends Single Value To Empty List', () => {
      const testList = new LinkedList().append(['4'])
      const testObj = {
        head: { value: '4', next: null },
        tail: { value: '4', next: null },
        length: 1
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })

    // Appends Single Value To List
    test('Appepends Single Value To List', () => {
      const testList = new LinkedList([carla]).append(['4'])
      const testObj = {
        head: { value: carla, next: { value: '4', next: null } },
        tail: { value: '4', next: null },
        length: 2
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })

    // Appepends Multiple Values To Empty List
    test('Appepends Multiple Values To Empty List', () => {
      const testList = new LinkedList().append([carla, '4', 146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Appepends Multiple Values To List
    test('Appepends Multiple Values To List', () => {
      const testList = new LinkedList([carla]).append(['4', 146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })
  })

module.exports = appendingTests