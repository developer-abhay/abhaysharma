import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import { useRef, useState } from "react";

function App() {
  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = (x - startX) * 2; //adjust speed
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  function horizontalScroll(event) {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 100;
    event.preventDefault();
  }

  return (
    <div
      className="App"
      id="App"
      ref={itemsRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onWheel={horizontalScroll}
    >
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skill />

      <Footer />
      <div className="layer"></div>
    </div>
  );
}

export default App;
