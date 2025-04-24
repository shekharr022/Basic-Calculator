let display = document.getElementById("display");
let expressionDisplay = document.getElementById("expression");
let currentExpression = "";

function appendToDisplay(value) {
  if (display.textContent === "0" && value !== ".") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
  currentExpression += value;
  expressionDisplay.textContent = currentExpression;
}

function clearDisplay() {
  display.textContent = "0";
  expressionDisplay.textContent = "";
  currentExpression = "";
}

function calculate() {
  try {
    const result = eval(currentExpression);
    display.textContent = formatResult(result);
    expressionDisplay.textContent = currentExpression + " =";
    currentExpression = String(result);
  } catch (error) {
    display.textContent = "Error";
    expressionDisplay.textContent = "";
    currentExpression = "";
  }
}

function deleteLastDigit() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
    currentExpression = currentExpression.slice(0, -1);
    expressionDisplay.textContent = currentExpression;
  } else {
    display.textContent = "0";
    currentExpression = "";
    expressionDisplay.textContent = currentExpression;
  }
}

function calculatePercentage() {
  try {
    const currentValue = parseFloat(display.textContent);
    const percentage = currentValue / 100;
    display.textContent = formatResult(percentage);
    currentExpression = String(percentage);
    expressionDisplay.textContent = currentExpression;
  } catch (error) {
    display.textContent = "Error";
    expressionDisplay.textContent = "";
    currentExpression = "";
  }
}

function formatResult(result) {
  if (Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(4);
  }
}
