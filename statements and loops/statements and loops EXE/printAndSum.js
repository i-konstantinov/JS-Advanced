function solve(start, end) {
    var numbers = [];
    let resultSum = 0;
    for (let x = start; x <= end; x++) {
        numbers.push(x);
        resultSum += x;
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${resultSum}`)
}
solve(5, 10)
solve(0, 26)
solve(50, 60)