import Calculator from "../../model/calculator";
import "./Display.css";

interface DisplayProps {
  calculator: Calculator;
}

const Display: React.FC<DisplayProps> = (props) => {
  const { calculator } = props;
  return <input type="text" className="Display" value={calculator.display} />;
};

export default Display;
