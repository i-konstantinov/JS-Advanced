// // My solution
// function extractSub(arr) {
//     let maxVal = arr[0];
//     let resultArr = Array.of(maxVal);

//     for (let i=1; i<arr.length; i++) {
//         let current = arr[i];
//         if (current >= maxVal) {
//             resultArr.push(current);
//             maxVal = current;
//         }
//     }
//     return resultArr;
// }


// In class solution
function extractSub(arr) {
    let maxVal = Number.MIN_SAFE_INTEGER;
    let result = arr.filter(
        (el) => {
            if (el > maxVal) {
                maxVal = el;
                return true;
            }
            return false;
        }
    )

    return result;
}


console.log(extractSub([1, 
    3, 
    8, 
    4, 
    10, 
    12,
    12, 
    3, 
    2, 
    24]))
console.log(extractSub([20, 
        3, 
        2, 
        15,
        6, 
        1]))