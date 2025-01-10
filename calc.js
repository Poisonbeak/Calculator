const prompt = require("prompt-sync")();

function sum1(a, b) {
    return a + b;      
}
function sub1(a, b) {
    return a - b;      
}
function mul1(a, b) {
    return a * b;      
}
function div1(a, b) {
    return a / b;      
}

const sum2 = function(a, b) {
    return a + b;
}
const sub2 = function(a, b) {
    return a - b;
}
const mul2 = function(a, b) {
    return a * b;
}
const div2 = function(a, b) {
    return a / b;
}

const sum3 = (a, b) => {
    return a + b;
}
const sub3 = (a, b) => {
    return a - b;
}
const mul3 = (a, b) => {
    return a * b;
}
const div3 = (a, b) => {
    return a / b;
}

const sum4 = (a, b) => a + b;
const sub4 = (a, b) => a - b;
const mul4 = (a, b) => a * b;
const div4 = (a, b) => a / b;

function calculator() {
    console.log(`Choose your calculator
        Input 1 to use normal functions
        2 for function expressions
        3 for arrow functions
        4 for inline functions
        `)
    let calcChoice = prompt();

    console.log(`
        + Sum
        - Sub
        * Mul
        / Div
        `)
        let operation = prompt();
        let op1 = Number(prompt(`first operand: `));
        let op2 = Number(prompt(`second operand: `));
        let result = 0;
        switch (operation) {
            case '+':
                result = eval(`sum${calcChoice}(op1, op2)`);
                break;
            case '-':
                result = eval(`sub${calcChoice}(op1, op2)`);
                break;
            case '*':
                result = eval(`mul${calcChoice}(op1, op2)`);
                break;
            case '/':
                result = eval(`div${calcChoice}(op1, op2)`);
                break;
            default:
                break;
        }
        console.log(`The result is: ${result}`);
}

calculator();