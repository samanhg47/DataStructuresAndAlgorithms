const {
  LinkedList,
  carla,
  carla2,
  obj,
  list,
  arr,
  buildList
} = require('./sll')

const removalTests = () =>
  describe('Removal', () => {
    // Removes One At Head
    test('Removes One Value At Head (Index1 = 0)', () => {
      list.prepend([{ height: 4, width: 5 }]).remove(0)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    test('Removes One Value At Head (Index1 = 0, Index2 = 1)', () => {
      list.prepend([{ height: 4, width: 5 }]).remove(0, 1)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    // Removes Multiple At Head
    test('Removes Multiple Values At Head', () => {
      const testList = new LinkedList(arr)
      testList.remove(0, testList._lastIndex())
      expect(JSON.stringify(testList)).toBe(
        JSON.stringify(new LinkedList([carla2]))
      )
    })
    // Removes One Intermediate Value
    test('Removes One Intermediate Value', () => {
      list.insert(2, [{ height: 4, width: 5 }])
      list.remove(2)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
      list.insert(1, [{ height: 4, width: 5 }])
      list.remove(1)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    // Removes Multiple Intermediate Values
    test('Removes Multiple Intermediate Values', () => {
      list.insert(1, [{ height: 4, width: 5 }, arr])
      list.remove(1, 3)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    // Removes One At Tail
    test('Removes One Value at Tail (Index1 = lastIndex)', () => {
      list.append([{ height: 4, width: 5 }])
      list.remove(list._lastIndex())
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    test('Removes One Value at Tail (Index1 = lastIndex, Index2 = Length)', () => {
      list.append([{ height: 4, width: 5 }])
      list.remove(list._lastIndex(), list.length)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    test('Removes One Value at Tail (Index1 > lastIndex)', () => {
      list.append([{ height: 4, width: 5 }]).remove(21)
      expect(JSON.stringify(list)).toBe(JSON.stringify(obj))
    })
    // Removes Multiple At Tail
    test('Removes Multiple Values at Tail (Index2 = Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(1, testList.length)
      expect(JSON.stringify(testList)).toBe(
        JSON.stringify(new LinkedList([carla]))
      )
    })
    test('Removes Multiple Values at Tail (Index2 > Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(1, 21)
      expect(JSON.stringify(testList)).toBe(
        JSON.stringify(new LinkedList([carla]))
      )
    })
    // Clears List
    test('Remove All (Index2 = Length)', () => {
      list.remove(0, list.length)
      expect(JSON.stringify(list)).toBe(JSON.stringify(new LinkedList()))
    })
    test('Remove All (Index2 > Length)', () => {
      list.remove(0, 100)
      expect(JSON.stringify(list)).toBe(JSON.stringify(new LinkedList()))
    })
    test('Remove All Via Clear Method', () => {
      list.clear()
      expect(JSON.stringify(list)).toBe(JSON.stringify(new LinkedList()))
    })
  })

module.exports = removalTests
