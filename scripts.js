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
    }
}

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