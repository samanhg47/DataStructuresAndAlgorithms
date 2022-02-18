const {
  LinkedList,
  carla,
  carla2,
  obj,
  list,
  arr,
  buildList
} = require('./sll')

// test('Properly Converts List To Array', () => {
//   expect(JSON.stringify(list.asArray())).toBe(JSON.stringify(arr))
// })

// test('Properly Converts List To Hash Table', () => {
//   const hashed = list.hashed()
//   expect(JSON.stringify([...hashed.keys()])).toBe(JSON.stringify(arr))
//   expect(hashed.get(carla)).toBe(1)
//   expect(hashed.get(carla2)).toBe(1)
//   expect(hashed.get(146)).toBe(1)
//   expect(hashed.get('4')).toBe(1)
// })

// test('Returns Correct Value At Selected Index', () => {
//   expect(list.valueAt(0)).toBe(carla)
//   expect(list.valueAt(1)).toBe('4')
//   expect(list.valueAt(2)).toBe(146)
//   expect(list.valueAt(3)).toBe(carla2)
// })

// test('Correct Indices Pass Check', () => {
//   expect(list._checkIndex(0)).toBe(true)
//   expect(list._checkIndex(1)).toBe(true)
//   expect(list._checkIndex(2)).toBe(true)
//   expect(list._checkIndex(3)).toBe(true)
//   expect(list._checkIndex(4, false)).toBe(true)
//   expect(list._checkIndex(1000000, false)).toBe(true)
// })

// test('Index Length Check Fails Indices', () => {
//   expect(() => {
//     list._checkIndex(4)
//   }).toThrow('Index 4 Is Undefinded')
//   expect(() => {
//     list._checkIndex(1000000)
//   }).toThrow('Index 1000000 Is Undefined')
// })

// test('Negative Numbers Fail Index Check', () => {
//   expect(() => {
//     list._checkIndex(-1)
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
//   expect(() => {
//     list._checkIndex(-1, false)
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
//   expect(() => {
//     list._checkIndex(-1000000)
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
//   expect(() => {
//     list._checkIndex(-1000000, false)
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
// })

// test('Strings Fail Index Check', () => {
//   expect(() => {
//     list._checkIndex('b')
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
//   expect(() => {
//     list._checkIndex('b', false)
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
// })

// test('Arrays Fail Index Check', () => {
//   expect(() => {
//     list._checkIndex(['a'])
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
//   expect(() => {
//     list._checkIndex(['a'], false)
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
// })

// test('Objects Fail Index Check', () => {
//   expect(() => {
//     list._checkIndex({ 1: 'a' })
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
//   expect(() => {
//     list._checkIndex({ 1: 'a' }, false)
//   }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
// })
