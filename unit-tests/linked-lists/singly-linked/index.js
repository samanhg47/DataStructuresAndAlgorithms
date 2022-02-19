const sllCheckIndex = require('./sll-checkIndex')
const sllAppendingTests = require('./sll-appending')
const sllChangeValueTests = require('./sll-changeValue')
const sllConversionTests = require('./sll-conversion')
const sllCreationTests = require('./sll-creation')
const sllInsertionTests = require('./sll-insertion')
const sllPrependingTests = require('./sll-prepending')
const sllRemovalTests = require('./sll-removal')
const sllValueRetrievalTests = require('./sll-valueAt')
const sllIndexOfTests = require('./sll-indexOf')

module.exports = {
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
}
