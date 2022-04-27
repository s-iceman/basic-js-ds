const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  head = null;

  root() {
    return this.head;
  }

  add(data) {
    let node = new Node(data);
    node.left = null;
    node.right = null;

    if (this.head === null){
      this.head = node;
      return;
    }

    let parent = this.findParentNodeToAdd(this.head, data);
    if (data < parent.data){
      parent.left = node;
    }
    else {
      parent.right = node;
    }
  }

  has(data) {
    return this.findNode(this.head, data) !== null;
  }

  find(data) {
    return this.findNode(this.head, data);
  }

  remove(data) {
    if (this.head === null){
      return;
    }

    if (this.head.data === data){
      this.removeHead();
      return;
    }

    let parent = this.findParentNode(this.head, data);
    if (parent === null){
      return;
    }

    if (parent.left !== null && parent.left.data === data){
      this.removeNode(parent, parent.left);
    }
    else {
      this.removeNode(parent, parent.right);
    }
  }

  min(root=null) {
    let node = root !== null ? root : this.head;
    if (node === null){
      return null;
    }

    while (node.left !== null){
      node = node.left;
    }
    return node.data;
  }

  max(root=null) {
    let node = root !== null ? root : this.head;
    if (node === null){
      return null;
    }

    while (node.right !== null){
      node = node.right;
    }
    return node.data;
  }

  removeHead(){
    if (this.head.right === null) {
      this.head = this.head.left;
      return;
    }

    const newHeadValue = this.min(this.head.right);
    let parent = this.findParentNode(this.head, newHeadValue);
    let newHead = null;
    if (parent === this.head){
      newHead = parent.right;
      newHead.left = this.head.left;
      this.head = newHead;
    }
    else {
      newHead = parent.left;
      parent.left = newHead.right;
      newHead.left = this.head.left;
      newHead.right = this.head.right;
      this.head = newHead;
    }
  }

  removeNode(parentRemovedNode, node){
    if (node.left === null && node.right === null){
      if (parentRemovedNode.left === node){
        parentRemovedNode.left = null;
        return;
      }
      parentRemovedNode.right = null;
      return;
    }

    if (node.left === null){
      if (parentRemovedNode.left === node){
        parentRemovedNode.left = node.right;
        return;
      }
      parentRemovedNode.right = node.right;
      return;
    }

    if (node.right === null){
      if (parentRemovedNode.left === node){
        parentRemovedNode.left = node.left;
        return;
      }
      parentRemovedNode.right = node.left;
      return;
    }

    const newNodeValue = this.min(node.right);
    let parentNewNode = this.findParentNode(node, newNodeValue);
    node.data = newNodeValue;

    if (newNodeValue < parentNewNode.data){
      parentNewNode.left = parentNewNode.left.left;
    }
    else {
      parentNewNode.right = parentNewNode.right.right;
    }
  }

  findNode(root, data){
    if (root === null){
      return null;
    }

    if (root.data === data){
      return root;
    }
    if (data < root.data){
      return this.findNode(root.left, data);
    }
    else {
      return this.findNode(root.right, data);
    }

    return null;
  }

  findParentNodeToAdd(root, data){
    if (root.left === null && root.right === null){
      return root;
    }

    if (data < root.data){
      if (root.left !== null){
        return this.findParentNodeToAdd(root.left, data);
      }
      return root;
    }
    else {
      if (root.right !== null){
        return this.findParentNodeToAdd(root.right, data);
      }
      return root;
    }
  }

  findParentNode(root, data){
    if (root === null){
      return null;
    }

    if (data < root.data){
      let leftNode = root.left;
      if (leftNode !== null && leftNode.data === data){
        return root;
      }
      return this.findParentNode(leftNode, data);
    }
    else {
      let rightNode = root.right;
      if (rightNode !== null && rightNode.data === data){
        return root;
      }
      return this.findParentNode(rightNode, data);
    }

    return null;
  }

}

module.exports = {
  BinarySearchTree
};
