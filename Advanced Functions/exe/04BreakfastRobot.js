function solution() {
    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}, 
    }
    
    function restock(el, qty) {
        storage[el] += qty;
        return 'Success';
    }

    function prepare(rcp, qty) {
        let currentRecipe = recipes[rcp];
        let total = {};

        for (let ingredient in currentRecipe) {
            let neededQty = currentRecipe[ingredient] * qty;

            if (neededQty > storage[ingredient]) {
                return `Error: not enough ${ingredient} in stock`;  
            } else {
                total[ingredient] = neededQty;
            }
        }

        for (let ingredient in total) {
            storage[ingredient] -= total[ingredient];
        }

        return 'Success';
    }


    return robot;

    function robot(str) {
        let result;

        if (str == 'report') {
            result = `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
        } else {
            let commands = str.split(' ');

            if (commands[0] == 'restock') {
                let element = commands[1];
                let quantity = Number(commands[2]);
                result = restock(element, quantity);
            } else {
                let recipe = commands[1];
                let quantity = Number(commands[2]);
                result = prepare(recipe, quantity)
            }
        }

        return result;
    }
}


let manager = solution (); 
// console.log(manager('restock flavour 50'));
// console.log(manager('prepare lemonade 4'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));