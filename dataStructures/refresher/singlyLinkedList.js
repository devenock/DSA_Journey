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

// linkedlist class(initialize head and tail to null for an empty list and the length to zero)
class SinglyLinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // methods
  push(val) {
    // create a new node instance
    let newNode = new Node(val)
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
    // first check if the list is empty
    if (!this.head) {
      return undefined
    }

    // get the current head and the new tail
    let currentHead = this.head
    let newTail = currentHead

    // se the looping condition
    while (currentHead.next) {
      newTail = currentHead
      currentHead = currentHead.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    return currentHead;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head
    this.head = current.next
    this.length--;
    return current;
  }

  unshift(val) {
    // create a node
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
      return false
    }

    let count = 0
    let current = this.head
    while (pos !== count) {
      current = current.next
      count++
    }
    return current;
  }

  set(pos, val) {
    if (pos < 0 || pos >= this.length) {
      return false
    }
    let val = this.get(val)
    if (!val) {
      return false
    } else {
      val.val = val
      return true
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    let newNode = new Node(val)
    // check if index is either the first or the last
    if (index === 0) {
      this.unshift(val)
      return true
    }

    if (index === this.length) {
      this.push(val)
      return true
    }

    // get the previous node
    let prevNode = this.get(index - 1)

    // get the  prevNode next
    let temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp
    this.length++
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length - 1) {
      return undefined
    }

    if (index === 0) {
      this.shift()
    }

    if (index === this.length - 1) {
      this.pop()
    }

    let prev = this.get(index - 1)
    let toBeRemoved = prev.next
    prev.next = toBeRemoved.next
    this.length--
    return toBeRemoved;
  }
}
