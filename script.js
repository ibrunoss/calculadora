const calculator = new Calculator();

calculator.updatePageDisplay = function () {
  const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
  );
  const currentOperandTextElement = document.querySelector(
    "[data-current-operand]"
  );
  this.updateDisplay(previousOperandTextElement, currentOperandTextElement);
};

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updatePageDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updatePageDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.calc();
  calculator.updatePageDisplay();
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updatePageDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updatePageDisplay();
});
