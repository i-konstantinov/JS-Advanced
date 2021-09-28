function printElem(arr, step) {
    let result = Array();

    for (i=0; i<arr.length; i+=step) {
        result.push(arr[i]);
    }
    return result;
}

console.log(printElem(['5', '20', '31', '4', '20'], 2));