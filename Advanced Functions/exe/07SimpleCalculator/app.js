function calculator() {
    let firstInput;
    let secondInput;
    let resultField;

    function init(s1, s2, res) {
        firstInput = document.querySelector(s1);
        secondInput = document.querySelector(s2);
        resultField = document.querySelector(res);
        console.log(firstInput, secondInput, resultField);
    }

    function add() {
        resultField.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        resultField.value = Number(firstInput.value) - Number(secondInput.value);
    }

    return { init, add, subtract };

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


