let currentInput = '';

function appendValue(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  document.getElementById('display').textContent = value;
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay(currentInput);
  } catch {
    updateDisplay('Error');
  }
}

function squareRoot() {
  try {
    const result = Math.sqrt(eval(currentInput));
    currentInput = result.toString();
    updateDisplay(currentInput);
  } catch {
    updateDisplay('Error');
  }
}

function square() {
  try {
    const result = Math.pow(eval(currentInput), 2);
    currentInput = result.toString();
    updateDisplay(currentInput);
  } catch {
    updateDisplay('Error');
  }
}

