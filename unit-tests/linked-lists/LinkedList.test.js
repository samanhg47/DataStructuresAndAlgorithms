const {
  sllCreationTests,
  sllCheckIndex,
  sllAppendingTests,
  sllPrependingTests,
  sllInsertionTests,
  sllChangeValueTests,
  sllRemovalTests,
  sllValueRetrievalTests,
  sllConversionTests
} = require('./singly-linked')
const {
  dllCreationTests,
  dllCheckIndex,
  dllAppendingTests,
  dllPrependingTests,
  dllInsertionTests,
  dllChangeValueTests,
  dllRemovalTests,
  dllValueRetrievalTests,
  dllConversionTests
} = require('./doubly-linked')

describe('Singly Linked List Test', () => {
  sllCreationTests()
  sllCheckIndex()
  sllAppendingTests()
  sllPrependingTests()
  sllInsertionTests()
  sllChangeValueTests()
  sllRemovalTests()
  sllValueRetrievalTests()
  sllConversionTests()
})

describe('Doubly Linked List Test', () => {
  dllCreationTests()
  dllCheckIndex()
  dllAppendingTests()
  dllPrependingTests()
  dllInsertionTests()
  dllChangeValueTests()
  dllRemovalTests()
  dllValueRetrievalTests()
  dllConversionTests()
})
