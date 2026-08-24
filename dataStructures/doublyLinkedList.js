// it is the same as the SinglyLinkedList but has a pointer to the previous node

// node class
class Node{
  constructor(val) {
    this.val = val
    this.next = null
    this.head = null
  }
}

// linked list class
class DoublyLinkedList{
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // methods


  // push
  // PSEUDOCODE
  // 1. Create a new node with the value passed to the function
  // 2. If the head property is null set the head and the tail to be the newly created node.
  // 3. If not, set the next property on the tail to be that node
  // 4. Set the previous property on the newly created node to be the tail
  // 5. Set the tail to be the newly created node
  // 6. Increment the length
  // 7. Return the Doubly Linked List
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


  // pop
  // PSEUDOCODE
  // 1. If there is no head, return undefined
  // 2. Store the current tail in a variable to return later
  // 3. If the length is 1, set the head and tail to be null
  // 4. Update the tail to be the previous Node
  // 5. Set the newTail's next to null
  // 6. Decrement the length
  // 7. Return the value removed.
  //
  pop() {
    if (!this.head) {
      return undefined;
    }

    let currentTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = currentTail.prev
      this.tail.next = null
      currentTail.prev = null
    }
    this.length--
    return currentTail;
  }


  // shift
  // PSEUDOCODE
  // 1. If length is 0, return undefined
  // 2. Store the current head property in a variable.
  // 3. If the length is one, set the head and the tail to null
  // 4. Update the head to be the next of the old head
  // 5. Set the head's prev property to null
  // 6. Set the old head's next to null
  // 7. Decrement the length
  // 8. Return the old head

  shift() {
    if (!this.head) {
      return undefined
    }

    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.next = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead;
  }

  // unshift


  // get


  // set


  // insert


  // remove


  // reverse
}
