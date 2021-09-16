import "./App.css";
import Display from "./components/display/Display";
import Keyboard from "./components/keyboard/Keyboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Display />
      <Keyboard />
    </div>
  );
};

export default App;
