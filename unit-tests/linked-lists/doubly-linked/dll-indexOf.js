const { LinkedList, carla, carla2, list, arr } = require('./sll')

const indexOfTests = () =>
  describe('Finds Index Of Value', () => {
    const testList = new LinkedList()
    // Throws Error If Used On Empty List
    test('SLL: Index Of On Empty List Throws Error', () => {
      expect(() => {
        testList.indexOf(carla)
      }).toThrow("This Method Can't Be Used On An Empty List")
    })

    // Returns The Index Of Given Value
    test('SLL: Correctly Returns The Index Of Given Value', () => {
      testList.insert(0, arr).insert(2, [carla])
      expect(list.indexOf('4')).toStrictEqual([1])
      expect(list.indexOf(146)).toStrictEqual([2])
      expect(list.indexOf(carla2)).toStrictEqual([3])
      expect(testList.indexOf(carla)).toStrictEqual([0, 2])
    })

    // Throws Error If Used On Empty List
    test('SLL: Index Of Nonexistant Value Throws Error', () => {
      expect(() => {
        testList.indexOf(26)
      }).toThrow('Value Does Not Exist Within List')
    })
  })

module.exports = indexOfTests
