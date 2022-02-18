const appendingTests = require('./sll-appending')
const changeValueTests = require('./sll-changeValue')
const conversionTests = require('./sll-conversion')
const creationTests = require('./sll-creation')
const insertionTests = require('./sll-insertion')
const prependingTests = require('./sll-prepending')
const removalTests = require('./sll-removal')

module.exports = {
  insertionTests,
  removalTests,
  creationTests,
  prependingTests,
  appendingTests,
  changeValueTests,
  conversionTests
}
