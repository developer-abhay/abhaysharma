import React from "react";

const SkillCard = ({ heading, Icon, text, img, color }) => {
  return (
    <div className="skill-card">
      {Icon ? (
        <Icon className="icon" style={{ color: color }} />
      ) : (
        <img src={img} />
      )}

      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SkillCard;
