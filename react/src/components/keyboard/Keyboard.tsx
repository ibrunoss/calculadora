import Calculator from "../../model/calculator";
import Button from "./button/Button";
import "./Keyboard.css";

interface KeyboardProps {
  onChange: (calculator: Calculator) => void;
  calculator: Calculator;
  calculate: () => Calculator;
  del: () => Calculator;
  onChangeDelete: (calculator: Calculator) => void;
}

const Keyboard: React.FC<KeyboardProps> = (props) => {
  const { onChange, calculator, calculate, del, onChangeDelete } = props;
  return (
    <div className="Keyboard">
      <Button
        twoColumns
        contrast
        value="AC"
        onClick={calculator.clear}
        onChange={onChange}
      />
      <Button contrast value="DEL" onClick={del} onChange={onChangeDelete} />
      <Button
        contrast
        value="÷"
        onClick={calculator.chooseOperation}
        onChange={onChange}
      />
      <Button value="7" onClick={calculator.appendNumber} onChange={onChange} />
      <Button value="8" onClick={calculator.appendNumber} onChange={onChange} />
      <Button value="9" onClick={calculator.appendNumber} onChange={onChange} />
      <Button
        contrast
        value="*"
        onClick={calculator.chooseOperation}
        onChange={onChange}
      />
      <Button value="4" onClick={calculator.appendNumber} onChange={onChange} />
      <Button value="5" onClick={calculator.appendNumber} onChange={onChange} />
      <Button value="6" onClick={calculator.appendNumber} onChange={onChange} />
      <Button
        contrast
        value="-"
        onClick={calculator.chooseOperation}
        onChange={onChange}
      />
      <Button value="1" onClick={calculator.appendNumber} onChange={onChange} />
      <Button value="2" onClick={calculator.appendNumber} onChange={onChange} />
      <Button value="3" onClick={calculator.appendNumber} onChange={onChange} />
      <Button
        contrast
        value="+"
        onClick={calculator.chooseOperation}
        onChange={onChange}
      />
      <Button value="0" onClick={calculator.appendNumber} onChange={onChange} />
      <Button
        contrast
        value="."
        onClick={calculator.appendNumber}
        onChange={onChange}
      />
      <Button
        twoColumns
        contrast
        value="="
        onClick={calculate}
        onChange={onChange}
      />
    </div>
  );
};

export default Keyboard;
