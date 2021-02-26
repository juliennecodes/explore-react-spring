import { useState } from 'react';
import {useSpring, animated} from 'react-spring';
export function InterpolateC() {
    const [toggled, setToggled] = useState(false);
    const {x} = useSpring({
        x: toggled ? 50 : 0,
    })
  return (
    <div className="interpolate-c">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100"
        viewBox="0 0 100 100"
        width="100"
      >
        <animated.rect
          x="0"
          y="0"
          width="100"
          height="100"
          stroke="black"
          fill="none"
        //   strokeWidth="25"
        //   style={{strokeWidth:`${x}`}}
        // style={{strokeWidth = x.interpolate(x => `${x}`)}}
        style={{strokeWidth : x.interpolate(x => `${x}`)}}
        />
      </svg>
      <button onClick={()=> setToggled(!toggled)}>
          Click me
      </button>
    </div>
  );
}
