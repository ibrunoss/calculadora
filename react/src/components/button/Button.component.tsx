import { useCallback, useMemo } from "react";

import { ButtonsProps } from "./Button.types";
import "./Button.styles.css";

const Button: React.FC<ButtonsProps> = (props) => {
    const { twoColumns, contrast, value, onClick: onClickProp } = props;

    const className: string = useMemo(() => {
        const buttonClass = ["button"];

        if (twoColumns) {
            buttonClass.push("two-columns");
        }

        if (contrast) {
            buttonClass.push("contrast");
        }

        return buttonClass.join(" ");
    }, [contrast, twoColumns]);

    const onClick = useCallback(() => onClickProp(value), [onClickProp, value]);

    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;
