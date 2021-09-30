function odds(n) {
    let current = 1;
    let sum = 0;
    for (let x = 1; x <= n; x++) {
        console.log(current);
        sum += current;
        current += 2;
    } console.log(`Sum: ${sum}`);
}
odds(5)
odds(3)