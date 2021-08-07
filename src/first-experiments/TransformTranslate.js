import { useState } from "react";
import { useSpring, animated } from "react-spring";

export function TransformTranslate() {
  const [toggled, setToggled] = useState(false);

  const translate = useSpring({
    transform: toggled ? "translate3d(50px, 0, 0)" : "translate3d(0px, 0, 0)",
  });

  return (
    <div className="transform-translate">
      <animated.svg
        className="block shape"
        style={translate}
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
