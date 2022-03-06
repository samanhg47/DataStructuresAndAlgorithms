const { carla, carla2, list, LinkedList } = require('./dll')

const header = 'DLL-ValueAt: '
const valueRetrievalTests = () =>
  describe('Value Retrieval', () => {
    // Throws Error If Used On Empty List
    test(header + 'Error If  Used On Empty List', () => {
      const testList = new LinkedList()
      expect(() => {
        testList.valueAt(3)
      }).toThrow("This Method Can't Be Used On An Empty List")
    })
    // Retrieves Correct Value At Selected Index
    test(header + 'Returns Correct Value', () => {
      expect(list.valueAt(0)).toBe(carla)
      expect(list.valueAt(1)).toBe('4')
      expect(list.valueAt(2)).toBe(146)
      expect(list.valueAt(3)).toBe(carla2)
    })
  })

module.exports = valueRetrievalTests
