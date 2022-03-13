const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;

  getUnderlyingList() {
    return JSON.parse(JSON.stringify(this.head));
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.head == null){
      this.head = node;
    }
    else {
      let lastNode = this.findLastNode();
      if (lastNode !== null){
        lastNode.next = node;
      }
    }
  }

  dequeue() {
    if (this.head === null){
      return null;
    }
    let value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  findLastNode(){
    let lastNode = this.head;
    while (lastNode.next !== null){
      lastNode = lastNode.next;
    }
    return lastNode;
  }
}

module.exports = {
  Queue
};
