export interface KeyboardProps {
    onClick: (buttonValue: string) => void;
}

export interface KeyboardButton {
    label?: string;
    value: string;
    twoColumns?: boolean;
    contrast?: boolean;
}
