// //My solution
// function solve(arr) {
//     let result = arr.sort();
//     for (let i=0; i<result.length; i++) {
//         console.log(`${i+1}.${result[i]}`);
//     }
// }


//Class solution
function solve(arr) {
    let resultArr = arr.sort();
    let orderNumber = 1;
    
    resultArr.forEach(element => {
        console.log(`${orderNumber}.${element}`);
        orderNumber++;
    });
}

solve(["John", "Bob", "120", "Christina", "Ema", "40"])

