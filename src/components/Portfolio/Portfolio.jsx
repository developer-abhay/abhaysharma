import React from "react";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import "./Portfolio.css";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Youtube Clone",
      github: "https://github.com/developer-abhay/YoutubeCloneApp",
      demo: "https://euphonious-cuchufli-3bf8eb.netlify.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "E-commerce App",
      github: "https://github.com/developer-abhay/EcommerceApp",
      demo: "https://serene-macaron-933d9e.netlify.app",
    },
    {
      id: 3,
      image: IMG3,
      title: "Freelance Project",
      github: "www.github.com",
      demo: "https://rhythmicstan.com/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={image} alt="project 1" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
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

export default Portfolio;
