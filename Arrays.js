// const array = ['Diego', 'Karen', 'Oscar'];
// array.push('Ana')
// console.log(array);

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        this.length--;
        delete this.data[this.length];
        return this.data;
    }

    delete(index){
        const deletedEl = this.data[index];
        
        this.length--;
        delete this.data[index]

        this.shiftIndex(index)
        
        return deletedEl;
    }

    shitf(){
        this.delete(0);
    }

    unshift(el){
        const addedEl = el;

        for(let i = this.length - 1; i >= 0 ; i--){
            this.data[i + 1] = this.data[i]
        }

        this.data[0] = el

        this.length++;

        return addedEl;
    }

    shiftIndex(index){
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        
        delete this.data[this.length]
    }
}

const myArray = new MyArray();

myArray.push('Mario');
myArray.push('Ana');
myArray.push('Pedro');

//myArray.pop();

//myArray.delete(0);

//myArray.shitf();

myArray.unshift('Tomás')
myArray.unshift('Juan')

console.log(myArray);