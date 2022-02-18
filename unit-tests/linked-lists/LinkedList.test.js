const {
  appendingTests,
  prependingTests,
  removalTests,
  insertionTests,
  creationTests,
  changeValueTests,
  conversionTests
} = require('./singly-linked')

describe('Singly Linked List Test', () => {
  creationTests()
  appendingTests()
  prependingTests()
  insertionTests()
  changeValueTests()
  removalTests()
  conversionTests()
})
