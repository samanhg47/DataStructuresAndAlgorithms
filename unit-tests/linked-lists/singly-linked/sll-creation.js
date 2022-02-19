const { LinkedList, obj, arr, buildList } = require('./sll')

const header = 'SLL-Create: '
const creationTests = () =>
  describe('Creation', () => {
    // Creates Linked List
    test(header + 'No Input', () => {
      const testList = new LinkedList()
      const testObj = {
        head: null,
        tail: null,
        length: 0
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })
    test(header + 'Single Input', () => {
      const testList = new LinkedList(['4'])
      const testObj = {
        head: { value: '4', next: null },
        tail: { value: '4', next: null },
        length: 1
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })
    test(header + 'Multiple Inputs As Array', () => {
      const testList = new LinkedList(arr)
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Throws Creation Errors
    test(header + 'Error When Given Multiple Arguments', () => {
      expect(() => {
        buildList(arr, 7)
      }).toThrow('One Input Maximum')
    })
    test(header + 'Error When Argument Is Not Array', () => {
      expect(() => {
        buildList(7)
      }).toThrow('Input Must Be An Array')
    })
  })

module.exports = creationTests
