class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
        this.root = newNode;
        console.log("Inserted at root:", newNode);
        return this;
    }

    let current = this.root;
    while (true) {
        if (value < current.value) {
            if (!current.left) {
                current.left = newNode;
                console.log("Inserted on left of", current.value);
                return this;
            }
            current = current.left;
        } else if (value > current.value) {
            if (!current.right) {
                current.right = newNode;
                console.log("Inserted on right of", current.value);
                return this;
            }
            current = current.right;
        } else {
            return this;  // Value already exists
        }
    }
}

  insertRecursively(value, node = this.root) {
    if (!node) {
      if (this.root === null) {
        this.root = new Node(value);
      }
      return this;
    }

    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this.insertRecursively(value, node.left);
      }
    } else if (value > node.value) {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this.insertRecursively(value, node.right);
      }
    }
    return this;
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return undefined;
  }

  // Recursive find
  findRecursively(value, node = this.root) {
    if (!node) return undefined;
    if (value < node.value) {
      return this.findRecursively(value, node.left);
    } else if (value > node.value) {
      return this.findRecursively(value, node.right);
    } else {
      return node;
    }
  }

  // Depth-first searches
  dfsPreOrder() {
    let result = [];
    const traverse = (node) => {
      if (!node) return;
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  dfsPostOrder() {
    let result = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  // Breadth-first search
  bfs() {
    let result = [];
    let queue = this.root ? [this.root] : [];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }


  remove(value, node = this.root, parent = null) {
    if (!node) return null;

    if (value < node.value) {
        return this.remove(value, node.left, node);
    } else if (value > node.value) {
        return this.remove(value, node.right, node);
    } else {
        // Node with no children or one child.
        if (!node.left || !node.right) {
            const temp = node.left || node.right;

            if (parent === null) {
                this.root = temp;
            } else if (parent.left === node) {
                parent.left = temp;
            } else {
                parent.right = temp;
            }
            return node;
        }

        // Node with two children, find the successor.
        let successor = node.right;
        let successorParent = node;
        while (successor.left) {
            successorParent = successor;
            successor = successor.left;
        }

        // Replace node value with successor value
        node.value = successor.value;

        // Recursively remove the successor
        return this.remove(successor.value, node.right, node);
    }
}

isBalanced(node = this.root) {
  if (!node) return true;

  const heightDiff = Math.abs(this.getHeight(node.left) - this.getHeight(node.right));
  if (heightDiff > 1) {
      return false;
  } else {
      return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
}

getHeight(node) {
  if (!node) return -1;
  return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
}

findSecondHighest() {
  if (!this.root || (!this.root.left && !this.root.right)) {
      return undefined; // There is no second highest if tree is empty or has one node.
  }

  let current = this.root;
  let parent = null;

  while (current.right) {
      parent = current;
      current = current.right;
  }

  // If the rightmost node has a left child, the second highest is the rightmost node of that subtree.
  if (current.left) {
      return this.findMax(current.left).value;
  }

  // Otherwise, it's the parent of the rightmost node
  return parent.value;
}

findMax(node) {
  let current = node;
  while (current.right) {
      current = current.right;
  }
  return current;
}

}

module.exports = BinarySearchTree;
