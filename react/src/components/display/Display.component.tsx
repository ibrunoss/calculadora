import { KeyboardEvent, useCallback, useEffect, useRef } from "react";

import { DisplayProps } from "./Display.types";
import "./Display.styles.css";

const Display: React.FC<DisplayProps> = (props) => {
    const { value, onInput } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const setValueToRef = useCallback(() => {
        if (!inputRef.current) {
            return;
        }

        inputRef.current.value = value;
    }, [value]);

    useEffect(() => {
        setValueToRef();
    }, [setValueToRef]);

    const focusEnd = () => {
        if (!inputRef.current) {
            return;
        }

        const focusPos = value.length;
        inputRef.current.selectionStart = focusPos;
        inputRef.current.selectionEnd = focusPos;
        inputRef.current.focus();
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);

        onInput?.(e.key);
    };
    return (
        <input
            ref={inputRef}
            type="text"
            className="display"
            onClick={focusEnd}
            onKeyDown={onKeyDown}
            onInput={setValueToRef}
            autoFocus
        />
    );
};

export default Display;
