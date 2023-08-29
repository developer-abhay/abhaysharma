import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageRoundedDots } from "react-icons/bi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

function Navbar() {
  const [activeLink, setActiveLink] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => {
          setActiveLink("#");
        }}
        className={activeLink === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => {
          setActiveLink("#about");
        }}
        className={activeLink === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        onClick={() => {
          setActiveLink("#experience");
        }}
        className={activeLink === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>

      <a
        href="#portfolio"
        onClick={() => {
          setActiveLink("#projects");
        }}
        className={activeLink === "#projects" ? "active" : ""}
      >
        <MdOutlineMiscellaneousServices />
      </a>

      <a
        href="#contact"
        onClick={() => {
          setActiveLink("#contact");
        }}
        className={activeLink === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDots />
      </a>
    </nav>
  );
}

export default Navbar;
