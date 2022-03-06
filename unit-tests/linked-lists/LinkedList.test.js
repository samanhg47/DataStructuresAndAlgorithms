const {
  sllCreationTests,
  sllCheckIndex,
  sllAppendingTests,
  sllPrependingTests,
  sllInsertionTests,
  sllIndexOfTests,
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
  dllIndexOfTests,
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
  sllIndexOfTests()
  sllChangeValueTests()
  sllRemovalTests()
  sllValueRetrievalTests()
  sllConversionTests()
})

describe('Doubly Linked List Test', () => {
  dllCreationTests()
  dllValueRetrievalTests()
  dllCheckIndex()
  dllAppendingTests()
  dllPrependingTests()
  dllInsertionTests()
  dllIndexOfTests()
  dllChangeValueTests()
  dllRemovalTests()
  dllConversionTests()
})
