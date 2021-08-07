import { useState } from "react";
import { useSpring, animated } from "react-spring";

export function Hello() {
  const [toggled, setToggled] = useState(false);
  const fade = useSpring({
    opacity: toggled ? 1 : 0,
  });

  return (
    <div className="hello">
      <animated.p style={fade}>Hello</animated.p>
      <button onClick={() => setToggled(true)}>appear</button>
      <button onClick={() => setToggled(false)}>disappear</button>
    </div>
  );
}
