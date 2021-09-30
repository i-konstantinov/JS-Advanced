function solve(n) {
    if (n >= 0 && n < 3) {
        console.log("baby");
    } else if (n > 2 && n < 14) {
        console.log('child');
    } else if (n > 13 && n < 20) {
        console.log('teenager');
    } else if (n > 19 && n < 66) {
        console.log('adult');
    } else if (n >= 66) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}

solve(20)
solve(1)
solve(100)
solve(-1)