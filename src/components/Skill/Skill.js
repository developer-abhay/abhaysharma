import React from "react";
import "./Skill.css";
import { FaHtml5 } from "react-icons/fa6";
import {
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithubSquare,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import MUI from "../../assets/MUI Icon.png";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <section id="skill">
      <h5>My Skills </h5>
      <h2>Tech Stack</h2>
      <div>
        <SkillCard
          heading="HTML"
          text="<div>Hello World<div/>"
          Icon={FaHtml5}
          color="#E44D26"
        />
        <SkillCard
          heading="CSS"
          text="color: #ffffff"
          Icon={FaCss3Alt}
          color="#2060AB"
        />
        <SkillCard
          heading="Bootstrap"
          text="m-0 primary"
          Icon={FaBootstrap}
          color="#7410F0"
        />

        <SkillCard heading="Material UI" text="sx={{ width: 500}" img={MUI} />
        <SkillCard
          heading="JS"
          text=".addEventListener(() , () => {})"
          Icon={IoLogoJavascript}
          color="#EFD81D"
        />
        <SkillCard
          heading="JQuery"
          text="$.noConflict() mode"
          Icon={SiJquery}
          color="#106DAE"
        />
        <SkillCard
          heading="React"
          text="props! and more props!"
          Icon={FaReact}
          color="#08D9FF"
        />
        <SkillCard
          heading="Git + Github"
          text="git add origin coffee"
          Icon={FaGithubSquare}
          color="#"
        />
        <SkillCard
          heading="Firebase"
          text="deploy ..."
          Icon={IoLogoFirebase}
          color="#FFCD32"
        />
      </div>
    </section>
  );
};

export default Skill;
