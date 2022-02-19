const { carla, carla2, list } = require('./dll')

const valueRetrievalTests = () =>
  describe('Value Retrieval', () => {
    // Retrieves Correct Value At Selected Index
    test('DLL: Retrieves Correct Value At Selected Index', () => {
      expect(list.valueAt(0)).toBe(carla)
      expect(list.valueAt(1)).toBe('4')
      expect(list.valueAt(2)).toBe(146)
      expect(list.valueAt(3)).toBe(carla2)
    })
  })

module.exports = valueRetrievalTests
