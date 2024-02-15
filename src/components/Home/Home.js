import React from "react";
import "./Home.css";
import Socials from "./Socials";
import CTA from "./CTA";
import myPic from "../../assets/image 5.png";

const Home = () => {
  return (
    <header id="home">
      <div className="container">
        <Socials />

        <div className="details">
          <p>Hello I'm </p>
          <h1>Abhay Sharma </h1>
          <p>A passionate Frontend Developer.</p>
          <CTA />
        </div>
        <div className="myPic">
          <img src={myPic} alt="" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
