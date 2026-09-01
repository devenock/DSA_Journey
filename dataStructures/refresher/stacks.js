// Stacks are data structures the enforces the LIFO pattern where the lastitem that is added to the stack is the first one to be removed.
// Stacks can be implemented using either and array or linkedlist.
// When using an array to implement it, we mainly use push and pop array methods to perform the operations.
// However, the most common way of implementng it is by using a linkedlist.

// Implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // stack methods
  push(val) {
    // create a new node with the val
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentNode = this.first;
      this.first = newNode;
      this.first.next = currentNode;
    }
    return this.size++;
  }

  pop() {
    if (!this.first) {
      return null;
    }

    let current = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return current.value;
  }
}
