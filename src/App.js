import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
