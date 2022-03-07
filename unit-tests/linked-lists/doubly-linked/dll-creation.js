const { LinkedList, carla, carla2, arr, buildList } = require('./dll')

const header = 'DLL-Initialization: '
const creationTests = () =>
  describe('Initialization', () => {
    // Throws Creation Errors
    test(header + 'Error If Given Multiple Arguments', () => {
      expect(() => {
        buildList(arr, 7)
      }).toThrow('One Input Maximum')
    })
    test(header + 'Error If Argument Is Not Array', () => {
      expect(() => {
        buildList(7)
      }).toThrow('Input Must Be An Array')
    })

    // Creates Linked List
    test(header + 'No Input', () => {
      const testList = new LinkedList()
      const testObj = {
        head: null,
        tail: null,
        length: 0
      }
      expect(testList).toEqual(testObj)
    })
    test(header + 'Single Input', () => {
      const testList = new LinkedList(['4'])
      const testObj = {
        head: { value: '4', next: null, last: null },
        tail: { value: '4', next: null, last: null },
        length: 1
      }
      expect(testList).toEqual(testObj)
    })
    test(header + 'Multiple Inputs As Array', () => {
      const testList = new LinkedList(arr)
      const i2 = testList._nodeAt(2)
      expect(testList.length).toEqual(4)
      expect(testList.valueAt(0)).toEqual(carla)
      expect(i2.last.value).toEqual('4')
      expect(i2.value).toEqual(146)
      expect(i2.next.value).toEqual(carla2)
    })
  })

module.exports = creationTests
