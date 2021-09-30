function solve(n) {
    for (let x = 1; x <= n; x++) {
        let line = '';
        for (let y = 1; y <= x; y++) {
            line += x + ' ';
        }
        console.log(line);
    }
}
solve(3)
solve(5)
solve(6)