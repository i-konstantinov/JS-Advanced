function factory(specs) {
    function getEngine(power) {
        if (power <= 90) {
            return {power: 90, volume: 1800};
        }
        else if (power > 90 && power <= 120) {
            return {power: 120, volume: 2400}
        }
        else {
            return {power: 200, volume: 3500};
        }
    }

    function getWheels(wheelsize) {
        let wheel = wheelsize % 2 == 0 ? wheelsize -1 : wheelsize;
        return new Array(4).fill(wheel, 0, 4);
    }
    
    let car = {
        model: specs.model, 
        engine: getEngine(specs.power), 
        carriage: {type: specs.carriage, color: specs.color}, 
        wheels: getWheels(specs.wheelsize),
    };

    return car;
}   

console.log(factory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }))

console.log(factory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }))