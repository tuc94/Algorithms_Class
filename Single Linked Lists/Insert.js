class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    var currentHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length++;
    return this;
  }
  get(num) {
    if (this.length < num || num < 0) {
      return null;
    }
    this.next = this.head;
    for (let i = 0; i < num; i++) {
      this.next = this.next.next;
    }
    return this.next;
  }
  set(index, newValue) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    current.val = newValue;
    return current;
  }
  insert(index, val) {
    if (index < 0 || this.length < index) {
      return false;
    } else if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      var node = this.get(index - 1);
      var counter = 0;
      while (counter !== index) {
        node = node.next;
        counter++;
      }
      var newNode = new Node(val);
      var oldNext = node.next;
      node.next = newNode;
      newNode.next = oldNext
      this.length++;
      return true;
    }
  }
}

var list = new SinglyLinkedList();
// list.push("HELLO")
// list.push("GOODBYE")

var first = new SinglyLinkedList();
first.push("Pincles");
first.push("Basil");
first.push("Basil2");
console.log(first.insert(1, 5));
console.log(first.get(2))