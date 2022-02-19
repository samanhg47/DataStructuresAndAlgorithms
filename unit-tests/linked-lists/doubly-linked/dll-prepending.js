const { LinkedList, carla, carla2, obj } = require('./dll')

const prependingTests = () =>
  describe('Prepending', () => {
    // Prepends Single Value To Empty List
    test('DLL: Prepends Single Value To Empty List', () => {
      const testList = new LinkedList().prepend(['4'])
      const testObj = {
        head: { value: '4', next: null },
        tail: { value: '4', next: null },
        length: 1
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })

    // Prepends Single Value To List
    test('DLL: Prepends Single Value To List', () => {
      const testList = new LinkedList(['4']).prepend([carla])
      const testObj = {
        head: { value: carla, next: { value: '4', next: null } },
        tail: { value: '4', next: null },
        length: 2
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })

    // Prepends Multiple Values To Empty List
    test('DLL: Prepends Multiple Values To Empty List', () => {
      const testList = new LinkedList().prepend([carla, '4', 146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Prepends Multiple Values To List
    test('DLL: Prepends Multiple Values To List', () => {
      const testList = new LinkedList([carla2]).prepend([carla, '4', 146])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })
  })

module.exports = prependingTests
