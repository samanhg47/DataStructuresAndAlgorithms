const { carla, carla2, list, arr, LinkedList } = require('./sll')

const header = 'SLL-Convert: '
const conversionTests = () =>
  describe('Conversion', () => {
    //Converts List To Array
    test(header + 'To Array', () => {
      expect(list.asArray()).toEqual(arr)
    })
    test(header + 'To Empty Array', () => {
      expect(new LinkedList().asArray()).toEqual([])
    })

    //Converts List To Hash Table
    test(header + 'To Hashed Table', () => {
      const hashed = list.hashed()
      const testArr = []
      for (const el of arr) {
        testArr.push([el, 1])
      }
      expect([...hashed.keys()]).toEqual(arr)
      expect(hashed).toEqual(new Map(testArr))
      expect(hashed.get(carla)).toBe(1)
      expect(hashed.get(carla2)).toBe(1)
      expect(hashed.get(146)).toBe(1)
      expect(hashed.get('4')).toBe(1)
    })
    test(header + 'To Empty Hashed Table', () => {
      expect(new LinkedList().hashed()).toEqual(new Map())
    })
  })

module.exports = conversionTests
