class VegetableStore {
    constructor(o, l) {
        this.owner = o;
        this.location = l;
        this.availableProducts = [];
        /*{
            vegType: string,
            quantity: number,
            price: number
        }*/
    }

    loadingVegetables(vegArr) {
        const added = [];
        
        for (let v of vegArr) {
            let [veg, qty, price] = v.split(' ');
            qty = Number(qty);
            price = Number(price);
            let isPresent = false;
            
            const isAdded = added.find(e => e == veg);
            if (isAdded == undefined) {
                added.push(veg);
            }
            
            for (let p of this.availableProducts) {
                if (p.vegType == veg) {
                    isPresent = true;
                    p.quantity += qty;
                    if (p.price < price) {
                        p.price = price;
                    }
                    break;
                }
            }

            if (isPresent == false) {
                this.availableProducts.push({
                    vegType: veg,
                    quantity: qty,
                    price: price
                });
            }
        }

        return `Successfully added ${added.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let selected of selectedProducts) {
            let currentProduct = undefined;

            let [veg, qty] = selected.split(' ');
            qty = Number(qty);

            for (let product of this.availableProducts) {
                if (product.vegType == veg) {
                    if (product.quantity < qty) {
                        throw new Error(`The quantity ${qty} for the vegetable ${veg} is not available in the store, your current bill is $${(totalPrice).toFixed(2)}.`)
                    }
                    currentProduct = product;
                    break;
                }
            }

            if (currentProduct != undefined) {
                totalPrice += currentProduct.price * qty;
                currentProduct.quantity -= qty;
            } else {
                throw new Error(`${veg} is not available in the store, your current bill is $${(totalPrice).toFixed(2)}.`);
            }
        }

        return `Great choice! You must pay the following amount $${(totalPrice).toFixed(2)}.`;
    }

    rottingVegetable(veg, qty) {
        qty = Number(qty);

        let notPresent = true;

        for (let p of this.availableProducts) {
            if (p.vegType == veg) {
                notPresent = false;

                if (p.quantity <= qty) {
                    p.quantity = 0;
                    return `The entire quantity of the ${veg} has been removed.`;
                } else {
                    p.quantity -= qty;
                    return `Some quantity of the ${veg} has been removed.`;
                }
            }
        }

        if (notPresent) {
            throw new Error(`${veg} is not available in the store.`);
        }
    }

    revision() {
        const result = ['Available vegetables:'];

        this.availableProducts.sort((a,b) => a.price - b.price).forEach(e => result.push(`${e.vegType}-${e.quantity}-$${e.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());