const dllCheckIndex = require('./dll-checkIndex')
const dllAppendingTests = require('./dll-appending')
const dllChangeValueTests = require('./dll-changeValue')
const dllConversionTests = require('./dll-conversion')
const dllCreationTests = require('./dll-creation')
const dllInsertionTests = require('./dll-insertion')
const dllPrependingTests = require('./dll-prepending')
const dllRemovalTests = require('./dll-removal')
const dllValueRetrievalTests = require('./dll-valueAt')
const dllIndexOfTests = require('./dll-indexOf')

module.exports = {
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
}
