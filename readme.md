
Binary Search Tree Exercises

This repository contains a set of exercises to practice the implementation of various operations on a Binary Search Tree (BST) using both iterative and recursive approaches.

Setup

To get started with these exercises, clone the repository to your local environment:

git clone https://your-repository-link.git
cd binary-search-tree-exercises

Ensure you have Node.js installed to run the JavaScript files. You can install the necessary dependencies by running:

npm install

Testing

Each method has accompanying tests to verify its correctness. Run the tests using:

npm test

Binary Search Tree Methods

The exercises include implementing the following methods on the BinarySearchTree class:

- insert: Iteratively insert a node into the BST.
- insertRecursively: Recursively insert a node into the BST.
- find: Iteratively find a node in the BST.
- findRecursively: Recursively find a node in the BST.
- dfsPreOrder: Perform a pre-order depth-first search on the BST.
- dfsInOrder: Perform an in-order depth-first search on the BST.
- dfsPostOrder: Perform a post-order depth-first search on the BST.
- bfs: Perform a breadth-first search on the BST.

Further Study

Additional challenges include:

- remove: Remove a node from the BST, handling different scenarios such as removing the root, a node with one child, and a node with two children.
- isBalanced: Check if the BST is balanced.
- findSecondHighest: Find the second highest value in the BST.
- dfsInOrder Iteratively: Implement the in-order depth-first search iteratively.

Example Usage

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.root.value); // 15
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.left.right.value); // 12

Contribution

Contributions to enhance or add new exercises are welcome. Please fork the repository and submit a pull request with your changes.

License

This project is licensed under the MIT License - see the LICENSE.md file for details.