export default class Calculator {
  constructor(
    private locale: string = "en",
    public display: string = "0",
    private currentOperand: string = "",
    private previousOperand: string = "",
    private operation: undefined | string = undefined
  ) {}

  clear = (): Calculator => {
    const display = "0";
    const currentOperand = "";
    const previousOperand = "";
    const operation = undefined;

    return this.makeNewInstance(
      display,
      currentOperand,
      previousOperand,
      operation
    );
  };

  appendNumber = (number: string): Calculator => {
    if (number === "." && this.currentOperand.includes(".")) {
      return this.makeNewInstance(
        this.display,
        this.currentOperand,
        this.previousOperand,
        this.operation
      );
    }
    const toFixed = number === ".";

    const currentOperand = `${this.currentOperand}${number}`;

    const display = this.updateDisplay(
      this.previousOperand,
      currentOperand,
      this.operation,
      toFixed
    );

    return this.makeNewInstance(
      display,
      currentOperand,
      this.previousOperand,
      this.operation
    );
  };

  chooseOperation = (operation: string): Calculator => {
    if (this.currentOperand === "") {
      return this.makeNewInstance(
        this.display,
        this.currentOperand,
        this.previousOperand,
        this.operation
      );
    }

    const previousOperand =
      this.previousOperand !== "" ? this.calc() : this.currentOperand;

    const currentOperand = "";

    const display = this.updateDisplay(
      previousOperand,
      currentOperand,
      operation
    );

    return this.makeNewInstance(
      display,
      currentOperand,
      previousOperand,
      operation
    );
  };

  calc = (): string => {
    let computation: number;
    let previousOperand = this.previousOperand;
    let currentOperand = this.currentOperand;

    const prev: number = +previousOperand;
    const current: number = +currentOperand;

    let operation: string | undefined =
      isNaN(prev) || isNaN(current) ? undefined : this.operation;

    switch (operation) {
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      case "+":
      default:
        computation = prev + current;
    }

    return computation.toString();
  };

  updateDisplay = (
    previousOperand: string,
    currentOperand: string,
    operation: string = "",
    toFixed = false
  ) => {
    const previous = this.getDisplayNumber(previousOperand);
    const current = this.getDisplayNumber(currentOperand, toFixed);

    if (operation) {
      return `${previous} ${operation} ${current}`;
    }

    return current;
  };

  private getDisplayNumber = (
    number: string | number,
    toFixed = false
  ): string => {
    const numberIsString = typeof number === "string";
    let parseNumber: number;

    if (numberIsString) {
      parseNumber = Number.parseFloat(number) || 0;
    } else {
      parseNumber = number;
    }

    const minimumFractionDigits = toFixed ? 1 : 0;

    const options = {
      minimumFractionDigits,
    };

    return parseNumber.toLocaleString(this.locale, options);
  };

  makeNewInstance = (
    display: string,
    currentOperand: string,
    previousOperand: string,
    operation: undefined | string
  ): Calculator => {
    return new Calculator(
      this.locale,
      display,
      currentOperand,
      previousOperand,
      operation
    );
  };
}
