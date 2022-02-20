const { LinkedList, carla, carla2, list, arr } = require('./sll')

const header = 'SLL-IndexOf: '
const indexOfTests = () =>
  describe('Returns Index Of Value', () => {
    const testList = new LinkedList()
    // Throws Error If Used On Empty List
    test(header + 'Error If Used On Empty List', () => {
      expect(() => {
        testList.indexOf(carla)
      }).toThrow("This Method Can't Be Used On An Empty List")
    })

    // Throws Error If Used On Empty List
    test(header + 'Error If Value Not In List', () => {
      expect(() => {
        testList.insert(0, arr).insert(2, [carla])
        testList.indexOf(26)
      }).toThrow('Value Does Not Exist Within List')
    })

    // Returns The Index Of Given Value
    test(header + 'Returns The Correct Index', () => {
      expect(list.indexOf('4')).toEqual([1])
      expect(list.indexOf(146)).toEqual([2])
      expect(list.indexOf(carla2)).toEqual([3])
      expect(testList.indexOf(carla)).toEqual([0, 2])
    })
  })

module.exports = indexOfTests
