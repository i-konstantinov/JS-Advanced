function cost(name, weight, price) {
    let weight_in_kg = weight / 1000;
    let money = weight_in_kg * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight_in_kg.toFixed(2)} kilograms ${name}.`)
}


cost('orange', 2500, 1.80);
