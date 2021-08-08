# Sliding Menu
so the animation here is a menu that starts off off-screen.

appearance a is off-screen
appearance b is on-screen

when you click open menu button, menu appears on-screen

when you click close menu button, menu disappears off-screen

so I have
- appearance a, which is off-screen
- appearance b, which is on-screen
- style goes from translate3d(100vw, 0, 0) to translate3d(0, 0, 0)
- the transform property's value is decided by a ternary operator
- the ternary operator decides according to the isOpen state
- isOpen state is controlled by user interaction, in the form of buttons, which are Open Menu button and Close Menu button