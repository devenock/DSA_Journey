// ## Doubly Linked list is different from a singly linkedlist because it has both the next and prev pointer references
// The node has a prev pointer which points to the previous pointer and a next pointer

// create a node class
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

  // linkedlist methods
  // push: add a node at the end of the list
  push(val) {
    // first create a new node using the val
    let newNode = new Node(val)

    // check to see if there is any node in the list or not before setting head and tail
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

  // pop: remove a node from the end of the list
  pop() {
    // first check to see if there is anything to remove
    if (!this.head) {
      return undefined;
    }
    // get the item to be removed
    let removedTail = this.tail
    // if only one node exist, set head and tail to null
    if (this.length == 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removedTail.prev
      removedTail.prev = null
      this.tail.next = null
    }

    this.length--
    return removedTail;
  }

  // shift: remove the first node in the list
  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head

    // check length
    if (this.length == 1) {
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

  // unshift:add to the start of the list
  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = null
      this.tail = null
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this;
  }

  // get: find a node by index/position in a list
  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }

    let currentHead = this.head
    let counter = 0

    while (index != counter) {
      currentHead = currentHead.next
      counter++
    }
    return currentHead;
  }

  // set: changing the value of a node using their index
  set(val, index) {
    let changedNode = this.get(index)
    if (changedNode != null) {
      changedNode.val = val
      return true
    }
    return false;
  }

  // insert
  // remove
}
