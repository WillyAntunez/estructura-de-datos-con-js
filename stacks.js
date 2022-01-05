class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    cosntructor(){
        this.length = 0;
        this.top = null;
        this.bot = null;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);

        if(!this.length || this.length === 0){
            this.top = newNode;
            this.bot = newNode;
            this.length = 1;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
            this.length++;
        }
        
        return this;
    }

    pop(){
        if(this.length > 1){
            const holdingPointer = this.top.next;
    
            const newNode = new Node(holdingPointer.value);
            newNode.next = holdingPointer.next;
    
            this.top = newNode;
            this.length--;
        }else if(this.length === 1){
            this.top = null;
            this.bot = null;
            this.length = 0;
        }

        return this;
    }
}

const myStack = new Stack();


myStack.push(1);
myStack.push(2);
myStack.push(3);


console.log(myStack.pop())