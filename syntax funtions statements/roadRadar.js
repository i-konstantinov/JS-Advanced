function calcSpeed(speed, area) {
    let areaSpeedMapper = {
        'city': 50,
        'residential': 20,
        'interstate': 90,
        'motorway': 130,
    }

    if (speed <= areaSpeedMapper[area]) {
        console.log(`Driving ${speed} km/h in a ${areaSpeedMapper[area]} zone`)
    }
    
    else {
        let difference = speed - areaSpeedMapper[area];
        let status;

        if (difference > 40) {
            status = 'reckless driving';
        }
        else if (difference <= 40 && difference > 20) {
            status = 'excessive speeding';
        }
        else {
            status = 'speeding';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaSpeedMapper[area]} - ${status}`);
    }
}

calcSpeed(40, 'city')
calcSpeed(21, 'residential')
calcSpeed(120, 'interstate')
calcSpeed(200, 'motorway')
