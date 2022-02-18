const {
  appendingTests,
  prependingTests,
  removalTests,
  insertionTests,
  creationTests,
  changeValueTests
} = require('./singly-linked')

describe('Singly Linked List Test', () => {
  creationTests()
  appendingTests()
  prependingTests()
  insertionTests()
  changeValueTests()
  removalTests()
})
