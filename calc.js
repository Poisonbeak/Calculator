const prompt = require("prompt-sync")();

console.log(`
+ Add
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
        result = sum(op1, op2);
        break;
    case '-':
        result = sub(op1, op2);
        break;
    case '*':
        result = mul(op1, op2);
        break;
    case '/':
        result = div(op1, op2);
        break;
    default:
        break;
}
console.log(`The result is: ${result}`);

function sum(a, b) {
    return a + b;      
}
function sub(a, b) {
    return a - b;      
}
function mul(a, b) {
    return a * b;      
}
function div(a, b) {
    return a / b;      
}