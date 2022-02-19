const {
  LinkedList,
  carla,
  carla2,
  obj,
  list,
  arr,
  buildList
} = require('./dll')

const removalTests = () =>
  describe('Removal', () => {
    // Removes One At Head
    test('DLL: Removes One Value At Head (i1 = 0)', () => {
      list.prepend([{ height: 4, width: 5 }]).remove(0)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    test('DLL: Removes One Value At Head (i1 = 0, i2 = 1)', () => {
      list.prepend([{ height: 4, width: 5 }]).remove(0, 1)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    // Removes Multiple At Head
    test('DLL: Removes Multiple Values At Head', () => {
      const testList = new LinkedList(arr)
      testList.remove(0, testList._lastIndex())
      expect(JSON.stringify(testList)).toBe(
        JSON.stringify(new LinkedList([carla2]))
      )
    })
    // Removes One Intermediate Value
    test('DLL: Removes One Intermediate Value', () => {
      list.insert(2, [{ height: 4, width: 5 }])
      list.remove(2)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
      list.insert(1, [{ height: 4, width: 5 }])
      list.remove(1)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    // Removes Multiple Intermediate Values
    test('DLL: Removes Multiple Intermediate Values', () => {
      list.insert(1, [{ height: 4, width: 5 }, arr])
      list.remove(1, 3)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    // Removes One At Tail
    test('DLL: Removes One Value at Tail (i1 = lasti)', () => {
      list.append([{ height: 4, width: 5 }])
      list.remove(list._lastIndex())
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    test('DLL: Removes One Value at Tail (i1 = lasti, i2 = Length)', () => {
      list.append([{ height: 4, width: 5 }])
      list.remove(list._lastIndex(), list.length)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    test('DLL: Removes One Value at Tail (i1 > lasti)', () => {
      list.append([{ height: 4, width: 5 }]).remove(21)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    // Removes Multiple At Tail
    test('DLL: Removes Multiple Values at Tail (i2 = Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(1, testList.length)
      expect(JSON.stringify(testList)).toBe(
        JSON.stringify(new LinkedList([carla]))
      )
    })
    test('DLL: Removes Multiple Values at Tail (i2 > Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(1, 21)
      expect(JSON.stringify(testList)).toBe(
        JSON.stringify(new LinkedList([carla]))
      )
    })
    // Clears List
    test('DLL: Remove All (i2 = Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(0, testList.length)
      expect(JSON.stringify(testList)).toBe(JSON.stringify(new LinkedList()))
    })
    test('DLL: Remove All (i2 > Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(0, 100)
      expect(JSON.stringify(testList)).toBe(JSON.stringify(new LinkedList()))
    })
    test('DLL: Remove All Via Clear Method', () => {
      const testList = new LinkedList(arr)
      testList.clear()
      expect(JSON.stringify(testList)).toBe(JSON.stringify(new LinkedList()))
    })

    // Throws Error
    test('DLL: Remove Error: i1 < i2', () => {
      expect(() => {
        return list.remove(3, 1)
      }).toThrow('Start Index Must Be Smaller Than Stop Index')
    })
  })

module.exports = removalTests
