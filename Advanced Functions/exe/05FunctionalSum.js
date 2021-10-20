function add(n) {
    let sum = n;

    function sumNums(n2) {
        sum += n2;
        return sumNums;
    }

    sumNums.toString = () => {
        return sum;
    }

    return sumNums;
}
console.log(add(4).toString());