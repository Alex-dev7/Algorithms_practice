class Node{
    constructor(data){
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
        this.data = data;
        this.next = null
    }
}

const a  = new Node("A")
const b  = new Node("B")
const c  = new Node("C")
const d  = new Node("D")

// pointers
a.next = b
b.next = c
c.next = d

class LinkedList {
  constructor() {
    // a Linked List starts with a "head" property intialized as null
    this.head = null;
  }
  appendNode(data) {
    // creates a new node with the given data and adds it to back of the list
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
    //   this.head.next = newNode;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    }
  }
  prependNode(data) {
    // creates a new node with the given data and adds it to the front of the list
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  pop() {
    // removes the last node from the list and returns it
    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      // save the node first
      const removedNode = this.head;
      // delete the node from the list
      this.head = null;
      // return the locally saved node
      return removedNode
    } else {
      let current = this.head;

      while (current.next.next !== null) {
        current = current.next;
      }
      const removedNode = current.next;
      current.next = null;
      return removedNode
    }
  }
  removeFromFront() {
    // remove the head node from the list and return it
    // the next node in the list is the new head node
  }
  insertAt(X, data) {
    // insert a new node into the list with the given data
    // place it after X nodes in the list
    // if X exceeds the bounds of the list, put the node at the end
    // insertAt(0, 7) would add the new node as the head
  }
  removeAt(X) {
    // remove the Xth node from the list, considering 0 to be the first node
    // return the node that has been removed
  }
  search(data) {
    // searches the list for a node with the given data
    // if it is found, return the "index" of the node, considering 0 to be the first node
    // if not, return false
  }
  sort() {
    // sort the Linked List in ascending order of data values
  }
}

let list = new LinkedList();
list.appendNode(1);
list.appendNode(2);
let removedNode = list.pop();
console.log(removedNode);
let secondRemovedNode = list.pop();
console.log(secondRemovedNode)