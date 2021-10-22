class List {
    
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(element) {
        this.collection.push(element);
        this.collection.sort((a,b) => a - b);
        this.size += 1;
        return this;
    }

    remove(index) {
        if (index > -1 && index < this.collection.length) {
            this.collection.splice(index, 1)
            this.size -= 1;
            return this;
        }
        throw Error;
    }

    get(index) {
        if (index > -1 && index < this.collection.length) {
            return this.collection[index];
        }
        throw Error;
    }
}

let list = new List();
list.add(5);
list.add(6);

console.log(list.add(7))
console.log(list.get(1)); 
list.remove(1);
list.add(8)
console.log(list.get(1));
console.log(list.remove(1));
console.log(list.size);
