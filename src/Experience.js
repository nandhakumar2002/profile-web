import React from "react";
import "./style.css";

const Experience =() => {
  return (
    <div className="experience">
        <h2>Experience</h2>
      <h3 className="experience-company">Spacescan.io</h3>
      <p className="experience-details"><span className="experience-title">Web developer | March 2022 - Current</span></p>
      <p className="experience-description">As a web developer at SpaceScan.io, I am responsible for developing and maintaining web applications using ReactJS.
         Utilize REST APIs with Swagger for integrating with backend services and PostgreSQL for storing data. 
         The team follows agile methodologies to complete tasks efficiently, with regular scrum calls taking place to ensure progress and 
         effective communication among team members. My role involves working in a fast-paced environment to deliver 
         high-quality and user-friendly web solutions.</p>
         <div className="buttons">
             <a href="https://www.spacescan.io/" target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
        <span className="spacer" />
      <a href="https://twitter.com/natsaba" target="_blank" rel="noopener noreferrer">
        Reference
      </a>
      </div>
    </div>
  );
};

export default Experience;
