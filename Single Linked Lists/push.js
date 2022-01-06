//My first attempt

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         let v = new Node(val);
//         if(this.head === null){
//             this.head = v;
//             this.tail = v;
//             this.length = this.length += 1;
//         } else {
//             this.tail = this.head;
//             this.head = v;
//             this.length = this.length += 1;
//         }
//         return SinglyLinkedList;
//     }
// }

// let first = new Node("HI");
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

//Actual solution

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
}

var list = new SinglyLinkedList();
// list.push("HELLO")
// list.push("GOODBYE")

var first = new SinglyLinkedList();
first.push("Pincles");
first.push("Basil");
first.push("Basil2");
console.log(first);
