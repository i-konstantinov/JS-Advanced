function register(arr) {
    let heroes = [];

    for (let i=0; i<arr.length; i++) {
        let hero = {};
        let [name, level, itemsStr] = arr[i].split(' / ');
        let items = itemsStr ? itemsStr.split(', ') : [];    
        hero.name = name;
        hero.level = parseInt(level);
        hero.items = items;

        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}

console.log(register(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))