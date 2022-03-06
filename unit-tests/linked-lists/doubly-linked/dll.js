function isNaturalNumber(num) {
  const isInteger = Number.isInteger(num)
  const isNatural = num >= 0
  return isInteger && isNatural
}
class Node {
  constructor(value, next, last) {
    this.value = value
    this.next = next
    this.last = last
  }
}
class LinkedList {
  constructor(input) {
    if (arguments.length === 1) {
      const inputIsArray = Array.isArray(input)
      if (inputIsArray) {
        this._emptyList()
        if (input.length > 0) {
          this._fillList(input)
        }
      } else {
        throw new Error('Input Must Be An Array')
      }
    } else if (arguments.length === 0) {
      this._emptyList()
    } else {
      throw new Error('One Input Maximum')
    }
  }
  // Construction / Utility /////////////////////////////////////////
  _emptyList() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  _fillList(array) {
    this.head = new Node(array[0], null, null)
    this.tail = this.head
    this.length = 1
    if (array.length > 1) {
      let index = 1
      while (index < array.length) {
        this._append(array[index])
        index++
      }
    }
  }
  // Indices ////////////////////////////////////////////////////////
  _lastIndex() {
    return this.length > 0 ? this.length - 1 : null
  }
  _xFromTail(index) {
    return this._lastIndex() - index
  }
  _isCloserToHead(index) {
    return index < this._xFromTail(index) ? true : false
  }
  _checkIndex(index, checkLength = true) {
    if (isNaturalNumber(index)) {
      if (!checkLength || index < this.length) {
        return true
      }
      this._undefindedIndexError(index)
    }
    this._naturalIndexError()
  }
  _nodeAt(index) {
    let node
    if (this._isCloserToHead(index)) {
      node = this.head
      let counter = 0
      while (counter < index) {
        node = node.next
        counter++
      }
    } else {
      node = this.tail
      let counter = 0
      while (counter < this._xFromTail(index)) {
        node = node.last
        counter++
      }
    }
    return node
  }
  valueAt(index) {
    this._emptyListError()
    if (this._checkIndex(index)) {
      let node = this._nodeAt(index)
      return node.value
    }
  }
  indexOf(value) {
    this._emptyListError()
    let indices = []
    const searchFirstHalf = new Promise((resolve) => {
      let node = this.head
      let counter = 0
      while (this._isCloserToHead(counter)) {
        node.value === value && indices.push(counter)
        node = node.next
        counter++
      }
      resolve()
    })
    const searchSecondHalf = new Promise((resolve) => {
      let node = this.tail
      let counter = this._lastIndex()
      while (!this._isCloserToHead(counter)) {
        node.value === value && indices.push(counter)
        node = node.last
        counter--
      }
      resolve()
    })
    Promise.all([searchFirstHalf, searchSecondHalf]).then((_) => {
      if (indices.length !== 0) {
        return indices
      }
      this._valueNotFoundError()
    })
  }
  // Appending //////////////////////////////////////////////////////
  _append(value) {
    const newNode = new Node(value, null, this.tail)
    if (this.length > 0) {
      this.tail.next = newNode
    } else {
      this.head = newNode
    }
    this.tail = newNode
    this.length++
  }
  append(values) {
    if (Array.isArray(values)) {
      for (let value of values) {
        this._append(value)
      }
      return this
    }
    this._valueAsArrayErr()
  }
  // Prepending /////////////////////////////////////////////////////
  _prepend(value) {
    const newNode = new Node(value, this.head, null)
    if (this.length > 0) {
      this.head.last = newNode
    } else {
      this.tail = newNode
    }
    this.head = newNode
    this.length++
  }
  prepend(values) {
    if (Array.isArray(values)) {
      for (let i = values.length - 1; i > -1; i--) {
        this._prepend(values[i])
      }
      return this
    }
    this._valueAsArrayErr()
  }
  // Insertion //////////////////////////////////////////////////////
  _insert(index, value) {
    let node = this._nodeAt(index - 1)
    const newNode = new Node(value, node.next, node)
    newNode.next.last = newNode
    newNode.last.next = newNode
    this.length++
  }
  insert(index, values) {
    if (Array.isArray(values)) {
      if (this._checkIndex(index, false)) {
        if (index === 0) {
          this.prepend(values)
        } else if (index < this.length) {
          let currentIndex = index
          for (const value of values) {
            this._insert(currentIndex, value)
            currentIndex++
          }
        } else {
          this.append(values)
        }
        return this
      }
    }
    this._valueAsArrayErr()
  }
  // Removal ////////////////////////////////////////////////////////
  clear() {
    this._emptyListError()
    this._emptyList()
  }
  _remove(index1, index2) {
    let difference = index2 - index1
    const newLength = this.length - difference
    if (newLength === 0) {
      this._emptyList()
      return this
    }
    const node1 = this._nodeAt(index1 - 1)
    const node2 = this._nodeAt(index2)
    if (index1 === this._lastIndex() || index2 === this.length) {
      node1.next = null
      this.tail = node1
    } else if (index1 === 0) {
      node2.last = null
      this.head = node2
    } else {
      node1.next = node2
      node2.last = node1
    }
    this.length = newLength
    return this
  }
  remove(index1, index2 = index1 + 1) {
    this._emptyListError()
    if (this._checkIndex(index1, false)) {
      if (this._checkIndex(index2, false)) {
        if (index1 < index2) {
          index1 > this._lastIndex() && (index1 = this._lastIndex())
          index2 > this.length && (index2 = this.length)
          this._remove(index1, index2)
          return this
        }
        this._startSmallerError()
      }
    }
  }
  // Change Value ///////////////////////////////////////////////////
  changeValue(index, value) {
    this._emptyListError()
    if (this._checkIndex(index)) {
      let node = this._nodeAt(index)
      node.value = value
      return this
    }
  }
  // Conversion /////////////////////////////////////////////////////
  asArray() {
    let node = this.head
    const array = []
    if (node) {
      let counter = 0
      while (counter < this.length) {
        array.push(node.value)
        node = node.next
        counter++
      }
    }
    return array
  }
  hashed() {
    let node = this.head
    let counter = 0
    const hash = new Map()
    if (node) {
      let value
      while (counter < this.length) {
        value = node.value
        if (hash.get(value)) {
          hash.set(value, hash.get(value) + 1)
        } else {
          hash.set(value, 1)
        }
        node = node.next
        counter++
      }
    }
    return hash
  }
  // Errors /////////////////////////////////////////////////////////
  _valueAsArrayErr() {
    throw new Error(
      'Values Must Be In Their Desired Order As Elements In An Array'
    )
  }
  _undefindedIndexError(index) {
    throw new Error(`Index ${index} Is Undefined`)
  }
  _naturalIndexError() {
    throw new Error('Indices Must Be Natural Numbers (This Includes 0)')
  }
  _startSmallerError() {
    throw new Error('Start Index Must Be Smaller Than Stop Index')
  }
  _valueNotFoundError() {
    throw new Error('Value Does Not Exist Within List')
  }
  _emptyListError() {
    if (!this.length) {
      throw new Error("This Method Can't Be Used On An Empty List")
    }
  }
}

const carla = { name: 'Carla' }
const carla2 = { name: 'Carla' }
const arr = [carla, '4', 146, carla2]
const list = new LinkedList(['4'])
  .prepend([carla])
  .append([carla2])
  .insert(2, [146])
const obj = {
  head: {
    value: carla,
    next: {
      value: '4',
      next: { value: 146, next: { value: carla2, next: null } }
    }
  },
  tail: { value: carla2, next: null },
  length: 4
}
function buildList(inp1, inp2 = null) {
  return inp2 ? new LinkedList(inp1, inp2) : new LinkedList(inp1)
}

module.exports = {
  LinkedList,
  carla,
  carla2,
  arr,
  list,
  obj,
  buildList
}
