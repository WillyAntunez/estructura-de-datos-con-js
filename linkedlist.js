// Singly Linked List

// 1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> null

// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node  {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class MySinglyLinkedList  {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let newNode = new Node(value)

        let lastNode = this.head;
        
        for(let i = 1; i  < this.length; i++){
            lastNode = lastNode.next;
        }

        lastNode.next = newNode;

        this.length++;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        let newNode = new Node(value);

        newNode.next = this.head

        this.head = newNode;

        this.length++;

        return this;
    }

    insert(index, value) {

        if (index && index > 0 && index <= this.length) {

            if(index === 1){
                return this.prepend(value);
            }

            const newNode = new Node(value);
            const firstPointer = this.getTheIndex(index - 2);
            const holdingPointer = firstPointer.next;
            
            firstPointer.next = newNode;
            newNode.next = holdingPointer;

            this.length = this.length + 1;


        }else{
            return new Error("Insertaste un indice incorrecto")
        }

    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;
    
        while (counter !== index) {
          currentNode = currentNode.next;
          counter++;
        }
    
        return currentNode;
      }
}

let myLinkedList = new MySinglyLinkedList(1);

myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.append(5)

/* myLinkedList.prepend(0);
myLinkedList.prepend(-1); */

myLinkedList.insert(2, "2");

console.log(myLinkedList)

