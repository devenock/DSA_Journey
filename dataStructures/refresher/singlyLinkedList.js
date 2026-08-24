// a linkedlist stores data in nodes and each node has a value and a pointer reference to the next node.
// create a node class
class Node{
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// create a linkedlist class with head, tail inititalised to null and the lenfgth initialized to zero
class SinglyLinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // push
  push(val) {
    // create a new node
    let newNode = new Node(val)
    // check if the list is empt of has nodes
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this;
  }


  // pop
  pop() {
    // first check if the list has nodes or if it is empty
    if (!this.head) {
      return undefined;
    }
    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    return current;
  }

  // shift
  shift() {
    if (!this.head) {
      return undefined
    }
    let current = this.head
    this.head = current.next
    this.length--
    return current;
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      newNode.next = this.head
    }
    this.length++
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }

    let count = 0
    let current = this.head
    while (index !== count) {
      current = current.next
      count++
    }
    return current;
  }

  set(index, value) {
    let val = this.get(index)
    if (!val) {
      return false
    } else {
      val.value = value
      return true
    }
  }

  insert(val, pos) {
    let newNode = newNode(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }

    if (pos === 0) {
      this.unshift(val)
      return true
    }

    if (pos === this.length) {
      this.push(val)
      return true
    }

    let prev = this.get(pos - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    return true;
  }

  remove(pos) {
    if (pos < 0 || pos >= this.length) {
      return undefined;
    }

    if (pos === 0) {
      this.shift()
      return true
    }

    if (pos === this.length - 1) {
      this.pop()
      return true
    }
    let prev = this.get(pos - 1)
    let removed = prev.next
    prev.next = removed.next
    return removed;
  }

}
