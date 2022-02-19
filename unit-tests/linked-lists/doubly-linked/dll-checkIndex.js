const { list } = require('./dll')

const checkIndex = () =>
  describe('Index Check', () => {
    // Passes
    test('DLL: Correct Indices Pass Check', () => {
      expect(list._checkIndex(0)).toBe(true)
      expect(list._checkIndex(1)).toBe(true)
      expect(list._checkIndex(2)).toBe(true)
      expect(list._checkIndex(3)).toBe(true)
      expect(list._checkIndex(4, false)).toBe(true)
      expect(list._checkIndex(1000000, false)).toBe(true)
    })

    // Number Errors
    test('DLL: Length Check Fails Indices', () => {
      expect(() => {
        list._checkIndex(4)
      }).toThrow('Index 4 Is Undefined')
      expect(() => {
        list._checkIndex(1000000)
      }).toThrow('Index 1000000 Is Undefined')
    })
    test('DLL: Negative Numbers Fail Index Check', () => {
      expect(() => {
        list._checkIndex(-1)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex(-1, false)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex(-1000000)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex(-1000000, false)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
    })

    // Input Type Errors
    test('DLL: Strings Fail Index Check', () => {
      expect(() => {
        list._checkIndex('b')
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex('b', false)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
    })
    test('DLL: Arrays Fail Index Check', () => {
      expect(() => {
        list._checkIndex(['a'])
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex(['a'], false)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
    })
    test('DLL: Objects Fail Index Check', () => {
      expect(() => {
        list._checkIndex({ 1: 'a' })
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex({ 1: 'a' }, false)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
    })
  })

module.exports = checkIndex
