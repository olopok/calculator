const BUTTONS = document.querySelectorAll('.number');
const OPERATOR = document.querySelectorAll('.operator');
const DECIMAL = document.querySelector('.decimal');
const EQUAL = document.querySelector('.equal');
const CANCEL = document.querySelector('.delete');
const CANCELLAST = document.querySelector('.backspace');
const INVERSE = document.querySelector('.inverse');
const FIRSTVALUE = document.querySelector('.first-value');
const SECONDVALUE = document.querySelector('.second-value');
const OPR = document.querySelector('.opr');
const TOTAL = document.querySelector('.result');

let number1 = '';
let number2 = '';
let signOperator = '';
let result = 0;

for (let btn of BUTTONS) {
    btn.addEventListener('click', displayValue);
}

for (let opr of OPERATOR) {
    opr.addEventListener('click', assSign);
}

DECIMAL.addEventListener('click', () => {
    DECIMAL.disabled = true;
});

INVERSE.addEventListener('click', signInversion);

CANCEL.addEventListener('click', deleteAll);

function deleteAll(){
    number1 = '';
    number2 = '';
    signOperator = '';
    result = 0;
    FIRSTVALUE.textContent = '';
    SECONDVALUE.textContent = '';
    OPR.textContent = '';
    TOTAL.textContent = '';
}

CANCELLAST.addEventListener('click', removeLast);

function displayValue(e) {
    if (signOperator === '') {
        TOTAL.textContent = '';
        number1 += e.target.textContent;
        FIRSTVALUE.textContent = `${number1}`;
    } else {
        number2 += e.target.textContent;
        SECONDVALUE.textContent = `${number2}`;
    }
    calculate();
}

EQUAL.addEventListener('click', () => {
    FIRSTVALUE.textContent = '';
    OPR.textContent = '';
    SECONDVALUE.textContent = '';
    TOTAL.textContent = `${result}`;
    number1 = '';
    signOperator = '';
    number2 = '';
    result = 0;
});

function calculate() {
    switch (signOperator) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2);
            TOTAL.textContent = `${result}`;
            break;
        case '-':
            result = parseFloat(number1) - parseFloat(number2);
            TOTAL.textContent = `${result}`;
            break;
        case '*':
            result = parseFloat(number1) * parseFloat(number2);
            TOTAL.textContent = `${result}`;
            break;
        case '/':
            result = parseFloat(number1) / parseFloat(number2);
            TOTAL.textContent = `${result}`;
            break;
    }
}

function assSign(e) {
    if (number1 === '' && number2 === '') {
        number1 = TOTAL.textContent;
        TOTAL.textContent = '';
        FIRSTVALUE.textContent = `${number1}`;
        signOperator = e.target.textContent;
        OPR.textContent = `${signOperator}`;
        DECIMAL.disabled = false;
    } else {
        signOperator = e.target.textContent;
        OPR.textContent = signOperator;
        DECIMAL.disabled = false;
    }
}

function removeLast() {
    if (number1 !== '' 
        && signOperator === ''
        && number2 === '') {
        number1 = number1.toString().slice(0, -1);
        FIRSTVALUE.textContent = `${number1}`;
    }
    if (number1 !== ''
        && signOperator !== ''
        && number2 === '') {
        signOperator = signOperator.slice(0, -1);
        OPR.textContent = `${signOperator}`;
    }
    if (number1 === ''
        && number2 === ''
        && signOperator !== '') {
        signOperator = signOperator.slice(0, -1);
        OPR.textContent = `${signOperator}`;
    }

    if (number1 !== ''
        && signOperator !== ''
        && number2 !== '') {
        number2 = number2.toString().slice(0, -1);
        SECONDVALUE.textContent = `${number2}`;
        if (number2 === '') {
            TOTAL.textContent = '';
        }
        else calculate();
    }
}

function signInversion() {
    if (number1 !== '' && number2 === '') {
        number1 = -Math.abs(number1);
        FIRSTVALUE.textContent = `${number1}`;
    } else {
    number2 = -Math.abs(number2);
    SECONDVALUE.textContent = `${number2}`;
    calculate()
    };
}
