import "./Button.css";

interface ButtonsProps {
  value: string;
  twoColumns?: boolean;
  contrast?: boolean;
  onClick?: (value: string) => void;
}

const Button: React.FC<ButtonsProps> = (props) => {
  const { twoColumns, contrast, value, onClick } = props;
  const className: string[] = ["Button"];

  const handlerOnClick: () => (() => void) | undefined = () => {
    if (!onClick) {
      return undefined;
    }

    return () => onClick(value);
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
