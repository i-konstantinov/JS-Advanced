function calculatePrise(day, age) {
    let young = {
        "Weekday": 12,
        'Weekend': 15,
        'Holiday': 5,
    }
    let mid = {
        "Weekday": 18,
        'Weekend': 20,
        'Holiday': 12,
    }
    let old = {
        "Weekday": 12,
        'Weekend': 15,
        'Holiday': 10,
    }

    if (age <= 0 || age > 122) {
        console.log("Error!");
    } else if (age >= 0 && age <= 18) {
        console.log(`${young[day]}$`);
    } else if (age >= 19 && age <= 64) {
        console.log(`${mid[day]}$`);
    } else if (age >= 65 && age <= 122) {
        console.log(`${old[day]}$`);
    }

}
calculatePrise("Weekday", 42)
calculatePrise("Weekend", 65)
calculatePrise("Holiday", 15)

