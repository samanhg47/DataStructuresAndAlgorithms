const { LinkedList, carla, carla2, obj } = require('./sll')

const insertionTests = () =>
  describe('Insertion', () => {
    // Inserts Single Value To Empty List
    test('Inserts Single Value To Empty List (index = 0)', () => {
      const testList = new LinkedList().insert(0, ['4'])
      const testObj = {
        head: { value: '4', next: null },
        tail: { value: '4', next: null },
        length: 1
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })
    test('Inserts Single Value To Empty List (index > 0)', () => {
      const testList = new LinkedList().insert(100, ['4'])
      const testObj = {
        head: { value: '4', next: null },
        tail: { value: '4', next: null },
        length: 1
      }
      expect(JSON.stringify(testList)).toBe(JSON.stringify(testObj))
    })

    // Inserts Multiple Values To Empty List
    test('Inserts Multiple Values To Empty List (index = 0)', () => {
      const testList = new LinkedList().insert(0, [carla, '4', 146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })
    test('Inserts Multiple Values To Empty List (index > 0)', () => {
      const testList = new LinkedList().insert(100, [carla, '4', 146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Inserts Single Value To Start Of List
    test('Inserts Single Value To Start Of List', () => {
      const testList = new LinkedList(['4', 146, carla2]).insert(0, [carla])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Inserts Multiple Values To Start Of List
    test('Inserts Multiple Values To Start Of List', () => {
      const testList = new LinkedList([146, carla2]).insert(0, [carla, '4'])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Inserts Single Value To Middle Of List
    test('Inserts Single Value To Middle Of List', () => {
      const testList1 = new LinkedList([carla, '4', carla2]).insert(2, [146])
      expect(JSON.stringify(testList1)).toBe(JSON.stringify(obj))

      const testList2 = new LinkedList([carla, 146, carla2]).insert(1, ['4'])
      expect(JSON.stringify(testList2)).toBe(JSON.stringify(obj))
    })

    // Inserts Multiple Values To Middle Of List
    test('Inserts Multiple Values To Middle Of List', () => {
      const testList = new LinkedList([carla, carla2]).insert(1, ['4', 146])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Inserts Single Value To End Of List
    test('Inserts Single Value To End Of List (index = length)', () => {
      const testList = new LinkedList([carla, '4', 146]).insert(3, [carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })
    test('Inserts Single Value To End Of List (index < length)', () => {
      const testList = new LinkedList([carla, '4', 146]).insert(100, [carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })

    // Inserts Multiple Values To End Of List
    test('Inserts Multiple Values To End Of List (index = length)', () => {
      const testList = new LinkedList([carla, '4']).insert(2, [146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })
    test('Inserts Multiple Values To End Of List (index > length)', () => {
      const testList = new LinkedList([carla, '4']).insert(100, [146, carla2])
      expect(JSON.stringify(testList)).toBe(JSON.stringify(obj))
    })
  })

module.exports = insertionTests
