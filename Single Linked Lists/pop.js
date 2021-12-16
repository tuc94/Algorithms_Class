//My Solution 
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     var newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     let current = this.head;
//     let temp = this.head;
//     if (current === null) {
//       return undefined;
//     }
//     while (current.next !== null) {
//       temp = current;
//       current = current.next;
//     }
//     temp.next = null;
//     this.tail = temp;
//     this.length -= 1;
//     return current.val;
//   }
// }



//Actual Solution 

class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
  pop(){
      if(!this.head) return undefined;
      var current = this.head;
      var newTail = current;
      while(current.next){
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
          this.head = null;
          this.tail = null;
      }
      return current;

  }
}

var first = new SinglyLinkedList();
first.push("Pincles");
first.push("Basil");
first.push("Basil2");
console.log(first.pop());
console.log(first);