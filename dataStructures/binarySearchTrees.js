// A Binary Search Tree is a type of binary tree data structure in which each node contains a unique key and satifies a specific
// ordering property:
//  1. All nodes in the left subtree of a node contains values strictly less than the nodes value
// 2. All nodes in the right subtree of a node contains values strictly greater than the node's value
// This structure enables efficient operations for searchng, insertion and deletion of elements, especially when the tree remains balanced.
// BSTs are widely used in database indexing, symbol tables, range queries, and are foundational for advanced structures like AVL tree and Red-Black tree.
// In problem solving, BST are used in problems where we need to maintain sorted stream of data.
// Operations like search, insertion and deletion work in O(log n) time for a balanced binary search tree.
// In the worst case , these downgrade to O(n). With self-balancing BSTs like AVLand Red-Black Trees, we can ensure the worst case as O(log n)

// Key Properties
// 1. Unique ordering of elements means duplicates are ususally not allowed.
// 2. Inorder traversal of a BST gives sorted order of elements.
// 3. Average height: O(log n) (for balanced BST)
// 4. Worst case height: O(n)(when tree becomes skewed)

// Oprations in BST
// 1.Search: Finds whether a given key exists in the BST. Time complexity on average is O(log n) and worst case is O(n)
// 2. Insertion: Insert a new node while maintaining BST property. Compare key with current node and move left/right recursively or iteratively.
// Time complexity on average is O(log n) and worst case is O(n)
// 3. Deletion: Remove a node while keeping BST valid. Node has no children means remove directly. Node has one child means replace node with its child.
// Node has two children means replace node with inorder successor /predecessor and delete that successor/predecessor. Time complexity: average O(log n) and O(n) worst case.
// 4.Traversals: The four common tree traversals are Inorder(Left, Root, Right) which gives nodes in sorted order for a BST,
// Preorder(Root, Left, Right), Postorder(Left, Right, Root) and level-Order, which traverses the tree level by using a queue.

// Application of Binary Search Tree
// 1. Searching and Indexing(e.g maps, sets)
// 2. Dynamic sorting and range queries
// 3. Implementing symbol tables in compilers
// 4. Used in advanced structures(AVL Tree, Red-Black Tree, Splay Tree)

// Basic Implementation

// create a node class with(value, left and right)
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// create the BST class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// instantiate and populate the nodes
var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);
tree.root.left.right = new Node(9);

// Inserting a node
// PSEUDOCODE
// 1. Create a new node
// 2. Starting at the root
// - Check if there is a root, if not, the root now becomes that new node!
// - If there is a root, check if the value of the new node is greater than or less than the value of the root.
// - If it is greater
// - Check to see if there is anode to the right
// - If there is, move to that node and repeat these steps
// - If there is not, add that node as the right property
// - If it is less
// - Check to see if there is anode to the left
// - If there is, move to that node and repeat these steps
// - If there is not, add that node as the left property
