import React, { useState } from "react";
import "./Navbar.css";
import Socials from "./Socials";
import myPic from "../../assets/image 5.png";

const Navbar = () => {
  // const [toggleIcon, setToggleIcon] = useState("show");

  const showNavMenu = () => {
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    bar1.classList.toggle("close");
    bar2.classList.toggle("close");
    // setToggleIcon("close");
  };

  return (
    <div id="nav">
      <div className="toggle-icon" onClick={showNavMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
      </div>

      <a
        className="logo"
        href="https://github.com/developer-abhay"
        target="_blank"
      >
        <img src={myPic} alt="" />
      </a>

      <Socials />
    </div>
  );
};

export default Navbar;
