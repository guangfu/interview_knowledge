/**
 * 二叉树节点定义
 */

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
}
BST.prototype.add = function(data) {
  var node = new Node(data);

  if (!this.root) {
    this.root = node;
  } else {
    var current = this.root;
    var parent;
    while(true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (!current) {
          parent.left = node;
          break;
        }
      } else {
        current = current.right;
        if (!current) {
          parent.right = node;
          break;
        }
      }
    }
  }
}

BST.prototype.remove = function(node, value) {
  if (!node) {
    return null;
  }
  if (node.data === value) {
    if (!node.left && !node.right) {
      return null;
    } else if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    } else {
      var tempNode = this.min(node.right);
      node.data = tempNode.data;
      node.right = this.remove(node.right,tempNode.data);
      return node;
    }
  } else if (value < node.data) {
    node.left = this.remove(node.left,value);
    return node;
  } else {
    node.right = this.remove(node.right,value);
    return node;
  }
}

BST.prototype.find = function(value) {
  var parent = this.root;

  while (true) {
    if (parent.data === value) {
      return parent;
    } else if (parent.data > value) {
      parent = parent.left;
    } else {
      parent = parent.right;
    }
  }
}

BST.prototype.preOrder = function(node) {
  if (node) {
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
}
BST.prototype.inOrder = function(node) {
  if (node) {
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
}
BST.prototype.postOrder = function(node) {
  if (node) {
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
}

BST.prototype.min = function(node) {
  if (node) {
    if (node.left) {
      this.min(node.left);
    } else {
      console.log(node.data);
      return node.data;
    }
  }
}

BST.prototype.max = function(node) {
  if (node) {
    if (node.right) {
      this.max(node.right);
    } else {
      console.log(node.data);
      return node.data;
    }
  }  
}

var bst = new BST();
bst.add(2);
bst.add(2);
bst.add(5);
bst.add(50);
bst.add(30);
bst.add(1);
bst.find(50);
bst.remove(bst.root, 1);
bst.inOrder(bst.root);
// bst.inOrder();
// bst.preOrder();
// bst.postOrder(bst.root);
// bst.min(bst.root);
// bst.max(bst.root);