const BUTTONS = document.querySelectorAll('.number');
const OPERATOR = document.querySelectorAll('.operator');
let display = document.querySelector('.display');
let span = document.getElementsByTagName('span');

let numberString1 = '';
// let numberString2 = '';
// let operand1 = 0;
// let operand2 = 0;

let arr = '';
let arrOperation = [];
let signOperator = '';
let result = 0;

for (let btn of BUTTONS) {
    btn.addEventListener('click', displayValue1);
}

for (let opr of OPERATOR) {
    opr.addEventListener('click', assSign);
}

function displayValue1(e) {
    numberString1 += e.target.textContent;
    display.textContent = numberString1;
    arr = numberString1.split(signOperator);
    switch (signOperator) {
        case '+':
            result = parseFloat(arr[0]) + parseFloat(arr[1]);
            display.innerHTML = `${numberString1} <br> ${result}`;
            break;
        case '-':
            result = parseFloat(arr[0]) - parseFloat(arr[1]);
            display.innerHTML = `${numberString1} <br> ${result}`;
            break;
        case '*':
            result = parseFloat(arr[0]) * parseFloat(arr[1]);
            display.innerHTML = `${numberString1} <br> ${result}`;
            break;
        case '/':
            result = parseFloat(arr[0]) / parseFloat(arr[1]);
            result = result.toFixed(8);
            display.innerHTML = `${numberString1} <br> ${result}`;
            break;
    }
}

function assSign(e) {
    signOperator = e.target.textContent;
}