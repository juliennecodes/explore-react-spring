import { useState } from "react";
import { useSpring, animated } from "react-spring";

export function Rotate30() {
  const [degree, setDegree] = useState(0);
  const rotate = useSpring({
    transform: `rotate(${degree}deg)`,
  });
  return (
    <div className="rotate">
      <animated.svg
        className="block shape"
        style={rotate}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <g>
          <rect fill="none" height="24" width="24" />
          <path d="M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z" />
        </g>
      </animated.svg>
      <button onClick={() => setDegree(degree + 90)}>Rotate</button>
    </div>
  );
}
