function total(peopleCount, groupType, dayOfWeek) {
    var result = 0
    
    let stud = {
        "Friday": 8.45,
        "Saturday": 9.80,
        "Sunday": 10.46,
    }
    let bus = {
        "Friday": 10.9,
        "Saturday": 15.6,
        "Sunday": 16,
    }
    let reg = {
        "Friday": 15,
        "Saturday": 20,
        "Sunday": 22.5,
    }
    
    if (groupType === "Students") {
        result = peopleCount * stud[dayOfWeek];
        if (peopleCount >= 30) {
            result -= result * 0.15;
        }
    } 
    else if (groupType === "Business") {
        if (peopleCount >= 100) {
            peopleCount -= 10;
        }
        result = peopleCount * bus[dayOfWeek];
    } 
    else if (groupType === "Regular") {
        result = peopleCount * reg[dayOfWeek];
        if (peopleCount >= 10 && peopleCount <= 20) {
            result -= result * 0.05;
        }
    }
    
    console.log(`Total price: ${result.toFixed(2)}`);
}
total(30, "Students", "Sunday");
total(40, "Regular", "Saturday");
