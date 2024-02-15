import React from "react";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import "./Projects.css";

function Projects() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Youtube Clone",
      github: "https://github.com/developer-abhay/YoutubeCloneApp",
      demo: "https://youtubecloneapp123.netlify.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "E-commerce App",
      github: "https://github.com/developer-abhay/EcommerceApp",
      demo: "https://thegadgetstore.netlify.app",
    },
    {
      id: 3,
      image: IMG3,
      title: "ChatGPT Clone",
      github: "www.github.com",
      demo: "https://rhythmicstan.com/",
    },
    {
      id: 4,
      image: IMG4,
      title: "LinkedIn Clone",
      github: "www.github.com",
      demo: "https://rhythmicstan.com/",
    },
  ];

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects-container">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="projects-item">
            <div className="projects-item-image">
              <img src={image} alt="project 1" />
            </div>
            <h3>{title}</h3>
            <div className="projects-item-cta">
              <a href={github} target="_blank" rel="noreferrer" className="btn">
                Github
              </a>
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
