const { LinkedList, carla, carla2, obj, list, arr } = require('./sll')

const header = 'SLL-Remove: '
const removalTests = () =>
  describe('Removal', () => {
    // Throws Error If Used On Empty List
    test(header + 'Error If Remove Used On Empty List', () => {
      const testList = new LinkedList()
      expect(() => {
        testList.remove(carla)
      }).toThrow("This Method Can't Be Used On An Empty List")
    })
    test(header + 'Error If Clear Used On Empty List', () => {
      const testList = new LinkedList()
      expect(() => {
        testList.clear()
      }).toThrow("This Method Can't Be Used On An Empty List")
    })

    // Throws Error If i1 < i2
    test(header + 'Error If i1 < i2', () => {
      expect(() => {
        return list.remove(3, 1)
      }).toThrow('Start Index Must Be Smaller Than Stop Index')
    })

    // Removes One At Head
    test(header + 'One Value At Head (i1 = 0)', () => {
      list.prepend([{ height: 4, width: 5 }]).remove(0)
      expect(list).toEqual(obj)
    })
    test(header + 'One Value At Head (i1 = 0, i2 = 1)', () => {
      list.prepend([{ height: 4, width: 5 }]).remove(0, 1)
      expect(list).toEqual(obj)
    })
    // Removes Multiple At Head
    test(header + 'Multiple Values At Head', () => {
      const testList = new LinkedList(arr)
      testList.remove(0, testList._lastIndex())
      expect(testList).toEqual(new LinkedList([carla2]))
    })
    // Removes One Intermediate Value
    test(header + 'One Intermediate Value', () => {
      list.insert(2, [{ height: 4, width: 5 }])
      list.remove(2)
      expect(list).toEqual(obj)
      list.insert(1, [{ height: 4, width: 5 }])
      list.remove(1)
      expect(list).toEqual(obj)
    })
    // Removes Multiple Intermediate Values
    test(header + 'Multiple Intermediate Values', () => {
      list.insert(1, [{ height: 4, width: 5 }, arr])
      list.remove(1, 3)
      expect(list).toEqual(obj)
    })
    // Removes One At Tail
    test(header + 'One Value at Tail (i1 = lasti)', () => {
      list.append([{ height: 4, width: 5 }])
      list.remove(list._lastIndex())
      expect(list).toEqual(obj)
    })
    test(header + 'One Value at Tail (i1 = lasti, i2 = Length)', () => {
      list.append([{ height: 4, width: 5 }])
      list.remove(list._lastIndex(), list.length)
      expect(list).toEqual(obj)
    })
    test(header + 'One Value at Tail (i1 > lasti)', () => {
      list.append([{ height: 4, width: 5 }]).remove(21)
      expect(list).toEqual(obj)
    })
    // Removes Multiple At Tail
    test(header + 'Multiple Values at Tail (i2 = Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(1, testList.length)
      expect(testList).toEqual(new LinkedList([carla]))
    })
    test(header + 'Multiple Values at Tail (i2 > Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(1, 21)
      expect(testList).toEqual(new LinkedList([carla]))
    })
    // Clears List
    test(header + 'All (i2 = Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(0, testList.length)
      expect(testList).toEqual(new LinkedList())
    })
    test(header + 'All (i2 > Length)', () => {
      const testList = new LinkedList(arr)
      testList.remove(0, 100)
      expect(testList).toEqual(new LinkedList())
    })
    test(header + 'All Via Clear Method', () => {
      const testList = new LinkedList(arr)
      testList.clear()
      expect(testList).toEqual(new LinkedList())
    })
  })

module.exports = removalTests
