class Display {
    #value = "";

    get value() {
        return this.#value || "0";
    }

    update(newValue) {
        this.#value = newValue;
    }

    concat(value) {
        const parseValue = Number(value);

        if (
            Number.isNaN(parseValue) ||
            (this.#value === "0" && value === "0")
        ) {
            return;
        }

        this.#value += value;
    }

    backspace() {
        this.#value = this.#value.substring(0, this.#value.length - 1);
    }

    setDecimal() {
        if (this.#value === "") {
            this.#value = "0.";
            return;
        }

        if (this.#value.indexOf(".") > -1) {
            return;
        }

        this.#value += ".";
    }

    reset() {
        this.#value = "";
    }
}
