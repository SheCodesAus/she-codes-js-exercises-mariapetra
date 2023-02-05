const numberElement = document.getElementById("number");
let number = numberElement.innerText;

function add(step) {
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function subtract(step) {
    number = parseInt(number) - step;
    numberElement.innerText = number;
}

function multiply(step) {
    number = parseInt(number) * step;
    numberElement.innerText = number;
}

function divide(step) {
    number = parseInt(number) / step;
    numberElement.innerText = number;
}