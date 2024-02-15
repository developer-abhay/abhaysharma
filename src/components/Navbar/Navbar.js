import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="nav">
      <a
        className="logo"
        href="https://github.com/developer-abhay"
        target="_blank"
      >
        Abhay.dev
      </a>
      <ul className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
