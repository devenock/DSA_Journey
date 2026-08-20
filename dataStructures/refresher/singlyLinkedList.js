// data is stored in nodes and nodes link to each other with a distinct head and tail
// The nodes are connected via pointers and the tail always has a null pointer
// to create a linkedlist, we need to use the class keyword to define the Node and the LinkedList classes

// creating a node(has value/data and a pointer to the next node)
class Node{
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// create a linkedlist class(has got head, tail and length)
// head and tail are initialised as null since we are starting from scratch and the length is also 0
class SinglyLinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // methods
  push(val) {
    // create a new node based on the Node class
    let newNode = new Node(val)
    // check if this is an empty list or it has nodes
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

  pop() {
    // first check if we have nodes in the list
    if (!this.head) {
      return undefined;
    }

    // initialize the current node to the head
    let current = this.head
    // declare the newTail as the next node since we are traversing the list
    let newTail = current

    // set condition
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail.next = null
    this.tail = newTail
    this.length--
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
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
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      return null
    }

    // declare the current pos
    let cPos = this.head
    let defaultPos = 0

    // check to see that the default position is not equal to the pos
    while (defaultPos !== pos) {
      cPos = cPos.next
      defaultPos++
    }
    return cPos;
  }

  set(pos, val) {
    let rightPos = this.get(pos)
    if (rightPos) {
      rightPos.val = val
      return true;
    }
    return false;
  }
}
