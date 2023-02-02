import React from 'react';
import './style.css';
import Githubicon from './Images/github.png';
import linkedinicon from './Images/linkedin.png';
import aictebot from './Images/aictebot.png';
import Rivermonitor from './Images/rivermonitor.png';

const Skills = () => {
  const skills = [
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

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="title">Nandha Kumar G</h1>
        <nav>
          <a href="https://github.com/nandhakumar2002" target="_blank">
            <img src={Githubicon} alt="GitHub" height="40" width="40" />
          </a>
          <a href="https://www.linkedin.com/in/nandha-kumar-g-b40038229/" target="_blank">
            <img src={linkedinicon} alt="LinkedIn" height="40" width="40" />
          </a>

        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            As a web developer who knows Node, React, Python, and Java,
            I have a strong background in building dynamic and user-friendly websites.
            I have hands-on experience in working with both front-end and back-end technologies and have the ability to create full-stack applications from scratch.
            I am proficient in using modern JavaScript libraries such as React for building high-performance UI components, and have also worked on building scalable back-end systems using Node.js, REST APIs and PostgreSQl.
            Additionally, I have experience working with Java, which have allowed me to build robust and efficient applications.
          </p>
          <p>
            Proficient in Python, which is a powerful and versatile programming language. I have used it for various projects, including data analysis and machine learning.
            I am a fast learner and always seek out new challenges to improve my skills.
            I keep up with the latest technologies and best practices in web development, and
            I am always looking for ways to make my projects more efficient and user-friendly.
            I am a team player who enjoys working with others and am always eager to collaborate on projects to bring out the best results.
            I am dedicated to providing the best possible user experience and strive to create visually appealing and highly functional websites.</p>
        </section>
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="projects">
            <div className="project">
              <img src={Rivermonitor} alt="Project 1" />
              <h3>Real Time River Water Quality Monitoring and Control System</h3>
              <p>A real-time river water quality monitoring and control system is a system designed to continuously monitor the water quality in a river and make changes to maintain its quality. It uses sensors to measure various parameters, a data collection system to gather the data, a data analysis software to provide real-time information, and a control system to adjust the water quality as needed. The goal is to ensure the water is safe for human consumption, recreation, and other uses.
              </p>
            </div>
            <div className="project">
              <img src={aictebot} alt="Project 2" />
              <h3>AICTE Bot</h3>
              <p>
                A chatbot designed to solve AICTE FAQs is an artificial intelligence-powered virtual assistant designed to answer frequently asked questions about the All India Council for Technical Education (AICTE). This chatbot can be integrated into the AICTE's official website or a standalone platform to provide quick and convenient assistance to students, educators, and other stakeholders.

                The chatbot uses natural language processing (NLP) and machine learning algorithms to understand the user's queries and provide relevant answers from its database of frequently asked questions. It can also be programmed to handle more complex questions by redirecting the user to a relevant website or department.

                In conclusion, a chatbot designed to solve AICTE FAQs can greatly improve the efficiency and convenience of accessing information related to technical education in India, making it easier for students, educators, and other stakeholders to get the information they need. </p>
            </div>
          </div>
        </section>
        <Skills />
        <section id="contact">
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
            <input type="submit" value="Submit" />
          </form>
        </section>
      </main>
      <footer>
        <p>Copyright © 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
