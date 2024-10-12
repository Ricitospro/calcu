let previousOperand = '';
let currentOperand = '';
let operator = '';

const result = document.getElementById('result');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperand += button.textContent;
        updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperand === '') return; // Evitar operadores sin número
        if (previousOperand !== '') {
            calculate(); // Calcular si hay una operación pendiente
        }
        previousOperand = currentOperand;
        operator = button.textContent;
        currentOperand = '';
    });
});

equalButton.addEventListener('click', () => {
    calculate();
});

clearButton.addEventListener('click', () => {
    previousOperand = '';
    currentOperand = '';
    operator = '';
    updateDisplay();
});

function updateDisplay() {
    result.value = currentOperand;
}

function calculate() {
    let resultValue;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return; // Validar entradas

    switch (operator) {
        case '+':
            resultValue = prev + current;
            break;
        case '-':
            resultValue = prev - current;
            break;
        case '*':
            resultValue = prev * current;
            break;
        case '/':
            resultValue = prev / current;
            break;
        default:
            return; // Salir si no hay un operador válido
    }

    currentOperand = resultValue.toString();
    operator = '';
    previousOperand = '';
    updateDisplay();
}
