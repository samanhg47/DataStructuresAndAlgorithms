const { LinkedList, carla, carla2, obj } = require('./sll')

const header = 'SLL-ChangeValue: '
const changeValueTests = () =>
  describe('Changing Values', () => {
    // Throws Error If List Is Empty
    test(header + 'Error If Used On Empty List', () => {
      expect(() => {
        new LinkedList().changeValue(1, carla)
      }).toThrow("This Method Can't Be Used On An Empty List")
    })

    // Works Properly
    test(header + 'Changes Value Stored At Index', () => {
      const testList = new LinkedList([
        carla,
        '4',
        { height: 4, width: 5 },
        carla2
      ]).changeValue(2, 146)
      expect(testList).toEqual(obj)
    })
  })

module.exports = changeValueTests
