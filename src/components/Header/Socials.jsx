import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

function Socials() {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/abhay-sharma-5907bb22b/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/developer-abhay"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/asliabhay/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
}

export default Socials;
