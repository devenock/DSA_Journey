// BINARY HEAPS
// A binary heap is a complete binary tree which satifies the heap ordering property.
// The ordering can be of two types:
//  1. the min-heap property: The value of each node is greater that or equal to the value of it's parent, with the minimum-value element at the root.
//  2. the max-heap property: the value of each node is less than or equal to the value of it's parent, with the maximum-value element at the root.

// MAX-BINARY HEAP
// - Each parent has at most two child nodes
// - The value of each parent node is always greater than t's child nodes
// - In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
// - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

// Binary heaps are commonly used in priority queues and heap sort algorithms because of their efficient insertion and deletion operations.
// A Binary Heap is a complete Binary Tree and is typically represented as an array.
// In this array-based representation, for any element at index i, the left child is at index 2i + 1 and the right child is at index 2i + 2. The parent of any element
// is at index (i -1)/2

// Applications of Heaps
// 1. Heap Sort: Uses Binary Heap to sort an array in O(nLogn) time
// 2. Priority Queue: Are efficiently implemented using Binary Heaps, which allow operations like insert, delete, extractMax and decreaseKey in O(log N) time. Binomial and Fibonacci
// Heaps are advanced types that also support fast union operations.
// 3. Graph Algorithms: The priority queues are especially used in Graph Algorithms like Dijkstar's Shortest Path and Prim's Minimum Spanning Tree.
// 4. Many problems can be efficiently solved using Heaps.e.g
//  - K'th Largest Element in an Array
//  - Sort an almost sorted Array
//  - Merge K Sorted Arrays

// BINARY HEAP CLASS
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // HEAP INSERT
  // PSEUDOCODE
  // 1. Push the value into the values property on the heap.
  // 2. Bubble Up:
  //    - Create a variable called index which is the length of the values in property - 1
  //    - Create a variable called parentindex which is the floor of (index - 1)/2
  //    - Keep looping as long as the values element at the parentindex is less than the values element at the child index
  //        - Swap the value of the values element at the parentindex with the value of the element property at the child index.
  //        - Set the index to be the parentindex and start over!
  insert(element) {
    this.values.push(element);
    let elemIndex = this.values.length - 1;
    let element = this.values[elemIndex];
    while (elemIndex > 0) {
      let parentIndex = Math.floor((elemIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[elemIndex] = parent;
      elemIndex = parentIndex;
    }
    // this.bubbleUp();
  }
  // bubbleUp() {
  //   let elemIndex = this.values.length - 1;
  //   let element = this.values[elemIndex];
  //   while (elemIndex > 0) {
  //     let parentIndex = Math.floor((elemIndex - 1) / 2);
  //     let parent = this.values[parentIndex];
  //     if (element <= parent) break;
  //     this.values[parentIndex] = element;
  //     this.values[elemIndex] = parent;
  //     elemIndex = parentIndex;
  //   }
  // }
  //

  // REMOVING FROM HEAP(extractMax)
  // PSEUDOCODE
  // 1. Swap the first value in the values property with the last one
  // 2. Pop from the values property, so you can return the value at the end
  // 3. Have the new root "sink down" to the correct spot
  //    - Your parent index starts at 0 (the root)
  //    - Find the index of the left child: 2 * index + 1(make sure its not out of bounds)
  //    - Find the index of the right child: 2 * index + 2(make sure its not out of bounds)
  //    - If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  //    - The child index you swapped to now becomes the new parent index.
  //    - Keep looping and swapping until neither child is larger than the element.
  //    - Return the old root!
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let rightChild, leftChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// PRIORITY QUEUE
// PSEUDOCODE
// 1. Write a Min Binary Heap - lower numbers means higher priority
// 2. Each Node has a val and a priority. Use the priority to build the heap.
// 3. Enqueue method accepts a value and a priority, makes a new node, and puts it in the right spot based off its priority.
// 4. Dequeue method removes root element, returns it, and rearranges heap using priority.

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // adding to priority queue
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let elemIndex = this.values.length - 1;
    let elem = this.values[elemIndex];
    while (elemIndex > 0) {
      let parentIndex = Math.floor((elemIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (elem.priority <= parent.priority) break;
      this.values[elemIndex] = parent;
      this.values[parentIndex] = elem;
      elemIndex = parentIndex;
    }
  }

  // removing from priority queue
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let rightChild, leftChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
