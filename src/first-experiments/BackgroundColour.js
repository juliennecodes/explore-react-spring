import { useState } from "react";
import { useSpring, animated } from "react-spring";

export function BackgroundColour() {
  const [toggled, setToggled] = useState(false);
  const teal = "hsl(183, 100%, 54%)";
  const blue = "hsl(221, 55%, 53%)";
  const colourChange = useSpring({
    backgroundColor: toggled ? teal : blue,
  });

  return (
    <div className="background-colour">
      <animated.div style={colourChange} className="square"></animated.div>
      <button onClick={() => setToggled(!toggled)}>change colour</button>
    </div>
  );
}
