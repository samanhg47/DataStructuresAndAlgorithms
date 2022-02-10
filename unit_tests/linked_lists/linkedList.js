class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value, null)
    this.tail = this.head
    this.length = 1
  }
  _checkIndex(index, bool = false) {
    if (
      typeof index === 'number' &&
      index >= 0 &&
      index === Math.floor(index)
    ) {
      if (bool) {
        if (index < this.length) {
          return true
        }
        return false
      }
      return true
    }
    return false
  }
  _nodeAt(index) {
    if (this._checkIndex(index, true)) {
      let node = this.head
      let counter = 0
      while (counter < index) {
        node = node.next
        counter++
      }
      return node
    }
    return undefined
  }
  append(value) {
    const newNode = new Node(value, null)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = new Node(value, this.head)
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
    return undefined
  }
  remove(index) {
    if (this._checkIndex(index, true)) {
      let val
      if (index === 0) {
        const newHead = this.head.next
        val = this.head.value
        delete this.head
        this.head = newHead
      } else {
        let node = this._nodeAt(index - 1)
        const newNext = node.next.next
        val = node.next.value
        delete node.next
        node.next = newNext
      }
      this.length--
      return this
    }
    return undefined
  }
  mutateValue(index, value) {
    if (this._checkIndex(index, true)) {
      let node = this._nodeAt(index)
      node.value = value
      return this
    }
    return undefined
  }
  valueAt(index) {
    if (this._checkIndex(index, true)) {
      let node = this._nodeAt(index)
      return node.value
    }
    return undefined
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
    const hash = {}
    let value
    while (counter < this.length) {
      if (typeof node.value !== 'object') {
        value = node.value
        if (hash[value]) {
          hash[value] += 1
        } else {
          hash[value] = 1
        }
      } else {
        value = JSON.stringify(node.value)
        if (hash[value]) {
          hash[value] += 1
        } else {
          hash[value] = 1
        }
      }
      node = node.next
      counter++
    }
    return hash
  }
}

module.exports = LinkedList
