import "./Display.css";

const Display: React.FC = () => {
  return (
    <div className="Display">
      <div className="previous-operand"></div>
      <div className="current-operand">0</div>
    </div>
  );
};

export default Display;
