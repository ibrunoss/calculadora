enum OPERATOR {
  DIVIDE = "/",
  MULTIPLY = "*",
  SUBTRACT = "-",
  SUM = "+",
}

export default class Operation {
  static readonly DIVIDE_OPERATOR = OPERATOR.DIVIDE;
  static readonly MULTIPLY_OPERATOR = OPERATOR.MULTIPLY;
  static readonly SUBTRACT_OPERATOR = OPERATOR.SUBTRACT;
  static readonly SUM_OPERATOR = OPERATOR.SUM;

  #operationsHistory: Array<[number, OPERATOR, number, number]> = [];

  get lastOperation() {
    return this.#operationsHistory[this.#operationsHistory.length - 1];
  }

  get operationsHistory() {
    return this.#operationsHistory;
  }

  /**
   * Removes the lastOperation from operationsHistory and returns it.
   * If the operationsHistory is empty, undefined is returned and the operationsHistory is not modified.
   */
  public undo() {
    return this.#operationsHistory.pop();
  }

  public sum(operand1: number, operand2: number) {
    const result = operand1 + operand2;
    this.operationsHistory.push([
      operand1,
      Operation.SUM_OPERATOR,
      operand2,
      result,
    ]);

    return result;
  }

  public subtract(operand1: number, operand2: number) {
    const result = operand1 - operand2;
    this.operationsHistory.push([
      operand1,
      Operation.SUBTRACT_OPERATOR,
      operand2,
      result,
    ]);

    return result;
  }

  public divide(operand1: number, operand2: number) {
    const result = operand1 / operand2;
    this.operationsHistory.push([
      operand1,
      Operation.DIVIDE_OPERATOR,
      operand2,
      result,
    ]);

    return result;
  }

  public multiply(operand1: number, operand2: number) {
    const result = operand1 * operand2;
    this.operationsHistory.push([
      operand1,
      Operation.MULTIPLY_OPERATOR,
      operand2,
      result,
    ]);

    return result;
  }

  public reset() {
    this.#operationsHistory = [];
  }
}
