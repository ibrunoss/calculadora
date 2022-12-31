import { Children } from "react";

import Button from "../button";
import { KeyboardProps } from "./Keyboard.types";
import KeyboardButtons from "./Keyboard.buttons";
import "./Keyboard.styles.css";

const Keyboard: React.FC<KeyboardProps> = (props) => {
    const { onClick } = props;

    const mapValueToOnClick = (value: string) => () => onClick(value);

    return (
        <div className="keyboard">
            {Children.toArray(
                KeyboardButtons.map((button) => (
                    <Button
                        twoColumns={button.twoColumns}
                        contrast={button.contrast}
                        value={button.label || button.value}
                        onClick={mapValueToOnClick(button.value)}
                    />
                ))
            )}
        </div>
    );
};

export default Keyboard;
