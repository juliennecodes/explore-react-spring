import { useState } from "react";
import { useSpring, animated } from "react-spring";

export function InterpolateB() {
  const [currentSize, setCurrentSize] = useState(1);
  const { x } = useSpring({
    x: currentSize,
  });

  return (
    <div className="interpolate-b">
      <animated.p
        style={{
          fontSize: x.interpolate((x) => `${x}px`),
        }}
      >
        Hello
      </animated.p>
      <button onClick={() => setCurrentSize(currentSize * 2)}>Click Me</button>
    </div>
  );
}
