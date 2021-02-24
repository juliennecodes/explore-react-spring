import { useSpring, animated } from "react-spring";
import { BackgroundColour } from "./components/BackgroundColour";
import { Hello } from "./components/Hello";
import './App.css';
import { FontSize } from "./components/FontSize";
import {Rotate} from './components/Rotate';
import { TransformTranslate } from "./components/TransformTranslate";
import { Rotate30 } from "./components/Rotate30";

function App() {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  const increaseNumbers = useSpring({ from: { number: 0 }, to: { number: 1 } });

  return (
    <div className="App">
      <animated.p style={fadeIn}>Hello</animated.p>
      <animated.p>{increaseNumbers.number}</animated.p>
      <Hello />
      <BackgroundColour />
      <FontSize />
      <Rotate />
      <TransformTranslate />
      <Rotate30 />
    </div>
  );
}

export default App;
