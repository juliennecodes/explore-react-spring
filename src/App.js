import { useSpring, animated } from "react-spring";

function App() {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  const increaseNumbers = useSpring({ from: { number: 0 }, to: { number: 1 } });

  return (
    <div className="App">
      <animated.p style={fadeIn}>Hello</animated.p>
      <animated.p>{increaseNumbers.number}</animated.p>
    </div>
  );
}

export default App;
