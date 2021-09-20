import Calculator from "../../../model/calculator";
import "./Button.css";

interface ButtonsProps {
  value: string;
  twoColumns?: boolean;
  contrast?: boolean;
  onClick: (value: string) => Calculator;
  onChange: (calculator: Calculator) => void;
}

const Button: React.FC<ButtonsProps> = (props) => {
  const { twoColumns, contrast, value, onClick, onChange } = props;
  const className: string[] = ["Button"];

  const handlerOnClick: () => (() => void) | undefined = () => {
    if (!onClick) {
      return undefined;
    }

    return () => {
      const newCalculator = onClick(value);
      onChange(newCalculator);
    };
  };

  if (twoColumns) {
    className.push("two-columns");
  }

  if (contrast) {
    className.push("contrast");
  }

  return (
    <button className={className.join(" ")} onClick={handlerOnClick()}>
      {value}
    </button>
  );
};

export default Button;
