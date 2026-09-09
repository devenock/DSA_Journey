// to create a binary search tree we need to create a Node class and the BST class

// creating the node
class Node {
  constructor(val) {
    this.value = val;
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
  insert(value) {
    // first create a new node with val
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
        return undefined;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let isFound = false;
    while (current && !isFound) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        isFound = true;
      }
    }
    if (!isFound) return undefined;
    return current;
  }
}
