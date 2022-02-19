const { LinkedList, carla, carla2, obj, list } = require('./sll')

const appendingTests = () =>
  describe('Appending', () => {
    // Throws Error If Not Given Array
    test('SLL: Append - Throws Error If Given String', () => {
      expect(() => {
        list.append('4')
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })
    test('SLL: Append - Throws Error If Given Object', () => {
      expect(() => {
        list.append(carla)
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })
    test('SLL: Append - Throws Error If Given Number', () => {
      expect(() => {
        list.append(100)
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })

    // Appends Single Value To Empty List
    test('SLL: Append - Single Value To List (Empty)', () => {
      const testList = new LinkedList().append(['4'])
      const testObj = {
        head: { value: '4', next: null },
        tail: { value: '4', next: null },
        length: 1
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })

    // Appends Single Value To List
    test('SLL: Append - Single Value To List', () => {
      const testList = new LinkedList([carla]).append(['4'])
      const testObj = {
        head: { value: carla, next: { value: '4', next: null } },
        tail: { value: '4', next: null },
        length: 2
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })

    // Append Multiple Values To Empty List
    test('SLL: Append - Multiple Values To List (Empty)', () => {
      const testList = new LinkedList().append([carla, '4', 146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Append Multiple Values To List
    test('SLL: Append - Multiple Values To List', () => {
      const testList = new LinkedList([carla]).append(['4', 146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })
  })

module.exports = appendingTests
