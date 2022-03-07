const { LinkedList, carla, carla2, obj, list } = require('./dll')

const header = 'DLL-Insert: '
const insertionTests = () =>
  describe('Insertion', () => {
    // Throws Error If Not Given Array
    test(header + 'Error If Given String', () => {
      expect(() => {
        list.insert(1, '4')
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })
    test(header + 'Error If Given Object', () => {
      expect(() => {
        list.insert(1, carla)
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })
    test(header + 'Error If Given Number', () => {
      expect(() => {
        list.insert(1, 100)
      }).toThrow(
        'Values Must Be In Their Desired Order As Elements In An Array'
      )
    })

    // Inserts Single Value To Empty List
    test(header + 'Single Value To Empty List (i = 0)', () => {
      const testList = new LinkedList().insert(0, ['4'])
      const testObj = {
        head: { value: '4', next: null, last: null },
        tail: { value: '4', next: null, last: null },
        length: 1
      }
      expect(testList).toEqual(testObj)
    })
    test(header + 'Single Value To Empty List (i > 0)', () => {
      const testList = new LinkedList().insert(100, ['4'])
      const testObj = {
        head: { value: '4', next: null, last: null },
        tail: { value: '4', next: null, last: null },
        length: 1
      }
      expect(testList).toEqual(testObj)
    })

    // Inserts Multiple Values To Empty List
    test(header + 'Multiple Values To Empty List (i = 0)', () => {
      const testList = new LinkedList().insert(0, [carla, '4', 146, carla2])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })
    test(header + 'Multiple Values To Empty List (i > 0)', () => {
      const testList = new LinkedList().insert(100, [carla, '4', 146, carla2])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })

    // Inserts Single Value To Start Of List
    test(header + 'Single Value To Start Of List', () => {
      const testList = new LinkedList(['4', 146, carla2]).insert(0, [carla])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })

    // Inserts Multiple Values To Start Of List
    test(header + 'Multiple Values To Start Of List', () => {
      const testList = new LinkedList([146, carla2]).insert(0, [carla, '4'])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })

    // Inserts Single Value To Middle Of List
    test(header + 'Single Value To Middle Of List', () => {
      const testList1 = new LinkedList([carla, '4', carla2]).insert(2, [146])
      let i2 = testList1._nodeAt(2)
      expect(testList1.length).toEqual(4)
      expect(testList1.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)

      const testList2 = new LinkedList([carla, 146, carla2]).insert(1, ['4'])
      i2 = testList2._nodeAt(2)
      expect(testList1.length).toEqual(4)
      expect(testList1.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })

    // Inserts Multiple Values To Middle Of List
    test(header + 'Multiple Values To Middle Of List', () => {
      const testList = new LinkedList([carla, carla2]).insert(1, ['4', 146])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })

    // Inserts Single Value To End Of List
    test(header + 'Single Value To End Of List (i = length)', () => {
      const testList = new LinkedList([carla, '4', 146]).insert(3, [carla2])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })
    test(header + 'Single Value To End Of List (i < length)', () => {
      const testList = new LinkedList([carla, '4', 146]).insert(100, [carla2])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })

    // Inserts Multiple Values To End Of List
    test(header + 'Multiple Values To End Of List (i = length)', () => {
      const testList = new LinkedList([carla, '4']).insert(2, [146, carla2])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })
    test(header + 'Multiple Values To End Of List (i > length)', () => {
      const testList = new LinkedList([carla, '4']).insert(100, [146, carla2])
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })
  })

module.exports = insertionTests
