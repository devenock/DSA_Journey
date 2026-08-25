// doubly linkedlist is similar to a singly linkedlist in many ways only that it has a pointer reference to the previous Node.
// creating a node class for a doubly linkedlist looks like

class Node{
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

// linkedlist class
class DoublyLinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // linked list methods
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined
    }

    let removedTail = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removedTail.prev
      this.tail.next = null
      removedTail.prev = null
    }
    this.length--
    return removedTail
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = currentHead.next
      this.head.prev = null
      currentHead.next = null
    }
    this.length--
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentHead = this.head
    let count = 0
    while (index !== count) {
      currentHead = currentHead.next
      count++
    }
    return currentHead;
  }

  set(val, index) {
    let newVal = this.get(index)
    if (!newVal) {
      return false;
    }
    newVal.val = val
    return true;
  }
}
