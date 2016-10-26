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
        if (current == null) {
          parent.left = node;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = node;
          break;
        }
      }
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
bst.add(5);
bst.add(50);
bst.add(30);
bst.add(1);
// bst.inOrder(bst.root);
// bst.preOrder(bst.root);
// bst.postOrder(bst.root);
bst.min(bst.root);
bst.max(bst.root);