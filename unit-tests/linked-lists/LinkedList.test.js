const {
  appendingTests,
  prependingTests,
  removalTests,
  insertionTests,
  creationTests,
  changeValueTests,
  conversionTests,
  valueRetrievalTests,
  checkIndex
} = require('./singly-linked')

describe('Singly Linked List Test', () => {
  creationTests()
  checkIndex()
  appendingTests()
  prependingTests()
  insertionTests()
  changeValueTests()
  removalTests()
  valueRetrievalTests()
  conversionTests()
})
