function gcd(n1, n2) {
    while (n2 != 0) {
        const temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }
    return console.log(n1);
}

gcd(2154, 458)
