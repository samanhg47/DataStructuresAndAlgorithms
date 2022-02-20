const { LinkedList, carla, carla2, obj, list } = require('./sll')

const header = 'SLL-Prepend: '
const prependingTests = () =>
  describe('Prepending', () => {
    // Throws Error If Not Given Array
    test(header + 'Error If Given String', () => {
      expect(() => {
        list.prepend('4')
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })
    test(header + 'Error If Given Object', () => {
      expect(() => {
        list.prepend(carla)
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })
    test(header + 'Error If Given Number', () => {
      expect(() => {
        list.prepend(100)
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })

    // Prepends Single Value To Empty List
    test(header + 'Single Value To Empty List', () => {
      const testList = new LinkedList().prepend(['4'])
      const testObj = {
        head: { value: '4', next: null },
        tail: { value: '4', next: null },
        length: 1
      }
      expect(testList).toEqual(testObj)
    })

    // Prepends Single Value To List
    test(header + 'Single Value To List', () => {
      const testList = new LinkedList(['4']).prepend([carla])
      const testObj = {
        head: { value: carla, next: { value: '4', next: null } },
        tail: { value: '4', next: null },
        length: 2
      }
      expect(testList).toEqual(testObj)
    })

    // Prepends Multiple Values To Empty List
    test(header + 'Multiple Values To Empty List', () => {
      const testList = new LinkedList().prepend([carla, '4', 146, carla2])
      expect(testList).toEqual(obj)
    })

    // Prepends Multiple Values To List
    test(header + 'Multiple Values To List', () => {
      const testList = new LinkedList([carla2]).prepend([carla, '4', 146])
      expect(testList).toEqual(obj)
    })
  })

module.exports = prependingTests
