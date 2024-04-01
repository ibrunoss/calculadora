export default class Display {
  #value: string = "";

  get value() {
    return this.#value || "0";
  }

  public update(newValue: string) {
    this.#value = newValue;
  }

  public concat(value: string) {
    const parseValue = Number(value);

    if (Number.isNaN(parseValue) || (this.value === "0" && value === "0")) {
      return;
    }

    this.update(`${this.#value}${value}`);
  }

  public backspace() {
    this.update(this.#value.substring(0, this.#value.length - 1));
  }

  public setDecimal() {
    let value = this.#value;
    if (value === "") {
      this.update("0.");
      return;
    }

    if (value.indexOf(".") > -1) {
      return;
    }

    value += ".";

    this.update(value);
  }

  public reset() {
    this.update("");
  }
}
