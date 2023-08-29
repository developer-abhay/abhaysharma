import React from "react";
import "./About.css";
import Image from "../../assets/ME.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuFolderOpen } from "react-icons/lu";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Image} alt="me" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>6+ Months Working </small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>5+ WorldWide </small>
            </article>
            <article className="about-card">
              <LuFolderOpen className="about-icon" />
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>
          <p>
            Currently pursuing my undergraduate degree at IIT Roorkee. An
            enthusiastic web designer and developer who is also a traveller and
            loves playing some music on top of the mountaines.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
