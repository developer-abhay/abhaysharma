import React, { useEffect } from "react";
import IMG2 from "../../assets/project1.png";
import IMG1 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import "./Projects.css";

function Projects() {
  useEffect(() => {
    const roundText = document.querySelector(".round-text");

    const roundString = roundText.innerText
      .split("")
      .map((char, index) => {
        return `<p key="${index}" style="transform:rotate(${
          index * 5
        }deg)">${char}</p>`;
      })
      .join("");

    roundText.innerHTML = roundString;
  }, []);

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "E-commerce App",
      github: "https://github.com/developer-abhay/EcommerceApp",
      demo: "https://thegadgetstore.netlify.app",
    },
    {
      id: 2,
      image: IMG2,
      title: "Youtube Clone",
      github: "https://github.com/developer-abhay/YoutubeCloneApp",
      demo: "https://youtubecloneapp123.netlify.app/",
    },

    {
      id: 3,
      image: IMG3,
      title: "Rhythmicstan",
      github: "www.github.com",
      demo: "https://rhythmicstan.com/",
    },
    {
      id: 4,
      image: IMG4,
      title: "LinkedIn Clone",
      github: "www.github.com",
      demo: "",
    },
  ];

  return (
    <section id="projects">
      <div className="heading">
        <div>
          <h1>Projects</h1>
          <h1>Projects</h1>
          <h1>Projects</h1>
          <h1>Projects</h1>
        </div>
      </div>

      <div className="projects-container">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="projects-item">
            <div className="projects-item-image">
              <img src={image} alt="project 1" />
            </div>
            <div>
              <a href={github} target="_blank" rel="noreferrer">
                Source Code Github
              </a>
              <h3>{title}</h3>

              <a href={demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="hello">
        <p>More</p>
        <span className="round-text">See More - See More - See More - </span>
        <div></div>
      </div>
    </section>
  );
}

export default Projects;
