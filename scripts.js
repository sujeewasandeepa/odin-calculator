const clearBtn = document.querySelector('#clearBtn');
const quotientBtn = document.querySelector('#quotientBtn');
const divisionBtn = document.querySelector('#divisionBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const substractBtn = document.querySelector('#substractBtn');
const addBtn = document.querySelector('#addBtn');
const equalBtn = document.querySelector('#equalBtn');

const specialButtons = document.querySelectorAll('.specialButtons');
const secondSpecialButtons = document.querySelectorAll('.secondSpecial');

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

let number1 = 0;
let number2 = 0;
let operatorBtnPressed = false;
let lastOperator = null;

() => displayArea.value = '';

equalBtn.addEventListener('click', () => {
    operate(lastOperator, number1, number2);
    enableSecondSpecial();
    number1 = 0;
    number2 = 0;
})

// clear button
clearBtn.addEventListener('click', () => {
    displayArea.value = '';
    number1 = 0;
    number2 = 0;
    operatorBtnPressed = false;
    lastOperator = null;
});


// implementing buttons
// numerics (0 - 9)

oneBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += oneBtn.value;
        number2 += oneBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += oneBtn.value;
    }
});

twoBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += twoBtn.value;
        number2 += twoBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += twoBtn.value;
    }
});

threeBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += threeBtn.value;
        number2 += threeBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += threeBtn.value;
    }
});

fourBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += fourBtn.value;
        number2 += fourBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += fourBtn.value;
    }
});

fiveBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += fiveBtn.value;
        number2 += fiveBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += fiveBtn.value;
    }
});

sixBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += sixBtn.value;
        number2 += sixBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += sixBtn.value;
    }
});

sevenBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += sevenBtn.value;
        number2 += sevenBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += sevenBtn.value;
    }
});

eightBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += eightBtn.value;
        number2 += eightBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += eightBtn.value;
    }
});

nineBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += nineBtn.value;
        number2 += nineBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += nineBtn.value;
    }
});

zeroBtn.addEventListener('click', () => {
    enableButtons();
    if (operatorBtnPressed) {
        displayArea.value += zeroBtn.value;
        number2 += zeroBtn.value;
        disableSecondSpecial();
    } else {
        displayArea.value += zeroBtn.value;
    }
});


// operations
// implementing addition
addBtn.addEventListener('click', () => {
    number1 = displayArea.value;
    disableButtons();
    displayArea.value = '';
    operatorBtnPressed = true;
    lastOperator = '+';
});

// implementing substraction
substractBtn.addEventListener('click', () => {
    number1 = displayArea.value;
    disableButtons();
    displayArea.value = '';
    operatorBtnPressed = true;
    lastOperator = '-';
});

// implementing multiplication
multiplyBtn.addEventListener('click', () => {
    number1 = displayArea.value;
    disableButtons();
    displayArea.value = '';
    operatorBtnPressed = true;
    lastOperator = '*';
});

// implementing division
divisionBtn.addEventListener('click', () => {
    number1 = displayArea.value;
    disableButtons();
    displayArea.value = '';
    operatorBtnPressed = true;
    lastOperator = '/';
})

// implementing quotient
quotientBtn.addEventListener('click', () => {
    number1 = displayArea.value;
    disableButtons();
    displayArea.value = '';
    operatorBtnPressed = true;
    lastOperator = '%';
})

// operate function
// this function manages all the numerical operations
// for any two numbers.
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
function enableSecondSpecial() {
    for (let i=0; i < secondSpecialButtons.length; i++) {
        secondSpecialButtons[i].disabled = false;
    }
}
function disableSecondSpecial() {
    for (let i=0; i < secondSpecialButtons.length; i++) {
        secondSpecialButtons[i].disabled = true;
    }
}
