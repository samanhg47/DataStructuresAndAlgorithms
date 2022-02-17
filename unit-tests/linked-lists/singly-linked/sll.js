function isNaturalNumber(num) {
  const isInteger = Number.isInteger(num)
  const isNatural = num >= 0
  return isInteger && isNatural
}
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
  _createNewList() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  _fillList(array) {
    this.head = new Node(array[0], null)
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
  _checkIndex(index, checkLength = true) {
    if (isNaturalNumber(index)) {
      if (!checkLength || index < this.length) {
        return true
      }
      throw new Error('That Index Is Undefined')
    }
    throw new Error('Index Must Be A Natural Number (This Includes 0)')
  }
  checkIndex(index, checkLength = true) {
    if (isNaturalNumber(index)) {
      if (!checkLength || index < this.length) {
        return true
      }
      return false
    }
    return false
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
  _append(value) {
    const newNode = new Node(value, null)
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
    } else {
      throw new Error(
        'Values must be in their desired order as elements in an array'
      )
    }
  }
  _prepend(value) {
    const newNode = new Node(value, this.head)
    if (this.length === 0) {
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
    } else {
      throw new Error(
        'Values must be in their desired order as elements in an array'
      )
    }
  }
  _insert(index, value) {
    let node = this._nodeAt(index - 1)
    const newNode = new Node(value, node.next)
    node.next = newNode
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
    } else {
      throw new Error(
        'Values must be in their desired order as elements in an array'
      )
    }
  }
  remove(index) {
    if (this._checkIndex(index, false)) {
      if (index === 0) {
        const newHead = this.head.next
        this.head = newHead
      } else {
        let node
        if (index >= this.length - 1) {
          index = this.length - 1
          node = this._nodeAt(index - 1)
          const newNext = node.next.next
          node.next = newNext
          this.tail = node
        } else {
          node = this._nodeAt(index - 1)
          const newNext = node.next.next
          node.next = newNext
        }
      }
      this.length--
      return this
    }
  }
  changeValue(index, value) {
    if (this._checkIndex(index)) {
      let node = this._nodeAt(index)
      node.value = value
      return this
    }
  }
  valueAt(index) {
    if (this._checkIndex(index)) {
      let node = this._nodeAt(index)
      return node.value
    }
  }
  indexOf(value) {
    let node = this.head
    let counter = 0
    let index
    while (index === undefined || counter < this.length) {
      node.value === value && (index = counter)
      node = node.next
      counter++
    }
    if (index !== undefined) {
      return index
    }
    throw new Error('Value does not exist within list')
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
