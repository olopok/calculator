const BUTTONS = document.querySelectorAll('.button');
// BUTTONS.foreach(BUTTONS.addEventListener('onclick', displayValue));
for (let btn of BUTTONS) {
    btn.addEventListener('click', displayValue);
};

let numberString = '';
let display = document.querySelector('.display');

function displayValue(e) {
    // console.log(typeof e.target.textContent);
    numberString += e.target.textContent;
    setValue();
    
    console.log(numberString);    
};

function setValue() {
    display.textContent = numberString;
}