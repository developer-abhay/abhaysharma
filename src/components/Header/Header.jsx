import React from "react";
import "./Header.css";
import ME from "../../assets/ME.png";
import CTA from "../Header/CTA";
import Socials from "../Header/Socials";

function Header() {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Abhay</h1>
        <h5 className="text-light"> A FrontEnd Web Developer</h5>

        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
