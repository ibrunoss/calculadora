const display = new Display();
const operation = new Operation();
const calculator = new Calculator(operation, display);

const updatePageDisplay = function () {
    const previousOperandTextElement = document.querySelector(
        "[data-previous-operand]"
    );
    const currentOperandTextElement = document.querySelector(
        "[data-current-operand]"
    );
    previousOperandTextElement.innerHTML = calculator.expression;
    currentOperandTextElement.innerHTML = calculator.display.value;
};

const buttons = document.querySelectorAll("[data-input]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.handleInput(button.innerText);
        updatePageDisplay();
    });
});

allClearButton.addEventListener("click", () => {
    calculator.handleInput("a");
    updatePageDisplay();
});

deleteButton.addEventListener("click", () => {
    calculator.handleInput("Backspace");
    updatePageDisplay();
});
