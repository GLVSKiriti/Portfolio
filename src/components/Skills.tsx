import "./Skills.scss";
import antdLogo from "../assets/antdIcon.png";
import skills from "../constants/skills";
import React from "react";

function Skills() {
  return (
    <div className="skills" id="Skills">
      <h1>Skills</h1>
      <div className="skillSet">
        {skills.map((each, index) => (
          <div className="icon" key={index}>
            {React.createElement(each.icon, { color: each.color })}
            <div className="iconName">
              <h4>{each.name}</h4>
            </div>
          </div>
        ))}
        <div className="icon">
          <img src={antdLogo} alt="" />
          <div className="iconName">
            <h4>Antdesgin</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
