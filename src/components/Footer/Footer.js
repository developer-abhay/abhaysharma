import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer-logo">
        Abhay
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Tech Stack</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a
          href="https://www.instagram.com/asliabhay/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/developer-abhay"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhay-sharma-5907bb22b"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Abhay Sharma. All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
