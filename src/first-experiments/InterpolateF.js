import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

export function InterpolateF() {
  //   const colours = ["red", "orange", "yellow", "green", "blue"];
  const [currentColour, setCurrentColour] = useState("red");

  useEffect(() => {
    // const x = ["red", "orange", "yellow", "green", "blue"];
    // setInterval(() => setCurrentColour(randomColour(x)), 1000);

    // const y = currentColour;
    // setInterval(() => setCurrentColour(nextColour(y)), 2000);
    // this doesn't work because react spring doesn't really cause re-render of the component because it doesn't change state?
    // it only has superficial changes

    let mounted = true;
    if (mounted === true) {
      setTimeout(() => setCurrentColour(nextColour(currentColour)), 2000);
    }

    return () => (mounted = false);
  }, [currentColour]);

  const { y } = useSpring({
    y: currentColour,
  });
  return (
    <div className="interpolate-f">
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        {/* <rect width="100" height="100" fill={y.interpolate(y => y)}></rect> */}
        {/* <animated.rect width="100" height="100" style={{fill: currentColour}}></animated.rect> */}
        <animated.rect
          width="100"
          height="100"
          style={{ fill: y.interpolate((y) => y) }}
        ></animated.rect>
      </animated.svg>
    </div>
  );
}

function randomColour(colours) {
  const i = Math.floor(Math.random() * colours.length);
  return colours[i];
}

function nextColour(prev) {
  if (prev === "red") return "orange";
  if (prev === "orage") return "yellow";
  if (prev === "yellow") return "green";
  if (prev === "green") return "blue";
  if (prev === "blue") return "violet";
  if (prev === "violet") return "red";
}

// Okay, so what I learned from this is that I don't think you can use the interpolate method for modifying attribute values
// My initial approach was modifying anything with value
// before, I was just looking at things with values and how they can possible be modified
// they couldn't
// what you can use it for is modifying styles, which I'm discovering has a lot more reach than what I initially thought
// So I think the next part is looking up styles that are available for svgs
