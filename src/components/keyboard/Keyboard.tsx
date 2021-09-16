import "./Keyboard.css";

const Keyboard: React.FC = () => {
  return (
    <div className="Keyboard">
      <button className="two-columns contrast">AC</button>
      <button className="contrast">DEL</button>
      <button className="contrast">÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="contrast">*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="contrast">-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="contrast">+</button>
      <button>0</button>
      <button className="contrast">.</button>
      <button className="two-columns contrast">=</button>
    </div>
  );
};

export default Keyboard;
