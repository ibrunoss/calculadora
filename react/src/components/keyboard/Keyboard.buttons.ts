import { KeyboardButton } from "./Keyboard.types";

const buttonAllClear: KeyboardButton = {
    label: "AC",
    value: "a",
    twoColumns: true,
    contrast: true,
};

const buttonDelete: KeyboardButton = {
    label: "DEL",
    value: "Backspace",
    contrast: true,
};

const buttonDivision: KeyboardButton = {
    label: "÷",
    value: "/",
    contrast: true,
};

const buttonMultiplication: KeyboardButton = {
    value: "*",
    contrast: true,
};

const buttonSubtraction: KeyboardButton = {
    value: "-",
    contrast: true,
};

const buttonAddition: KeyboardButton = {
    value: "+",
    contrast: true,
};

const buttonDot: KeyboardButton = {
    value: ".",
    contrast: true,
};

const buttonEquals: KeyboardButton = {
    value: "=",
    contrast: true,
    twoColumns: true,
};

const buttonZero: KeyboardButton = {
    value: "0",
};

const buttonOne: KeyboardButton = {
    value: "1",
};

const buttonTwo: KeyboardButton = {
    value: "2",
};

const buttonThree: KeyboardButton = {
    value: "3",
};

const buttonFour: KeyboardButton = {
    value: "4",
};

const buttonFive: KeyboardButton = {
    value: "5",
};

const buttonSix: KeyboardButton = {
    value: "6",
};

const buttonSeven: KeyboardButton = {
    value: "7",
};

const buttonEight: KeyboardButton = {
    value: "8",
};

const buttonNine: KeyboardButton = {
    value: "9",
};

const buttons: KeyboardButton[] = [
    buttonAllClear,
    buttonDelete,
    buttonDivision,
    buttonSeven,
    buttonEight,
    buttonNine,
    buttonMultiplication,
    buttonFour,
    buttonFive,
    buttonSix,
    buttonSubtraction,
    buttonOne,
    buttonTwo,
    buttonThree,
    buttonAddition,
    buttonZero,
    buttonDot,
    buttonEquals,
];

export default buttons;
