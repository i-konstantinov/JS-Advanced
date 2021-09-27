// function extractNumbers(intNum) {
//     const strNum = intNum.toString();
//     let result = parseInt(strNum[0]);
//     let sameNums = true;

//     for (let i = 1; i < strNum.length; i++) {
//         result += parseInt(strNum[i]);
        
//         if (strNum[i] != strNum[i - 1]) {
//             sameNums = false;
//         }
//     }

//     console.log(sameNums);
//     console.log(result);
// }   


function extractNumbers(intNum) {
    const strNum = intNum.toString();
    let result = 0;
    let sameNums = true;

    for (let i = 0; i < strNum.length; i++) {
        result += parseInt(strNum[i]);
        
        if (i > 0) {
            if (sameNums) {
                let prev = strNum[i - 1];
                if (prev != strNum[i]) {
                    sameNums = false;
                }
            }
        }
    }

    console.log(sameNums);
    console.log(result);
} 

extractNumbers(2222222)
extractNumbers(1234)
