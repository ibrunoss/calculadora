class Operation {
    static DIVIDE_OPERATOR = "/";
    static MULTIPLY_OPERATOR = "*";
    static SUBTRACT_OPERATOR = "-";
    static SUM_OPERATOR = "+";

    #operationsHistory = [];

    get lastOperation() {
        return this.#operationsHistory.at(-1);
    }

    get operationsHistory() {
        return this.#operationsHistory;
    }

    /**
     * Removes the lastOperation from operationsHistory and returns it.
     * If the operationsHistory is empty, undefined is returned and the operationsHistory is not modified.
     */
    undo() {
        return this.#operationsHistory.pop();
    }

    sum(operand1, operand2) {
        const result = operand1 + operand2;
        this.operationsHistory.push([
            operand1,
            Operation.SUM_OPERATOR,
            operand2,
            result,
        ]);

        return result;
    }

    subtract(operand1, operand2) {
        const result = operand1 - operand2;
        this.operationsHistory.push([
            operand1,
            Operation.SUBTRACT_OPERATOR,
            operand2,
            result,
        ]);

        return result;
    }

    divide(operand1, operand2) {
        const result = operand1 / operand2;
        this.operationsHistory.push([
            operand1,
            Operation.DIVIDE_OPERATOR,
            operand2,
            result,
        ]);

        return result;
    }

    multiply(operand1, operand2) {
        const result = operand1 * operand2;
        this.operationsHistory.push([
            operand1,
            Operation.MULTIPLY_OPERATOR,
            operand2,
            result,
        ]);

        return result;
    }

    reset() {
        this.#operationsHistory = [];
    }
}
