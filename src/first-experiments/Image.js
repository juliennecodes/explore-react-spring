import { useState } from "react";
import { animated, useSpring } from "react-spring";

export function Image(){
    const [toggled, setToggled] = useState(true);

    const animation = useSpring({
        position: "relative",
        left: toggled ? "0px" : "200px",
    })
    return (
        <div className="image">
            <animated.img style={animation} src="https://i.pinimg.com/564x/0c/64/58/0c645898b732cd13a23894f2fa00a03c.jpg" alt="pink"></animated.img>
            <button onClick={()=> setToggled(!toggled)}>Click Me</button>
        </div>
    )
}