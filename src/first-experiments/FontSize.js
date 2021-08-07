import {useState} from 'react';
import {useSpring, animated} from 'react-spring';

export function FontSize(){
    const [toggled, setToggled] = useState(false);
    const fontSizeChange = useSpring({
        fontSize: toggled? "100px" : "10px",
    })

    return(
        <div className="font-size">
            <button onClick={()=> setToggled(!toggled)}>
                click me
            </button>
            <animated.p style={fontSizeChange}> 
                hello
            </animated.p>

            
        </div>
    );
}