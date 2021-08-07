import { useSpring, animated } from "react-spring";
import { BackgroundColour } from "./BackgroundColour";
import { Hello } from "./Hello";
import { FontSize } from "./FontSize";
import {Rotate} from './Rotate';
import { TransformTranslate } from "./TransformTranslate";
import { Rotate30 } from "./Rotate30";
import { Comparison } from "./Comparison";
import { InterpolateA } from "./InterpolateA";
import { InterpolateB } from "./InterpolateB";
import { InterpolateC } from './InterpolateC';
import { InterpolateD } from "./InterpolateD";
import { SvgExperiment} from './SvgExperiment';
import { InterpolateE } from "./InterpolateE";
import { GridAnimation } from "./GridAnimation";
import {Image} from "./Image";
import "./FirstExperiments.css";

export function FirstExperiments(){
    const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
    const increaseNumbers = useSpring({ from: { number: 0 }, to: { number: 1 } });
  
    return (
      <div className="first-experiments">
        <animated.p style={fadeIn}>Hello</animated.p>
        <animated.p>{increaseNumbers.number}</animated.p>
        <Hello />
        <BackgroundColour />
        <FontSize />
        <Rotate />
        <TransformTranslate />
        <Rotate30 />
        <Comparison />
        <InterpolateA />
        <InterpolateB />
        <InterpolateC />
        <InterpolateD />
        <SvgExperiment />
        <InterpolateE />
        <GridAnimation />
        <Image />
      </div>
    )
  }