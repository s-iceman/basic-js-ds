const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  data = [];
  size = 0;

  push(element) {
    this.data[this.size++] = element;
  }

  pop() {
    if (this.size == 0){
      return undefined;
    }
    const element = this.data.pop();
    this.size--;
    return element;
  }

  peek() {
    return this.data[this.size - 1];
  }
}

module.exports = {
  Stack
};
