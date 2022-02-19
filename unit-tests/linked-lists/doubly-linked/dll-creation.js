const { LinkedList, obj, arr, buildList } = require('./dll')

const creationTests = () =>
  /**
   * @group LinkedLists
   * @group DLL/creation
   */
  describe('Creation', () => {
    // Creates Linked List
    test('DLL: Creates Linked List (No Input)', () => {
      const testList = new LinkedList()
      const testObj = {
        head: null,
        tail: null,
        length: 0
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })
    test('DLL: Creates Linked List (Single Input)', () => {
      const testList = new LinkedList(['4'])
      const testObj = {
        head: { value: '4', next: null },
        tail: { value: '4', next: null },
        length: 1
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })
    test('DLL: Creates Linked List (Multiple Inputs As Array)dx', () => {
      const testList = new LinkedList(arr)
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Throws Creation Errors
    test('DLL: Creation Throws Error When Given Multiple Arguments', () => {
      expect(() => {
        buildList(arr, 7)
      }).toThrow('One Input Maximum')
    })
    test('DLL: Creation Throws Error When Argument Is Not Array', () => {
      expect(() => {
        buildList(7)
      }).toThrow('Input Must Be An Array')
    })
  })

module.exports = creationTests
