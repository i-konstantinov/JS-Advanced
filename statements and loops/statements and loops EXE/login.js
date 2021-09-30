function solve(array) {
    counter = 0;
    user = array.shift();
    
    for (let x of array) {
        if (x.split('').reverse().join('') === user) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            counter += 1;
            if (counter === 4) {
                console.log(`User ${user} blocked!`)
                break;
            } else {
                console.log('Incorrect password. Try again.')
            }
        }
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA'])
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])