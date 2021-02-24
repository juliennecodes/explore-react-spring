import { useState } from "react";
import { useSpring, animated } from "react-spring";

export function Comparison() {
  const [toggled, setToggled] = useState(false);

  const translate = toggled ? "translate3d(200px, 0, 0)" : "translate3d(0px, 0, 0)";

  const translateAnimated = useSpring({
    transform: toggled ? "translate3d(200px, 0, 0)" : "translate3d(0px, 0, 0)",
  });

  return (
    <div className="comparison">
        <h1>Comparison of not animated and animated element</h1>
        <p>I'm comparing plain element vs animated element</p>
        <p>One is abrupt, the other is eased</p>
      <svg
        className="block shape"
        style={{transform: translate}}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
      </svg>
      <animated.svg
        className="block shape"
        style={translateAnimated}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
      </animated.svg>
      <button onClick={() => setToggled(!toggled)}>Click me</button>
    </div>
  );
}
