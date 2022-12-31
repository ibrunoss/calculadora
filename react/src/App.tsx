import { useCallback, useMemo, useState } from "react";

import Display from "./components/display/Display.component";
import Keyboard from "./components/keyboard/Keyboard.component";
import { CalculatorEntity, DisplayEntity, OperationEntity } from "./entity";
import "./App.css";

const App: React.FC = () => {
    const display = useMemo(() => new DisplayEntity(), []);
    const operation = useMemo(() => new OperationEntity(), []);
    const calculator = useMemo(
        () => new CalculatorEntity(operation, display),
        [display, operation]
    );
    const [displayValue, setDisplayValue] = useState<string>(display.value);
    const [displayState, setDisplayState] = useState<string>();

    const handleInput = useCallback(
        (value: string) => {
            calculator.handleInput(value);
            setDisplayValue(display.value);

            if (displayState !== calculator.expression) {
                setDisplayState(calculator.expression);
            }
        },
        [calculator, display.value, displayState]
    );

    return (
        <div className="App">
            <Display
                value={displayValue}
                state={displayState}
                onInput={handleInput}
            />
            <Keyboard onClick={handleInput} />
        </div>
    );
};

export default App;
