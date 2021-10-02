function sorted(arr) {
    let catalogue = {};

    arr.forEach(element => {
        let initialLetter = element[0];
        let [product, price] = element.split(" : ");
        price = Number(price);

        if (!catalogue[initialLetter]) {
            catalogue[initialLetter] = {};
        }
        catalogue[initial][product] = price;

    });

    sortedCatalogueKeys = Object.keys(catalogue).sort();

    for (i in sortedCatalogueKeys) {
        let keyLetter = sortedCatalogueKeys[i];
        console.log(keyLetter);
        
        let sortedProducts = Object.entries(catalogue[keyLetter]).sort();
        for (i in sortedProducts) {
            let product = sortedProducts[i][0];
            let price = sortedProducts[i][1];
            console.log(`  ${product}: ${price}`);
        }
    }
}

sorted(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])