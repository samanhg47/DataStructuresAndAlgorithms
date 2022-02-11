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
        throw new Error('Input must be an array')
      }
    } else if (arguments.length === 0) {
      this._createNewList()
    } else {
      throw new Error('Only one input allowed.')
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
  _checkIndex(index, checkLength = false) {
    function indexIsNaturalNumber(i) {
      const isInteger = Number.isInteger(i)
      const isNatural = i >= 0
      return isInteger && isNatural
    }
    if (indexIsNaturalNumber(index)) {
      console.log(!checkLength)
      if (!checkLength || index < this.length) {
        return true
      }
      throw new Error('That index is undefined')
    }
    throw new Error('Index must be a natural number (this includes 0)')
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
  append(value) {
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
  prepend(value) {
    const newNode = new Node(value, this.head)
    if (this.length === 0) {
      this.tail = newNode
    }
    this.head = newNode
    this.length++
    return this
  }
  insert(index, value) {
    if (this._checkIndex(index)) {
      if (index === 0) {
        return this.prepend(value)
      } else if (index < this.length) {
        let node = this._nodeAt(index - 1)
        const newNode = new Node(value, node.next)
        node.next = newNode
        this.length++
        return this
      }
      return this.append(value)
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
      return this
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
