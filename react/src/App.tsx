import Display from "./components/display/Display.component";
import Keyboard from "./components/keyboard/Keyboard.component";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="App">
            <Display value={"0"} />
            <Keyboard onClick={alert} />
        </div>
    );
};

export default App;
