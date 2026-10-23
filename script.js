
let display = document.querySelector("#display");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

document.querySelector("#one").addEventListener("click", function() {
    display.value = display.value + "1";
});

document.querySelector("#two").addEventListener("click", function() {
    display.value = display.value + "2";
});

document.querySelector("#three").addEventListener("click", function() {
    display.value = display.value + "3";
});

document.querySelector("#four").addEventListener("click", function() {
    display.value = display.value + "4";
});

document.querySelector("#five").addEventListener("click", function() {
    display.value = display.value + "5";
});

document.querySelector("#six").addEventListener("click", function() {
    display.value = display.value + "6";
});

document.querySelector("#seven").addEventListener("click", function() {
    display.value = display.value + "7";
});

document.querySelector("#eight").addEventListener("click", function() {
    display.value = display.value + "8";
});

document.querySelector("#nine").addEventListener("click", function() {
    display.value = display.value + "9";
});

document.querySelector("#zero").addEventListener("click", function() {
    display.value = display.value + "0";
});

document.querySelector("#add").addEventListener("click", function() {
    firstNumber = display.value * 1;
    operator = "+";
    display.value = "";
});

document.querySelector("#subtract").addEventListener("click", function() {
    firstNumber = display.value * 1;
    operator = "-";
    display.value = "";
});

document.querySelector("#multiply").addEventListener("click", function() {
    firstNumber = display.value * 1;
    operator = "*";
    display.value = "";
});

document.querySelector("#divide").addEventListener("click", function() {
    firstNumber = display.value * 1;
    operator = "/";
    display.value = "";
});

document.querySelector("#equals").addEventListener("click", function() {
    secondNumber = display.value * 1;

    if (operator == "+") {
        display.value = firstNumber + secondNumber;
    } else if (operator == "-") {
        display.value = firstNumber - secondNumber;
    } else if (operator == "*") {
        display.value = firstNumber * secondNumber;
    } else if (operator == "/") {
        if (secondNumber == 0) {
            display.value = "Cannot divide by zero";
        } else {
            display.value = firstNumber / secondNumber;
        }
    }
});

document.querySelector("#clear").addEventListener("click", function() {
    display.value = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
});
