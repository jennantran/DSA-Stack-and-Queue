// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    //contains first and last nodes
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        //only can insert at the end of the queue
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }
    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
   peek(){
       return this.first;
   }

   isEmpty(){
       if(!this.last){
           return 'there are no values';
       }else {
           return 'there are values';
       }
   }
   display(){
    const result = [];
    if(this.top === null){
        return 'empty stack';
    }
    let currNode = this.peek();
    while(currNode !==null){
        result.push(currNode);
        currNode = currNode.next;
    }
    return result;
}
}

function main(){
    const starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    console.log('Kirk',starTrekQ);
    starTrekQ.enqueue('Spock');
    console.log('Spock',starTrekQ);
    starTrekQ.enqueue('Uhura');
    console.log('Uhura',starTrekQ);
    starTrekQ.enqueue('Sulu');
    console.log('Sulu',starTrekQ);
    starTrekQ.enqueue('Checkov');
    console.log('Checkov',starTrekQ);
    console.log('Peek', starTrekQ.peek());
    console.log('IsEmpty', starTrekQ.isEmpty())
    console.log('Display', starTrekQ.display());
    starTrekQ.dequeue();
    console.log('dequeue',starTrekQ);
    starTrekQ.dequeue();
    console.log('dequeue',starTrekQ);
}

main();
