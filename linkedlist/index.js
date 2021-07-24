// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node('hi');
const n2 = new Node('h1', n1);

class LinkedList {
  constructor() {
    this.head = head = null;
  }
}

const list = new LinkedList();
list.head = new Node(10);

console.log(list.head);

module.exports = { Node, LinkedList };
