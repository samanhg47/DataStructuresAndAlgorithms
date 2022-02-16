class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
class LinkedList {
  constructor(input) {
    if (arguments.length === 1) {
      const inputIsArray = Array.isArray(input)
      if (inputIsArray) {
        this._createNewList()
        if (input.length > 0) {
          this._fillList(input)
        }
      } else {
        throw new Error('Input Must Be An Array')
      }
    } else if (arguments.length === 0) {
      this._createNewList()
    } else {
      throw new Error('One Input Maximum')
    }
  }
  _fillList(array) {
    this.head = new Node(array[0], null)
    this.tail = this.head
    this.length = 1
    if (array.length > 1) {
      let index = 1
      while (index < array.length) {
        this.append(array[index])
        index++
      }
    }
  }
  _createNewList() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  _insertAll(index, values) {
    let node = this._nodeAt(index - 1)
    let i = 0
    let nodeCluster
    let selectedNode
    for (let value of values) {
      if (i === 0) {
        nodeCluster = new Node(value, null)
        selectedNode = nodeCluster
      } else {
        selectedNode.next =
          i != values.length - 1
            ? new Node(value, null)
            : new Node(value, node.next)
        selectedNode = selectedNode.next
      }
      i++
    }
    node.next = nodeCluster
    this.length += values.length
  }
  _checkIndex(index, checkLength = false) {
    function indexIsNaturalNumber(i) {
      const isInteger = Number.isInteger(i)
      const isNatural = i >= 0
      return isInteger && isNatural
    }
    if (indexIsNaturalNumber(index)) {
      if (!checkLength || index < this.length) {
        return true
      }
      throw new Error('That Index Is Undefined')
    }
    throw new Error('Index Must Be A Natural Number (This Includes 0)')
  }
  _nodeAt(index) {
    let node = this.head
    let counter = 0
    while (counter < index) {
      node = node.next
      counter++
    }
    return node
  }
  appendOne(value) {
    const newNode = new Node(value, null)
    if (this.length > 0) {
      this.tail.next = newNode
    } else {
      this.head = newNode
    }
    this.tail = newNode
    this.length++
    return this
  }
  appendMany(values) {
    for (let value of values) {
      this.appendOne(value)
    }
    this.length += values.length
    return this
  }
  prependOne(value) {
    const newNode = new Node(value, this.head)
    if (this.length === 0) {
      this.tail = newNode
    }
    this.head = newNode
    this.length++
    return this
  }
  prependMany(values) {
    for (let i = values.length - 1; i > -1; i--) {
      this.prependOne(values[i])
    }
    this.length += values.length
    return this
  }
  insertOne(index, value) {
    if (this._checkIndex(index)) {
      if (index === 0) {
        return this.prependOne(value)
      } else if (index < this.length) {
        let node = this._nodeAt(index - 1)
        const newNode = new Node(value, node.next)
        node.next = newNode
        this.length++
        return this
      }
      return this.appendOne(value)
    }
  }
  insertMany(index, values) {
    if (Array.isArray(values)) {
      if (this._checkIndex(index)) {
        if (index === 0) {
          this.prependMany(values)
        } else if (index < this.length - 1) {
          this._insertAll(index, values)
        } else {
          this.appendMany(values)
        }
        return this
      }
    } else {
      throw new Error(
        'Values must be in their desired order as elements in an array'
      )
    }
  }
  remove(index) {
    if (this._checkIndex(index)) {
      if (index === 0) {
        const newHead = this.head.next
        delete this.head
        this.head = newHead
      } else {
        index = index >= this.length ? this.length - 1 : index
        let node = this._nodeAt(index - 1)
        const newNext = node.next.next
        delete node.next
        node.next = newNext
      }
      this.length--
      return this
    }
  }
  mutateValue(index, value) {
    if (this._checkIndex(index, true)) {
      let node = this._nodeAt(index)
      node.value = value
      return node
    }
  }
  valueAt(index) {
    if (this._checkIndex(index, true)) {
      let node = this._nodeAt(index)
      return node.value
    }
  }
  asArray() {
    let node = this.head
    let counter = 0
    const arr = [node.value]
    while (counter < this.length - 1) {
      node = node.next
      arr.push(node.value)
      counter++
    }
    return arr
  }
  hashed() {
    let node = this.head
    let counter = 0
    const hash = new Map()
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
    return hash
  }
}

module.exports = LinkedList
