// We will continue using the BST methods and classes

// create a node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// create the BST class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // methods
  // insert
  insert(value) {
    // create a new node
    let newNode = new Node(value);

    // check if the BST is empty and set root to the newly created node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // get the current root
    let current = this.root;
    while (true) {
      // check if the value already exist as a node
      if (value === current.value) {
        return undefined;
      }

      // check if value should go to the left
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // set new current
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        // set new current
        current = current.right;
      }
    }
  }

  // find /search
  find(val) {
    // check if the BST is empty
    if (this.root === null) {
      return false;
    }

    // get the current root
    let current = this.root;
    let isFound = false;

    // set the looping condition
    while (current && !isFound) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        isFound = true;
      }
    }
    if (!isFound) return undefined;
    return current;
  }

  // IMPLEMENTATION of BFS
  BFS() {
    // get the root node
    var node = this.root;
    // declare the data array to be returned
    let data = [];
    // declare the queue to store nodes already visited
    let queue = [];
    // start by pushing the root node to the queue
    queue.push(node);
    // set condition for when the queue is not empty
    while (queue.length) {
      // remove the node from the queue
      node = queue.shift();
      // push the value of the removed node to the data array
      data.push(node.value);
      // check if there is a left node and push to the queue
      if (node.left) {
        queue.push(node.left);
      }
      // check if there is a right node and push to the queue
      if (node.right) {
        queue.push(node.right);
      }
    }
    // return the data array
    return data;
  }
}

// Tree Traversal(Inorder, Preorder, Postorder)
// Tree Traversals visit every node of a binary tree in a defined order.
// TWO CATEGORIES
// Traversals split into breadth-first(level-order) and depth-first(inorder, preorder and postorder)
// 1. Inorder: Visits left subtree, root, then right subtree; on a BST it returns values in sorted order.
// 2. Preorder: Visits the root first, the left and right subtrees; useful for copying a tree.
// 3. Postorder: Visits left and right subtrees before the root; useful for deleting a tree.

// Types of Tree Traversals
// 1. Breadth-First Traversal(BFT): Explores nodes level by level from top to bottom(Going across without skipping any node, one level after another)
//  Type: Level Order Traversal: Visits all nodes present in the same level completely before visiting the next level.
// ALGORITHM
// - Create an empty queue(this can be an array) Q and a variable to store the values of nodes visited.
// - Enqueue the root node of the tree to Q
// - Loop while Q is not empty
//      - Dequeue a node from Q and visit it/push the value of the node into the variable that stores the visited nodes.
//      - Enqueue the left child of the dequeued node if it exists.
//      - Enqueue the right child of the dequeued node if it exists.
//      - Return the variable that stores the values.
// Uses of Level Traversal
// 1. Level-wise node processing, like finding maximum/minimum at each level.
// 2. Tree serialization/deserialization for efficient storage and reconstruction.
// 3. Solving problems like calculating the "maximum width of a tree" by processing nodes level by level.

// 2. Depth-First Traversal(DFT): Explores as far as possible along a branch before exploring the next branch.

//    - Pre-order traversal: Visits nodes in the order: Root -> Left -> Right
//  Algorithm:
// - Visit the root
// - Traverse the left subtree
// - Traverse the right subtree
// Uses of Inorder Traversal
// 1. Used to create a copy of the tree.
// 2. Used to get prefix expression on an expression tree.

//    - Post-order Traversal: Visits the nodes in the order: Left -> Right -> Root
//  Algorithm:
// - Traverse the left subtree
// - Traverse the right subtree
// - Visit the root
// Uses of Inorder Traversal
// 1. Used to delete the tree
// 2. Used to get the postfix expression of an expression tree.
// 3. Can help in garbage collection algorithms, particularly in systems where manual memory management is used.

//    - In-order Traversal:Visits the nodes in this order: Left -> Root -> Right
//  Algorithm:
// - Traverse the left subtree
// - Visit the root
// - Traverse the right subtree
// Uses of Inorder Traversal
// 1. In the case of binary search trees(BST), it gives nodes in non-decreasing order.
// 2. To get nodes of BSR in non-increasing order, a variation of inorder traversal where Inorder traversal is reversed can be used.
// 3. Inorder traversal can be used to eveluate arithmetic expression stored in expression trees.
