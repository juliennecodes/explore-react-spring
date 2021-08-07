import { useState } from "react";
import { useSpring, animated } from "react-spring";

export function InterpolateE() {
  const [x, setX] = useState(-50);
  //   const [y, setY] = useState(0);
  // //   const [vBX, setVbX] = useState(100);
  // //   const [vbY, setVbY] = useState(100);

  const { a } = useSpring({
    a: x,
  });

  return (
    <div className="interpolate-e">
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        // viewBox="0 0 100 100"
        viewBox={a.interpolate((a) => `${a} -30 100 100`)}
      >
        <rect width="24" height="24" fill="black"></rect>
      </animated.svg>
      <button onClick={() => setX(x - 5)}>Move</button>
      <p>This doesn't look like it is animating</p>
    </div>
  );
}
