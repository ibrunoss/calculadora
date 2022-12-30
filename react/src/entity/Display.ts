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

        if (
            Number.isNaN(parseValue) ||
            (this.#value === "0" && value === "0")
        ) {
            return;
        }

        this.#value += value;
    }

    public backspace() {
        this.#value = this.#value.substring(0, this.#value.length - 1);
    }

    public setDecimal() {
        if (this.#value === "") {
            this.#value = "0.";
            return;
        }

        if (this.#value.indexOf(".") > -1) {
            return;
        }

        this.#value += ".";
    }

    public reset() {
        this.#value = "";
    }
}
