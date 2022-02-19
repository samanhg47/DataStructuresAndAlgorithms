const {
  LinkedList,
  carla,
  carla2,
  obj,
  list,
  arr,
  buildList
} = require('./dll')

const conversionTests = () =>
  describe('Conversion', () => {
    //Converts List To Array
    test('DLL: Properly Converts List To Array', () => {
      expect(JSON.stringify(list.asArray())).toBe(JSON.stringify(arr))
    })

    //Converts List To Hash Table
    test('DLL: Properly Converts List To Hash Table', () => {
      const hashed = list.hashed()
      expect(JSON.stringify([...hashed.keys()])).toBe(JSON.stringify(arr))
      expect(hashed.get(carla)).toBe(1)
      expect(hashed.get(carla2)).toBe(1)
      expect(hashed.get(146)).toBe(1)
      expect(hashed.get('4')).toBe(1)
    })
  })

module.exports = conversionTests
