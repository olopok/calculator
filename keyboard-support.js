let value = '';

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === '1') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '2') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '3') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '4') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '5') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '6') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '7') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '8') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '9') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '0') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '.') {
        value = e.key;
        keyboardInput(value); 
    }
    if (e.key === '+') {
        value = e.key;
        assKeySign(value); 
    }
    if (e.key === '-') {
        value = e.key;
        assKeySign(value); 
    }
    if (e.key === '*') {
        value = e.key;
        assKeySign(value); 
    }
    if (e.key === '/') {
        value = e.key;
        assKeySign(value); 
    }
    if (e.key === 'Enter') {
        totalResult(); 
    }
    if (e.key === 'Backspace') {
        removeLast(); 
    }
    if (e.key === 'Delete') {
        deleteAll(); 
    }
});

function keyboardInput(input) {
    if (signOperator === '') {
        TOTAL.textContent = '';
        number1 += input;
        FIRSTVALUE.textContent = `${number1}`;
    } else {
        number2 += input;
        SECONDVALUE.textContent = `${number2}`;
    }
    calculate();

}

function assKeySign(input) {
    if (number1 === '' && number2 === '') {
        number1 = TOTAL.textContent;
        TOTAL.textContent = '';
        FIRSTVALUE.textContent = `${number1}`;
        signOperator = input;
        OPR.textContent = `${signOperator}`;
        DECIMAL.disabled = false;
    } else {
        signOperator = input;
        OPR.textContent = signOperator;
        DECIMAL.disabled = false;
    }
}

function totalResult() {
    FIRSTVALUE.textContent = '';
    OPR.textContent = '';
    SECONDVALUE.textContent = '';
    TOTAL.textContent = `${result}`;
    number1 = '';
    signOperator = '';
    number2 = '';
    result = 0;

}

