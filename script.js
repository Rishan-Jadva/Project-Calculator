const add = (a,b) => {
    return a + b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a * b;
}
const divide = (a,b) => {
    return a / b;
}


let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";


const operate = (operator, a, b) => {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            if (b === 0){
                alert("You cannot divide by 0");
                return 0;
            }
            return divide(a,b);
    }
}


const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");

numberButtons.forEach(numberButton => numberButton.addEventListener("click", event => {
    if (!operator){
        if (!firstNumber){
            firstNumber = event.target.textContent;
        } else {
            firstNumber += event.target.textContent;
        }
        screen.textContent = firstNumber + operator + secondNumber;
    } else {
        if (!secondNumber){
            secondNumber = event.target.textContent;
        } else {
            secondNumber += event.target.textContent;
        }
        screen.textContent = firstNumber + operator + secondNumber;
    }
}))

operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", event => {
    if (operator || !firstNumber){
        return;
    }
    operator = event.target.textContent;
    screen.textContent = firstNumber + operator + secondNumber;
}))

clearButton.addEventListener("click", () => {
    screen.textContent = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
})

equalButton.addEventListener("click", event => {
    let answer = operate(operator, firstNumber, secondNumber);
    answer = answer.toFixed(2);
    if (answer % 1 === 0){
        answer = Math.trunc(answer);
    }
    screen.textContent = answer;
    firstNumber = answer;
    operator = "";
    secondNumber = "";
})