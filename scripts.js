const clearBtn     = document.querySelector('#clearBtn');
const quotientBtn  = document.querySelector('#quotientBtn');
const divisionBtn  = document.querySelector('#divisionBtn');
const multiplyBtn  = document.querySelector('#multiplyBtn');
const substractBtn = document.querySelector('#substractBtn');
const addBtn       = document.querySelector('#addBtn');
const equalBtn     = document.querySelector('#equalBtn');

const sevenBtn = document.querySelector('#sevenBtn');
const eightBtn = document.querySelector('#eightBtn');
const nineBtn  = document.querySelector('#nineBtn');
const fourBtn  = document.querySelector('#fourBtn');
const fiveBtn  = document.querySelector('#fiveBtn');
const sixBtn   = document.querySelector('#sixBtn');
const oneBtn   = document.querySelector('#oneBtn');
const twoBtn   = document.querySelector('#twoBtn');
const threeBtn = document.querySelector('#threeBtn');
const zeroBtn  = document.querySelector('#zeroBtn');

const displayArea = document.querySelector('#displayArea');


oneBtn.addEventListener('click', () => {
    displayArea.innerText = '1';
});


// basic functions
function add (a, b) {
    return a + b;
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
    }else{
        return "can't divide by zero.";
    }
}

function operate(operator, num1, num2) {
    if (operator === "addition") {
        return add(num1, num2);
    }
    else if (operator === "substraction") {
        return substract(num1, num2);
    }
    else if (operator === "multiplication") {
        return multiply(num1, num2);
    }
    else if (operator === "division") {
        return divide(num1, num2);
    }
    else {
        return "something is wrong";
    }
}


function populateDisplay() {
    
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
const operated1 = operate("addition", 5, 2);
console.log("operated 1: " + operated1);
const operatedDivisionNonZero = operate("division", 10, 2);
console.log(operatedDivisionNonZero);
const operatedDivisionZero = operate("division", 5, 0);
console.log(operatedDivisionZero);