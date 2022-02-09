class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}
class LinkedList {
  constructor(value) {
    this.set = {}
    this.addValue(value)
    this.head = new Node(value, null)
    this.tail = this.head
    this.length = 1
  }
  checkIndex(index, bool = false) {
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
  addValue(value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    this.set[value] ? this.set[value]++ : (this.set[value] = 1)
  }
  deleteValue(value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    this.set[value]--
  }
  includes(value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    return this.set[value] ? true : false
  }
  nodeAt(index) {
    if (this.checkIndex(index, true)) {
      let node = this.head
      let counter = 0
      while (counter < index) {
        node = node.next
        counter++
      }
      return node
    }
    undefined
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
  append(value) {
    this.addValue(value)
    const newNode = new Node(value, null)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    this.addValue(value)
    const newNode = new Node(value, this.head)
    this.head = newNode
    this.length++
    return this
  }
  insert(value, index) {
    if (this.checkIndex(index)) {
      if (index === 0) {
        return this.prepend(value)
      } else if (index < this.length) {
        let node = this.nodeAt(index - 1)
        const newNode = new Node(value, node.next)
        node.next = newNode
        this.addValue(value)
        this.length++
        return this
      }
      return this.append(value)
    }
    return 'Invalid Node Index'
  }
  remove(index) {
    if (this.checkIndex(index, true)) {
      let val
      if (index === 0) {
        const newHead = this.head.next
        val = this.head.value
        delete this.head
        this.head = newHead
      } else {
        let node = this.nodeAt(index - 1)
        const newNext = node.next.next
        val = node.next.value
        delete node.next
        node.next = newNext
      }
      this.deleteValue(val)
      this.length--
      return this
    }
    return 'Invalid Node Index'
  }
  valueAt(index) {
    if (this.checkIndex(index, true)) {
      let node = this.nodeAt(index)
      return node.value
    }
    return undefined
  }
}

module.exports = LinkedList
