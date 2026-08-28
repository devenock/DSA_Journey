// it is the same as the SinglyLinkedList but has a pointer to the previous node

// node class
class Node{
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
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


  // get
  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }

    let currentHead = this.head
    let count = 0

    while (count !== index) {
      currentHead = currentHead.next
      count++
    }

    return currentHead;
  }


  // set
  set(val, index) {
    let setNode = this.get(index)
    if (setNode !== null) {
      setNode.val = val
      return true
    }
    return false;
  }


  // insert
  // PSEUDOCODE
  // 1. if index is less than zero or greater than or equals to the length, return false
  // 2. if the index is zero, unshift
  // 3. if the index is same as the length, push
  // 4. use the get method to access index - 1
  // 5. set the next and prev properties on the correct nodes to link everything together
  // 6. increment the length
  // 7. return true
  insert(val, index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      return this.unshift(val)
    }

    if (index === this.length - 1) {
      return this.push(val)
    }

    let newNode = new Node(val)
    let prevNode = this.get(index - 1)
    let afterNode = prevNode.next
    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = afterNode
    afterNode.prev = newNode
    this.length++
    return true;
  }


  // remove
  // PSEUDOCODE
  // 1. if the index is less than zero or greater than or equal to the length return undefined
  // 2. If the index is 0 , shift
  // 3. if the index is the same as the length - 1, pop
  // 4. Use get method to retrieve the item to be removed
  // 5. Update the next and prev properties to remove the found node from the list
  // 6. Set the next and prev to null on the found node
  // 7. Decrement the length
  // 8. Return the removed node

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }

    if (index === 0) {
      return this.shift()
    }

    if (index === this.length - 1) {
      return this.pop()
    }

    let removedItem = this.get(index)
    removedItem.prev.next = removedItem.next
    removedItem.next.prev = removedItem.prev
    removedItem.next = null
    removedItem.prev = null
    this.length--
    return removedItem;
  }


  // reverse
}
