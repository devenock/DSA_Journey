// What is a linked list?
// A data structure that contains a head, tail and length property.
// Linked Lists consiste of nodes, and each node has a value and a pointer to another node or null.
// It is simply a collection of nodes which can not be accessed randomly via indices since they are not indexed.
// Mainly useful when dealing with large data sets

// start by creating a Node class
// For this first Node class, we are taking its value and then we are setting next pointer to null since we are talking of just a single node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// now let us create the singlylinkedlist class
// this class has head, tail and length
// head is null since we do not have any node yet
// tail is also null
// the length is 0 since we do not have any node as well
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // we define methods to manipulate the Linked List Class here
  // PUSH: adding to the end of the linked list
  // PUSHING PSEUDOCODE
  // 1. This function should accept a value
  // 2. Create a new node using the value passed to the function
  // 3. If there is no head property on the list, set the head and the tail to be the newly created node.
  // 4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
  // 5. Increament the length by one.
  // 6. Return the list
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode; //this.tail = this.head(same thing)
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  // POP: removing the last node in a linked list.
  // it seems easier at first but trickier in real sence because when we remove the last node, we have to find a new next and that means
  // moving through the entire linked list since we do not have a reverse pointer in singly linked list.
  // POPING PSEUDOCODE
  // 1. If there are no nodes in the list, return undefined(edge case)
  // 2. Loop through the list until you reach the tail
  // 3. Set the next property of the 2nd to last node to be null
  // 4. Set the tail to be the 2nd to last node.
  // 5. Decrement the length of the list by 1
  // 6. Return the value of the node removed.
  pop() {
    if (this.length === 0 || !this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  // SHIFT:removing a new Node from the beginning of the Linked List.
  // It is always a constant time since you just remove the first item,
  // assign it to a variable, delete the next pointer and then name the next pointer the new node.
  // PSEUDOCODE
  // 1. If there are no nodes, return undefined.
  // 2. Store the current head property in a variable.
  // 3. Set the head property to be the current head's nnext property.
  // 4. Decrement the length by 1.
  // 5. Return the value of the node removed.
  shift() {
    if (this.length === 0 || !this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  // UNSHIFT:Adding a new node to the beginning og the Linked List
  // PSEUDOCODE
  // 1. This function should accept a value
  // 2. Create a new node using the value passed to the function.
  // 3. If there is no head property on the list, set the head and tail to be the newly created node.
  // 4. Otherwise set the newly created node's next property to be the current head property on the list.
  // 5. Set the head property on the list to be that newly created node.
  // 6. Increment the length of the list by 1.
  // 7. Return the linked list.
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // GET: Retrieving a node by it's position in the Linked List
  // PSEUDOCODE
  // 1. This function should accept an index.
  // 2. If the index is less than zero or greater than or equal to the length of the list, return null
  // 3. Loop through the list until you reach the index and return the node at that specific index.
  get(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== position) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // SET:
  // INSERT:
  // REMOVE:
  // REVERSE:
}

// define an instance of the singly linked list to use it
let myList = new SinglyLinkedList();
myList.push(20);
