import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
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
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a
          href="https://www.facebook.com/profile.php?id=100075396859857"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>

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
      </div>

      <div className="footer-copyright">
        <small>&copy; Abhay Sharma. All right reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
