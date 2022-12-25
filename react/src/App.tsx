import { useEffect, useState } from "react";

import "./App.css";
import Display from "./components/display/Display";
import Keyboard from "./components/keyboard/Keyboard";
import Calculator from "./model/calculator";

const App: React.FC = () => {
  const [calculator, setCalculator] = useState<Calculator>(new Calculator());
  const [toTrash, setToTrash] = useState<boolean>(false);
  const [history, setHistory] = useState<Calculator[]>([]);

  const calculate = () => {
    const previousOperand = "";
    const currentOperand = calculator.calc();
    const operation = undefined;
    const display = calculator.updateDisplay(previousOperand, currentOperand);
    const newCalculator = calculator.makeNewInstance(
      display,
      currentOperand,
      previousOperand,
      operation
    );

    return newCalculator;
  };

  useEffect(() => {
    const _history = [...history];

    toTrash ? _history.pop() : _history.push(calculator);

    setHistory(_history);
  }, [calculator]);

  const del = (history: Calculator[]): Calculator | undefined => {
    let lastInHistory = history.pop();

    if (lastInHistory?.display === calculator.display) {
      lastInHistory = history.pop();
    }

    return lastInHistory;
  };

  const deleteCalculator: () => Calculator = () => {
    const _history = [...history];
    let lastInHistory = _history.pop();

    while (lastInHistory?.display === calculator.display) {
      lastInHistory = _history.pop();
    }
    return lastInHistory || new Calculator();
  };

  const onChangeDelete = (oldCalculator: Calculator) => {
    setToTrash(true);
    setCalculator(oldCalculator);
  };

  const onChange = (newCalculator: Calculator) => {
    setToTrash(false);
    setCalculator(newCalculator);
  };

  return (
    <div className="App">
      <Display calculator={calculator} />
      <Keyboard
        del={deleteCalculator}
        onChangeDelete={onChangeDelete}
        onChange={onChange}
        calculator={calculator}
        calculate={calculate}
      />
    </div>
  );
};

export default App;
