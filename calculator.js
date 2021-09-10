class Calculator {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
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
      this.calc();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calc() {
    let computation;
    const prev = +this.previousOperand;
    const current = +this.currentOperand;
    const operation =
      isNaN(prev) || isNaN(current) ? undefined : this.operation;

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
    this.currentOperand = computation;
    this.operation = undefined;
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
