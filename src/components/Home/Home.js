import React, { useEffect, useState } from "react";
import CTA from "./CTA";
import { CgArrowLongRight } from "react-icons/cg";
import "./Home.css";

const Home = () => {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const random1Text = ["X", "E", "P", "D", "T", "L", "Q", "N"];
  const heading1Text = ["F", "R", "O", "N", "T", "E", "N", "D"];
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const heading1 = document.querySelector(".details").childNodes[1];
    let i = 0;
    let count = 0;
    let letter = 0;

    setInterval(function () {
      if (!pause) {
        for (let j = i; j < 8; j++) {
          random1Text[j] = alphabets[Math.floor(Math.random() * 26)];
        }

        count++;
        heading1.innerHTML = random1Text.join("").split(",");

        if (count == 15) {
          random1Text[i] = heading1Text[i];
          count = 0;
          i++;
          letter++;
        }

        if (i == 8) {
          i = 0;
        }

        if (letter == 8) {
          setPause(true);
        }
      }
    }, 80);

    // setRandom1(random1Text);
    // console.log(random1);
  }, []);

  return (
    <section id="home">
      <div className="home-top">
        <a>Abhay.dev</a>
        <div>
          <p>
            <span>Frontend Developer</span>
            <span>ReactJs Developer</span>
            <span>MERN Stack Developer</span>
            <span>Responsive Web Design</span>
            <span>Frontend Developer</span>
            <span>ReactJs Developer</span>
          </p>
        </div>
      </div>
      <div className="details">
        <p>I'm Abhay Sharma </p>
        <h1>Frontend</h1>
        <h1>Developer</h1>
      </div>
      <CTA />

      <a href="#contact" className="scroll-down">
        Scroll <CgArrowLongRight />
      </a>
    </section>
  );
};

export default Home;
