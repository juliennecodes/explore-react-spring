import { useState } from 'react';
import {useSpring, animated} from 'react-spring';

export function InterpolateA(){
    const [toggled, setToggled] = useState(false);
    const {y} = useSpring({
        y: toggled ? 50 : 10,
    })
    return (
        <div className="interpolate-a">
            <h1>Interpolate</h1>
            <animated.p style={{
                fontSize: y.interpolate(y => `${y}px`)
            }}>Hello</animated.p>
            <button onClick={()=> setToggled(!toggled)}>Click Me</button>
        </div>
    );
}