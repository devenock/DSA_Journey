// Queue Introduction
// It is a linear data structure that follows FIFO(First In First Out) Principle, so the first element inserted is the first to be popped out.
// It is an ordered list in which insertions are done at one end which is known as the rear and deletions are done from the other end known as the front.
// A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first.
// The difference between stack and queue is in removing an element. In a stack we remove the item that is most recently added while in a queue,
// we remove the item that is least recently added.

// Basic Terminologies of Queue
// Front: Position of the entry in a queue ready to be served, that is, the first entry that will be removed from the queue. Also known as the head of the queue
// Rear: Position of the last entry in the queue, that is, the most recently added. Also refered to as the tail of the queue
// Size: The current number of elements in the queue
// Capacity: The maximum number of elements the queue can hold.

// Types of Queues
// Can be classified into 3 types:
// 1. Simple Queue
// A simple queue follows the FIFO (First In, First Out) principle.

// Insertion is allowed only at the rear (back).
// Deletion is allowed only from the front.
// Can be implemented using a linked list or a circular array.
// When an array is used, we often prefer a circular queue, which is mainly an efficient array implementation of a simple queue. It efficiently utilizes memory by reusing the empty spaces left after deletion, avoiding wastage that occurs in a normal linear array implementation..

// 2. Double-Ended Queue (Deque)
// In a deque, insertion and deletion can be performed from both ends.

// 3. Priority Queue
// A queue where each element is assigned a priority, and deletion always happens based on priority (not just position).

// Queue Operations
// Enqueue: Adds an element to the end (rear) of the queue. If the queue is full, an overflow error occurs.
// Dequeue: Removes the element from the front of the queue. If the queue is empty, an underflow error occurs.
// Peek/Front: Returns the element at the front without removing it.
// Size: Returns the number of elements in the queue.
// isEmpty: Returns true if the queue is empty, otherwise false.
// isFull: Returns true if the queue is full, otherwise false.

// QUEUE OPERATIONS
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // methods

  // ENQUEUE PSEUDOCODE
  // 1. The function accepts a value
  // 2. Create a new node using that value passed to the function
  // 3. If there are no nodes in the queue, set this node to be the first and last property of the queue
  // 4. Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node.
  // 5. Increment the size of the queue by 1
  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
    // return ++this.size;
  }

  // DEQUEUE PSEUDOCODE
  // 1. if there are no nodes in the queue, return null
  // 2. Create a temporary variable to store the first property on the queue
  // 3. If there is only 1 node, set the first and the last property to be null
  // 4. If there is more than one node, set the first property to be the next property in the current first
  // 5. Decrement the size by 1
  // 6. Return the value of the node removed.
  dequeue() {
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

  // BIG O NOTATIONS
  // Searching: O(n)
  // Access: O(n)
  // Insertion: O(1)
  // Deletion: O(1)
}
