export default class Calculator {
  display: string = "0";

  constructor(
    private locale: string = "en",
    private currentOperand: string = "",
    private previousOperand: string = "",
    private logs: string[] = [],
    private operation: undefined | string = undefined
  ) {}

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.logs = [];
    this.operation = undefined;
  }

  delete() {
    if (this.currentOperand) {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
      return;
    }

    if (this.operation && this.logs.length > 0) {
      this.previousOperand = this.logs.shift() || "";
      this.operation = this.logs.shift();
      this.currentOperand = this.logs.shift() || "";
      return;
    }

    this.operation = undefined;
    this.currentOperand = this.previousOperand;
    this.previousOperand = "";
  }

  appendNumber(number: string) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    const toFixed = number === ".";

    this.currentOperand = `${this.currentOperand}${number}`;
    this.display = this.getDisplayNumber(this.currentOperand, toFixed);
  }

  chooseOperation(operation: string) {
    if (this.currentOperand === "") {
      return;
    }

    if (this.previousOperand !== "") {
      this.logs.push(this.previousOperand);
      this.operation && this.logs.push(this.operation);
      this.calc();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calc() {
    let computation: number;

    const prev: number = +this.previousOperand;
    const current: number = +this.currentOperand;
    const operation: string | undefined =
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
    this.logs.push(this.currentOperand);
    this.currentOperand = this.getDisplayNumber(computation);
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number: string | number, toFixed = false): string {
    const numberIsString = typeof number === "string";
    let parseNumber: number;

    if (numberIsString) {
      parseNumber = Number.parseFloat(number) || 0;
    } else {
      parseNumber = number;
    }

    const maximumFractionDigits = toFixed ? 1 : 0;

    const options = {
      maximumFractionDigits,
    };

    return parseNumber.toLocaleString(this.locale, options);
  }
}
