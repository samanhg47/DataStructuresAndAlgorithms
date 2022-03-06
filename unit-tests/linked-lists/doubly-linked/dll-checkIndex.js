const { list } = require('./dll')

const header = 'DLL-CheckIndex: '
const checkIndex = () =>
  describe('Index Check', () => {
    // Number Errors
    test(header + 'Error If Length Check = True & Index > Last Index', () => {
      expect(() => {
        list._checkIndex(4)
      }).toThrow('Index 4 Is Undefined')
      expect(() => {
        list._checkIndex(1000000)
      }).toThrow('Index 1000000 Is Undefined')
    })
    test(header + 'Error If Index Is Negative', () => {
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
    test(header + 'Error If Argument Is String', () => {
      expect(() => {
        list._checkIndex('b')
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex('b', false)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
    })
    test(header + 'Error If Argument Is Array', () => {
      expect(() => {
        list._checkIndex(['a'])
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex(['a'], false)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
    })
    test(header + 'Error If Argument Is Object', () => {
      expect(() => {
        list._checkIndex({ 1: 'a' })
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
      expect(() => {
        list._checkIndex({ 1: 'a' }, false)
      }).toThrow('Indices Must Be Natural Numbers (This Includes 0)')
    })

    // Passes
    test(header + 'Correct Indices Pass Check', () => {
      expect(list._checkIndex(0)).toBeTruthy()
      expect(list._checkIndex(1)).toBeTruthy()
      expect(list._checkIndex(2)).toBeTruthy()
      expect(list._checkIndex(3)).toBeTruthy()
      expect(list._checkIndex(4, false)).toBeTruthy()
      expect(list._checkIndex(1000000, false)).toBeTruthy()
    })
  })

module.exports = checkIndex
