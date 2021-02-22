#<animated.p style={fadeIn}>Hello</animated.p>
- this text is fading in. 
- animated extends p element to receive animated values.
- I don't know how it works exactly, but the end result is that a p element appears in the dom with a style attribute, whose value changes from one state to the another.
- the value is provided by the useSpring hook, which takes an object with a start value and end value.
    - useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
    - the start value is an object, the properties are what you will change
    - the end value is also an object
    - so this says, in the beginning, the opacity is 0
    - by the end, the opacity is 1
- the animated values are opacity:0 turning into opacity: 1.
- the style is added as an inline css? I looked at the DOM and it shows the style attribute having opacity:1, presumably,it starts out as 0. 
- I'm not sure about the duration though.

#So I think the crux of the animation is going from one state to another
- it doesn't have to be limited to opacity or properties does it?
- can it just be a value? like 0 to 100
- or does it have to be strictly property like top: 0 to top: 100, with regards to a relatively positioned element?
