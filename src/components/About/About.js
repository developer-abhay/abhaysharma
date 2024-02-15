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
          {/* <div className="about-cards">
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
          </div> */}
          <p>
            Hey there! 👋 I'm Abhay, the friendly neighborhood front-end
            developer with a passion for making websites and exploring new
            technolodies. When I'm not busy typing away at my keyboard, you'll
            probably find me exploring new places because, let's face it, the
            world is like a giant playground waiting to be discovered.
          </p>
          <p>
            I'm that person who's always up for an adventure, and my love for
            travel is as big as a mountain. I'm all about collecting memories
            and making every moment count. So, whether I'm crafting digital
            wonders or exploring the real world, one thing's for sure – I'm on a
            journey to make both pixels and life a little more awesome. Stick
            around, and let's create some amazing things together! 🚀
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
