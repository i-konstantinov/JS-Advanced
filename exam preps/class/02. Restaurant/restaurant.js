class Restaurant {
    constructor(b) {
        this.budgetMoney = Number(b);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arr) {

        for (let e of arr) {
            const [name, quantity, totalPrice] = e.split(' ');

            if (totalPrice <= this.budgetMoney) {
                this.budgetMoney -= totalPrice;

                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += Number(quantity);
                this.history.push(`Successfully loaded ${quantity} ${name}`);

            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.history.join('\n');

    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: [],
                price: price
            };

            for (let e of neededProducts) {
                const [name, qty] = e.split(' ');
                this.menu[meal].products.push({ name: name, quantity: qty });
            }

            const menuLength = Object.keys(this.menu).length;
            if (menuLength == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            const result = [];
            for (let m in this.menu) {
                result.push(`${m} - $ ${this.menu[m].price}`);
            }
            return result.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;

        } else {
            const currentMeal = this.menu[meal];
            let canMakeIt = true;

            for (let p of currentMeal.products) {
                if (!this.stockProducts[p.name] || this.stockProducts[p.name] < p.quantity) {
                    canMakeIt = false;    
                }
            }

            if (canMakeIt) {
                for (let p of currentMeal.products) {
                    this.stockProducts[p.name] -= Number(p.quantity);
                }
                this.budgetMoney += currentMeal.price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`

            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log('========================')
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());
// console.log('========================')
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.showTheMenu())
console.log(kitchen.makeTheOrder('frozenYogurt'));