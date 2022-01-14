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
let addBtnPressed = false;


// implementing buttons
// numerics (0 - 9)

oneBtn.addEventListener('click', () => {
    displayArea.value += oneBtn.value; enableButtons();
});
twoBtn.addEventListener('click', () => {
    displayArea.value += twoBtn.value; enableButtons();
});
threeBtn.addEventListener('click', () => {
    displayArea.value += threeBtn.value; enableButtons();
});
fourBtn.addEventListener('click', () => {
    displayArea.value += fourBtn.value; enableButtons();
});
fiveBtn.addEventListener('click', () => {
    displayArea.value += fiveBtn.value; enableButtons();
});
sixBtn.addEventListener('click', () => {
    displayArea.value += sixBtn.value; enableButtons();
});
sevenBtn.addEventListener('click', () => {
    if (addBtnPressed) {
        addBtnPressed = false;
        const sum = operate('+', num1, sevenBtn.value);
        displayArea.value = sum;
        enableButtons();
    } else {
        displayArea.value += sevenBtn.value; enableButtons();
    }
});
eightBtn.addEventListener('click', () => {
    displayArea.value += eightBtn.value; enableButtons();
});
nineBtn.addEventListener('click', () => {
    displayArea.value += nineBtn.value; enableButtons();
});
zeroBtn.addEventListener('click', () => {
    displayArea.value += zeroBtn.value; enableButtons();
});


// operations
// implementing addition
addBtn.addEventListener('click', () => {
    num1 = displayArea.value;
    disableButtons();
    addBtnPressed = true;
})

// clear button
clearBtn.addEventListener('click', () => displayArea.value = '');


// operate function
// this function manages all the numerical operations
// for any two numbers.
function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return substract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide(num1, num2);
    }
    else if (operator === "%") {
        return getQuotient(num1, num2);
    }
    else {
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





// ***         testing         *** //


// testing add function
const sum = add(3, 4);
console.log(sum);

// testing substract function
const remainder = substract(10, 5);
console.log(remainder);

// testing multiply function
const product = multiply(2, 5);
console.log(product);

// testing divide function
const quotient = divide(100, 5);
console.log(quotient);
const quotient_ = divide(10, 0);
console.log(quotient_);

// testing the operate function
const operated1 = operate("+", 5, 2);
console.log("operated 1: " + operated1);
const operatedDivisionNonZero = operate("/", 10, 2);
console.log(operatedDivisionNonZero);
const operatedDivisionZero = operate("/", 5, 0);
console.log(operatedDivisionZero);