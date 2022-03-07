const { LinkedList, carla, carla2, obj, list } = require('./dll')

const header = 'DLL-Append: '
const appendingTests = () =>
  describe('Appending', () => {
    // Throws Error If Not Given Array
    test(header + 'Error If Given String', () => {
      expect(() => {
        list.append('4')
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })
    test(header + 'Error If Given Object', () => {
      expect(() => {
        list.append(carla)
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })
    test(header + 'Error If Given Number', () => {
      expect(() => {
        list.append(100)
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })

    // Appends Single Value To Empty List
    test(header + 'Single Value To Empty List', () => {
      const testList = new LinkedList().append(['4'])
      const testObj = {
        head: { value: '4', next: null, last: null },
        tail: { value: '4', next: null, last: null },
        length: 1
      }
      expect(testList).toEqual(testObj)
    })

    // Appends Single Value To List
    test(header + 'Single Value To List', () => {
      const testList = new LinkedList([carla]).append(['4'])

      expect(testList.valueAt(1)).toEqual('4')
      expect(testList.valueAt(0)).toEqual(carla)
    })

    // Append Multiple Values To Empty List
    test(header + 'Multiple Values To Empty List', () => {
      const testList = new LinkedList().append([carla, '4', 146, carla2])
      expect(testList.valueAt(0)).toEqual(carla)
      expect(testList.valueAt(1)).toEqual('4')
      expect(testList.valueAt(2)).toEqual(146)
      expect(testList.valueAt(3)).toEqual(carla2)
    })

    // Append Multiple Values To List
    test(header + 'Multiple Values To List', () => {
      const testList = new LinkedList([carla]).append(['4', 146, carla2])
      const i2 = testList._nodeAt(2)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })
  })

module.exports = appendingTests
