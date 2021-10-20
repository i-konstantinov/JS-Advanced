function sortArr(arr, arg) {
    engine = {
        asc: (arr) => arr.sort(function(a, b){return a - b}),
        desc: (arr) => arr.sort((a, b) => b - a),
    }
    engine[arg](arr);

    return arr;
}

console.log(sortArr([14, 7, 17, 6, 8], 'desc'))
