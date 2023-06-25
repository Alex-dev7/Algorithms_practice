// --------------------      STACKS
// ------------------- Implementing Stacks In Linked List ----------------------

class Node {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor () {
        this.head = null
    }

    push (data) {
        this.head = new Node(data, this.head)
    }

    pop () {
        let data = this.head.data
        this.head = this.head.next
        return data
    }

    peek () {
        return this.head.data
    }

    isEmpty(){
        return this.head == null
    }
}



// ------------------- Implementing Arrays In Linked List ----------------------

class Stack {
    constructor() {
      this.items = []
    }
  
    push(item){
      this.items.push(item)
    }
  
    pop(){
      return this.items.pop()
    }
  
    peek(){
      return this.items[this.items.length - 1]
    }
  
    isEmpty(){
      return this.items.length === 0
    }
  }

  // --------------------    QUEUES 
  // ------------------- Implementing Stacks In Linked List ----------------------

  class Node {
    constructor (data, next = null, prev = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(data) {
        let newNode = new Node (data, null, this.head)

        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }

        this.tail = newNode
    }

    dequeue() {
        let data = this.head.data
        this.head = this.head.next
        return data
    }

    peek() {
        return isEmpty() ? 'empty list!' : this.head.data
    }

    isEmpty() {
        return this.head == null
    }
}

// ------------------- Implementing Arrays In Linked List ----------------------

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(data) {
        this.items.push(data)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return isEmpty() ? 'empty list!' : this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }
}