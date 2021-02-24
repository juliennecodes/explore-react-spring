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

#From and to
- from is initial state when it mounts
- when it mounts, it animates to to property

#you don't have to use from property or to property
- you can just go straight to the property
- in the case of toggling, you're toggling from one style to the next
- right now, I have the example of opacity
- when you toggle true, you have opacity 1
- when you toggle false, you have opacity 0
- so it has state a to state b, which is kind of the general version of from state and to state
- from and to state is just kind of set in, from is the initial state, state a, and animates to to state, state b
- since there is no data change, it's a pretty static one time animation
- in the case of toggle, you have a possibility of continuous state change, state a (opacity : 0) to state b (opacity: 1) - when that animation happens, your state a is now (opacity: 1) going to state b (opacity: 0)
- opacity: 0 to opacity: 1
- opacity: 1 to opacity: 0
- opacity: 0 to opacity: 1
- and so on
- the changing property is opacity

#So you can use conditionals to decide whether an element has a certain style
- okay, so how the example went is that the component is keeping its own state
- the component is keeping its own data as to whether it is toggled or not
- when it is toggled, its style is opacity 1
- when it is not toggled, its style is opacity 0
- when the user clicks the button, the state changes, the data changes, the ui changes
- in that ui change is the animation
- react spring handles the transition from opacity 1 to 0 and 0 to 1 when the state changes

#So a component can have its own useSpring and animated
- then you can just import it to your app

#animated
- animated extends the element to receive animated values
- so when you see an animated element, it is the one whose display will change
- the display can be opacity, colour, width
- ^I think, I've only tried opacity so far

#interpolating
- how you get from one value to another value

#Things you can animate
- opacity
- colour
- font-size
- angles
- svg path
- html attributes
- flex and grid units
- array of values - makes custom animation happens
- animate string patterns - 
- transform property
- visibility
- scroll
- you can transform css properties from one value to another

#Does useSpring return a function?
- const [state, setState] = useSpring({
    backgroundColor: teal,
  });
- error - TypeError: Object is not a function
- when you do this

    const colourChange = useSpring({
    backgroundColor: teal,
  });

  are you just giving a name to the function useSpring is returning?

- so when you do style={animationName} in an animated.element, is a function executed that changes the style value from one to the next?
- is that how it works?
- oh wait, but no, in increase numbers, it is an object with properties, the properties being the one with changing values {increaseNumbers.number}
- it makes more sense that way, you're providing changing values to properties
- that also is in line with giving value to the style attribute, the value being a style, i.e opacity: 1
- so what's with object is not a function?

#animation
- when a component changes data, it changes state
- when it changes state, it changes the ui
- the transition from one ui display to another ui display is a chance to do animation
- if there is no animation, there is just an abrupt change of display
- if there is animation, there presents an opportunity to modify that display
- there can be a seamless gradual transition
- if there is an abrupt transition, the data goes from 0 to 1
- if there is animation, the data goes from 0, 0.25, 0.5, 0.75, 1
- so is animation just handling the easing from one data to the next?

#to have continuous animation, you have to have continuous change of data
- for now I'm only handling the change of data through user input
- I'm having the user toggle between state of toggled true and toggled false
- I don't know how to have that continuous data change though
- I suppose you can do setTimeout
- I don't know how others handle it though
- another way of handling data change is from property and to property - although that seems like a one-time thing

#Recap
- Okay, I think react spring is just handling the transition from one data to the next
- without react spring, you can have an abrupt display change
- with react spring, you can have an easing display change
- you can induce change of data in a component in different ways
  - one way is using from property and to property
  - another way is making the component keep a boolean state and toggling that state via button

#Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
- I was going to do a comparison between non animated vs animated elements
- Their datas will change from one value to the next
- The difference will be in how they get from one point to the next
- My hypothesis was that one will be abrupt and the other will be eased into the end point
- However, I was treating style like you would an html element so I got the error. I think I need to read more on styling JSX.

#Experiment findings
- Okay, so I think react spring is doing the inbetweens
- with no animation, the movement is just an abrupt point a to point b
- with animation, the movement is eased between point a to point b

#Tying it all back
- Okay, so to get back to react, react will have data changes, which changes the state, which changes the display
- without animation, the display changes are abrupt
- with animation, the display changes are smoothed and eased in
- the data changes are independent of react spring, it will happen
- what react spring adds into react is the inbetweens of those data changes
- react is just concerned with data change between 
  -0      -> 1

- with react spring, the data change is now 
  - 0     -> 0.25 
  - 0.25  -> 0.5 
  - 0.5   -> 0.75 
  - 0.75  -> 1

-I think

