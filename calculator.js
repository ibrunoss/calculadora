class Calculator {
  currentOperand = "";
  previousOperand = "";
  logs = [];
  operation = undefined;

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.logs = [];
    this.operation = null;
  }
  delete() {
    if (this.currentOperand) {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
      return;
    }

    if (this.operation && this.logs.length > 0) {
      this.previousOperand = this.logs.shift();
      this.operation = this.logs.shift();
      this.currentOperand = this.logs.shift();
      return;
    }

    this.operation = null;
    this.currentOperand = this.previousOperand;
    this.previousOperand = "";
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }

    this.currentOperand = `${this.currentOperand}${number}`;
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") {
      return;
    }

    if (this.previousOperand !== "") {
      this.logs.push(this.previousOperand);
      this.logs.push(this.operation);
      this.calc();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calc() {
    let computation = undefined;
    const prev = +this.previousOperand;
    const current = +this.currentOperand;
    const operation = isNaN(prev) || isNaN(current) ? null : this.operation;

    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.logs.push(current);
    this.currentOperand = computation;
    this.operation = null;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringSplitNumber = number.toString().split(".");
    const integerDigits = +stringSplitNumber[0];
    const decimalDigits = +stringSplitNumber[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (isNaN(decimalDigits)) {
      return integerDisplay;
    }

    return `${integerDisplay}.${decimalDigits}`;
  }

  updateDisplay(previousOperandTextElement, currentOperandTextElement) {
    currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      previousOperandTextElement.innerText = "";
    }
  }
}
