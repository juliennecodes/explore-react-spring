import "./SlidingMenu.css";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

export function SlidingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const style = useSpring({
    transform: isOpen ? "translate3d(0, 0, 0)" : "translate3d(100vw, 0, 0)",
  });
  return (
    <div>
      <h1>Sliding Menu</h1>
      <div className="sliding-menu">
        <animated.div className="nav-wrapper" style={style}>
          <button className="sliding-menu-close-button" onClick={() => setIsOpen(false)}>Close Menu</button>
          <nav className="sliding-menu-nav">
            <a href="/#">Home</a>
            <a href="/#">Page A</a>
            <a href="/#">Page B</a>
          </nav>
        </animated.div>
      </div>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
    </div>
  );
}
