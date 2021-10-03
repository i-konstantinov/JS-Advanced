function solve(arr) {

    function applyOperand(a, b, op) {
        if (op == '+') {
            return a + b;
        }
        else if (op == '-') {
            return a - b;
        }
        else if (op == '*') {
            return a * b;
        }
        else {
            return a / b;
        }
    }

    let outOfOperands = false;
    let nums = [];

    for (let el of arr) {
        if (Number(el)) {
            nums.push(el);
        }
        else {
            if (nums.length > 1) {
                let second = nums.pop();
                let first = nums.pop();
                let result = applyOperand(first, second, el);
                nums.push(result);
            }
            else {
                outOfOperands = true;
                break;
            }
        }
    }
    if (outOfOperands) {
        console.log("Error: not enough operands!");
    }
    else if (nums.length > 1) {
        console.log("Error: too many operands!");
    }
    else {
        console.log(nums[0]);
    }  
}

solve([3,
    4,
    '+'])
solve([5,
    3,
    4,
    '*',
    '-'])
solve([7,
    33,
    8,
    '-'])
solve([15,
    '/'])