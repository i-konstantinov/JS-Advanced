function magic(arr) {
    let arrLen = arr.length;
    let sums = [];

    function compareAllElements(val, index, array) {
        return val == array[0];
    }

    for (let i=0; i<arrLen; i++) {
        let row = i;
        let col = i;
        let rowSum = 0; 
        let colSum = 0;  

        for (let i=0; i<arrLen; i++) {
            let thisCol = i;
            let thisRow = i; 
         rowSum += arr[row][thisCol];
         colSum += arr[thisRow][col];
        }   

        sums.push (rowSum, colSum);
    }
  
    console.log(sums.every(compareAllElements));
}

magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

magic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])

magic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])
