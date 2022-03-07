const { LinkedList, carla, carla2, obj, list } = require('./dll')

const header = 'DLL-Prepend: '
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
        head: { value: '4', next: null, last: null },
        tail: { value: '4', next: null, last: null },
        length: 1
      }
      expect(testList).toEqual(testObj)
    })

    // Prepends Single Value To List
    test(header + 'Single Value To List', () => {
      const testList = new LinkedList(['4']).prepend([carla])
      const i = testList._nodeAt(1)
      expect(i.last.value).toEqual(carla)
      expect(i.value).toEqual('4')
    })

    // Prepends Multiple Values To Empty List
    test(header + 'Multiple Values To Empty List', () => {
      const testList = new LinkedList().prepend([carla, '4', 146, carla2])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })

    // Prepends Multiple Values To List
    test(header + 'Multiple Values To List', () => {
      const testList = new LinkedList([carla2]).prepend([carla, '4', 146])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })
  })

module.exports = prependingTests
