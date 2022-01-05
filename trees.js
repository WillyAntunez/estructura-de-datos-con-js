class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class  BinarySearchTree {

    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                    
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                    
                }
            }
        }
    }

    search(value){
        let currentNode = this.root;

        while(true){
            if(currentNode.value === value){
                return currentNode;
            }else if(value < currentNode.value){
                if(currentNode.left){
                    currentNode = currentNode.left;
                }else{
                    return null;
                }
            }else if(value > currentNode.value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                }else{
                    return null;
                }
            }
        }
    }
}

const myTree = new BinarySearchTree()

myTree.insert(10)
myTree.insert(4)
myTree.insert(20)
myTree.insert(2)
myTree.insert(8)
myTree.insert(17)
myTree.insert(170)


console.log(myTree);
console.log(myTree.search(4));