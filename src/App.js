import React from 'react';
import './style.css';
import Githubicon from './Images/github.png';
import linkedinicon from './Images/linkedin.png';
import aictebot from './Images/aictebot.png';
import River from './Images/river.png';
import Experience from './Experience';
import EducationPage from './Education';
import Skills from './Skills';
import resume from "./Nandha kumar G.pdf";



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
          <a href={resume} className="download-resume-button" download>Resume</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
          &nbsp; &nbsp;As a web developer who knows Node, React, Python, and Java,
            I have a strong background in building dynamic and user-friendly websites.
            I have hands-on experience in working with both front-end and back-end technologies and have the ability to create full-stack applications from scratch.
            I am proficient in using modern JavaScript libraries such as React for building high-performance UI components, and have also worked on building scalable back-end systems using Node.js, REST APIs and PostgreSQl.
            Additionally, I have experience working with Java, which have allowed me to build robust and efficient applications.
          </p>
          <p className='p1'>
          &nbsp; &nbsp;Proficient in Python, which is a powerful and versatile programming language. I have used it for various projects, including data analysis and machine learning.
            I am a fast learner and always seek out new challenges to improve my skills.
            I keep up with the latest technologies and best practices in web development, and
            I am always looking for ways to make my projects more efficient and user-friendly.
            I am a team player who enjoys working with others and am always eager to collaborate on projects to bring out the best results.
            I am dedicated to providing the best possible user experience and strive to create visually appealing and highly functional websites.</p>
        </section>
        <Skills />
        <Experience />
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="projects">
            <div className="project">
              <h3>Real Time River Water Quality Monitoring and Control System</h3>
              <img src={River} alt="Project 1" />
              <p>
              &nbsp; &nbsp;&nbsp; &nbsp; A real-time river water quality monitoring and control system is a system designed to continuously monitor the water quality in a river and make changes to maintain its quality. It uses sensors to measure various parameters, a data collection system to gather the data, a data analysis software to provide real-time information, and a control system to adjust the water quality as needed. The goal is to ensure the water is safe for human consumption, recreation, and other uses.
              </p>
              <a href="https://github.com/IBM-EPBL/IBM-Project-39637-1660472677" target="_blank" className="github-button">
                Github Repo
              </a>
            </div>
            <div className="project">
              <h3>AICTE Chatbot</h3>
              <img src={aictebot} alt="Project 2" />
              <p>
              &nbsp; &nbsp;&nbsp; &nbsp; A Chatbot to solve AICTE FAQs is a conversational AI-powered solution that can answer frequently asked questions related to the All India Council for Technical Education. It can understand natural language inputs from users and provide instant and accurate answers to their queries. The chatbot can be integrated into the AICTE website or any other platform, and it can be used by students, teachers, and other stakeholders to get quick answers to their questions. This chatbot can help reduce the workload of AICTE customer service teams and improve the overall user experience.
              </p>
              <a href="https://github.com/nandhakumar2002/aicte-bot" target="_blank" className="github-button">
                Github Repo
              </a> <span className="spacer" />
      <a href="https://aicte-faq-bot.onrender.com/" target="_blank" rel="noopener noreferrer" className="github-button">
        Try Bot
      </a>
            </div>
          </div>
        </section>
        <EducationPage/>
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
