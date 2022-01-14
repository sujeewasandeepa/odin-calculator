const clearBtn = document.querySelector('#clearBtn');
const quotientBtn = document.querySelector('#quotientBtn');
const divisionBtn = document.querySelector('#divisionBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const substractBtn = document.querySelector('#substractBtn');
const addBtn = document.querySelector('#addBtn');
const equalBtn = document.querySelector('#equalBtn');

const specialButtons = document.querySelectorAll('.specialButtons');

const sevenBtn = document.querySelector('#sevenBtn');
const eightBtn = document.querySelector('#eightBtn');
const nineBtn = document.querySelector('#nineBtn');
const fourBtn = document.querySelector('#fourBtn');
const fiveBtn = document.querySelector('#fiveBtn');
const sixBtn = document.querySelector('#sixBtn');
const oneBtn = document.querySelector('#oneBtn');
const twoBtn = document.querySelector('#twoBtn');
const threeBtn = document.querySelector('#threeBtn');
const zeroBtn = document.querySelector('#zeroBtn');

const displayArea = document.querySelector('#displayArea');
const buttons = document.querySelector('button');

let num1 = 0;
let operatorBtnPressed = false;
let lastOperator = null;

()=> displayArea.value='';

// implementing buttons
// numerics (0 - 9)

oneBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(oneBtn);
    } else {
        displayArea.value += oneBtn.value; enableButtons();
    }
});
twoBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(twoBtn);
    } else {
        displayArea.value += twoBtn.value; enableButtons();
    }
});
threeBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(threeBtn);
    } else {
        displayArea.value += threeBtn.value; enableButtons();
    }
});
fourBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(fourBtn);
    } else {
        displayArea.value += fourBtn.value; enableButtons();
    }
});
fiveBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(fiveBtn);
    } else {
        displayArea.value += fiveBtn.value; enableButtons();
    }
});
sixBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(sixBtn);
    } else {
        displayArea.value += sixBtn.value; enableButtons();
    }
});
sevenBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(sevenBtn);
    } else {
        displayArea.value += sevenBtn.value; enableButtons();
    }
});
eightBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(eightBtn);
    } else {
        displayArea.value += eightBtn.value; enableButtons();
    }
});
nineBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(nineBtn);
    } else {
        displayArea.value += nineBtn.value; enableButtons();
    }
});
zeroBtn.addEventListener('click', () => {
    if (operatorBtnPressed) {
        manageOperator(zeroBtn);
    } else {
        displayArea.value += zeroBtn.value; enableButtons();
    }
});


// operations
// implementing addition
addBtn.addEventListener('click', () => {
    num1 = displayArea.value;
    disableButtons();
    operatorBtnPressed = true;
    lastOperator = '+';
})


// clear button
clearBtn.addEventListener('click', () => displayArea.value = '');


// operate function
// this function manages all the numerical operations
// for any two numbers.
function manageOperator(button) {
    operatorBtnPressed = false;
    operate(lastOperator, num1, button.value);
    enableButtons();
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        let val = add(num1, num2);
        displayArea.value = val;
        lastOperator = null;
    }
    else if (operator === "-") {
        let val = substract(num1, num2);
        displayArea.value = val;
        lastOperator = null;        
    }
    else if (operator === "*") {
        let val = multiply(num1, num2);
        displayArea.value = val;
        lastOperator = null;
    }
    else if (operator === "/") {
        let val = divide(num1, num2);
        displayArea.value = val;
        lastOperator = null;
    }
    else if (operator === "%") {
        let val = getQuotient(num1, num2);
        displayArea.value = val;
        lastOperator = null;
    }
    else if (operator == null) {
        console.log('operator is null.');
    } 
    else {
        lastOperator = null;
        return "something is wrong";
    }
}


// basic functions
function add(a, b) {
    return parseInt(a) + parseInt(b);
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return "can't divide by zero.";
    }
}
function getQuotient(a, b) {
    return a % b;
}


function disableButtons() {
    for (let i = 0; i < specialButtons.length; i++) {
        specialButtons[i].disabled = true;
    }
}
function enableButtons() {
    for (let i = 0; i < specialButtons.length; i++) {
        specialButtons[i].disabled = false;
    }
}
