const {
  LinkedList,
  carla,
  carla2,
  obj,
  list,
  arr,
  buildList
} = require('./dll')

const changeValueTests = () =>
  describe('Changing Values', () => {
    test('DLL: Properly Changes Values', () => {
      const testList = new LinkedList([
        carla,
        '4',
        { height: 4, width: 5 },
        carla2
      ]).changeValue(2, 146)
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })
  })

module.exports = changeValueTests
