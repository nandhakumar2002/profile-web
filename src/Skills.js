import React from "react";
import "./style.css";

const Skills =() => { const skills = [
    { name: "JavaScript", level: 8 },
    { name: "React", level: 7 },
    { name: "HTML/CSS", level:  7},
    { name: "Python", level: 6 },
    { name: "Java", level: 6 },
    { name: "Rest API", level:  6}
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: `${skill.level * 10}%` }} />
            </div>
            <span className="skill-level-value">{skill.level}/10</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
