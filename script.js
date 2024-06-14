const BUTTONS = document.querySelectorAll('.number');
const OPERATOR = document.querySelectorAll('.operator');


for (let btn of BUTTONS) {
    btn.addEventListener('click', displayValue);
};

let numberString = '';
let display = document.querySelector('.display');

function displayValue(e) {
    // console.log(typeof e.target.textContent);
    numberString += e.target.textContent;
    display.textContent = numberString;

    // setValue();
    
};

// function setValue() {
//     display.textContent = numberString;
// }