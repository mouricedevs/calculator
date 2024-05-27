
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Cannot divide by zero!";
    }
}

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    resultsDiv.innerHTML += 'Addition Result: ' + add(num1, num2) + '<br>';
    resultsDiv.innerHTML += 'Subtraction Result: ' + subtract(num1, num2) + '<br>';
    resultsDiv.innerHTML += 'Multiplication Result: ' + multiply(num1, num2) + '<br>';
    resultsDiv.innerHTML += 'Division Result: ' + divide(num1, num2) + '<br>';
}
