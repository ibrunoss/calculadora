class Calculator {
    #operator;
    #operand1;
    #operand2;
    operation;
    display;

    constructor(operation, display) {
        this.#operator = "";
        this.#operand1 = NaN;
        this.#operand2 = NaN;
        this.operation = operation;
        this.display = display;
    }

    get operatorAlreadySelected() {
        return this.#operator.length > 0;
    }

    get expression() {
        const exp = [];

        if (!Number.isNaN(this.#operand1)) {
            exp.push(this.#operand1);
        }

        if (this.#operator) {
            exp.push(this.#operator);
        }

        if (!Number.isNaN(this.#operand2)) {
            exp.push(this.#operand2);
        }

        return exp.join(" ");
    }

    handleInput(inputData) {
        switch (inputData) {
            case "a":
                this.reset();
                break;
            case "Backspace":
                this.display.backspace();
                break;
            case "/":
            case "*":
            case "-":
            case "+":
                this.setOperator(inputData);
                break;
            case ".":
                this.display.setDecimal();
                break;
            case "Enter":
            case "=":
                this.executeOperation();
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.display.concat(inputData);
                break;

            default:
                console.log(inputData);

                break;
        }
    }

    setOperator(operator) {
        const displayValue = Number(this.display.value);

        if (Number.isNaN(displayValue)) {
            return;
        }

        if (this.operatorAlreadySelected) {
            this.#operand2 = displayValue;
            this.executeOperation();
            this.#operand1 = Number(this.display.value);
        }

        if (Number.isNaN(this.#operand1)) {
            this.#operand1 = displayValue;
        }
        this.display.update("");

        this.#operator = operator;
    }

    executeOperation() {
        if (Number.isNaN(this.#operand1) || this.#operator.length === 0) {
            return;
        }
        const displayValue = Number(this.display.value);

        if (Number.isNaN(this.#operand2)) {
            this.#operand2 = displayValue || 0;
        }

        let result = 0;

        switch (this.#operator) {
            case "/":
                result = this.operation.divide(this.#operand1, this.#operand2);
                break;
            case "*":
                result = this.operation.multiply(
                    this.#operand1,
                    this.#operand2
                );
                break;
            case "-":
                result = this.operation.subtract(
                    this.#operand1,
                    this.#operand2
                );
                break;
            case "+":
                result = this.operation.sum(this.#operand1, this.#operand2);
                break;
        }
        this.display.update(Number.isNaN(result) ? "" : result.toString());
        this.#operand1 = NaN;
        this.#operand2 = NaN;
        this.#operator = "";
    }

    reset() {
        this.#operator = "";
        this.#operand1 = NaN;
        this.#operand2 = NaN;

        this.display.reset();
        this.operation.reset();
    }
}
