import { useState } from "react";
import { useSpring, animated } from "react-spring";

export function InterpolateD() {
  const [toggled, setToggled] = useState(false);
  const staticX = toggled ? 'ooo' : 'xxx';
  const { x } = useSpring({
    x: toggled ? "ooo" : "xxx",
  });
  return (
    <div className="interpolate-d">
      <p>{staticX}</p>
      <animated.p>{x}</animated.p>
      <button onClick={() => setToggled(!toggled)}>Click Me</button>
      <p>Oh, this looks the same. I guess there is no animation when it comes to text content?</p>
      <p>Even though the text is changing, there doesn't seem to be transition between the letterforms</p>
    </div>
  );
}
