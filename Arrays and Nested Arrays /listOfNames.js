// //My solution
// function solve(arr) {
//     let result = arr.sort();
//     for (let i=0; i<result.length; i++) {
//         console.log(`${i+1}.${result[i]}`);
//     }
// }


//Class solution
function solve(arr) {
    const result = arr.sort();
    let orderNumber = 1;
    
    arr.forEach(element => {
        console.log(`${orderNumber}.${element}`);
        orderNumber++;
    });
}

solve(["John", "Bob", "Christina", "Ema"])

