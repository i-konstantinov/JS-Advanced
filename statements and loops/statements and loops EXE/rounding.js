function solve(n, p) {
    if (p > 15) {
        p = 15;
    }
    const result = n.toFixed(p);
    console.log(parseFloat(result))
}
solve(3.1415926535897932384626433832795,2)
solve(10.5, 3)