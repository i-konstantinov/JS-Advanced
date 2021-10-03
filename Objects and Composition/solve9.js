function createSortedList() {
     
    return {
        collection: [],
        add(element) {
            this.collection.push(element);
            this.collection.sort((a, b) => a - b);
        },
        get(index) {
            console.log(this.collection[index]);
        },
        remove(index) {
            this.collection.splice(index,1);
        },
        // size: this.collection.length
    
    }
}

let list = createSortedList();

list.add(8);
list.add(6);
list.add(7);
console.log(list.size);

console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
// console.log(list[size])