import React from 'react';
import './style.css';

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 8 },
    { name: "React", level: 7 },
    { name: "CSS", level: 6 },
    { name: "Node.js", level: 6 },
    { name: "MongoDB", level: 4 }
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
            <img src="path/to/github-image.png" alt="GitHub" height="40" width="40" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-username" target="_blank">
            <img src="path/to/linkedin-image.png" alt="LinkedIn" height="40" width="40" />
          </a>

        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi, I'm a web developer with a passion for creating beautiful and functional websites. I have a strong background in HTML, CSS, and JavaScript and I'm constantly learning and expanding my skills. My goal is to build websites that not only look great, but also provide a seamless user experience.
          </p>
        </section>
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="projects">
            <div className="project">
              <img src="project1.jpg" alt="Project 1" />
              <h3>Project 1</h3>
              <p>
                A brief description of Project 1.
              </p>
            </div>
            <div className="project">
              <img src="project2.jpg" alt="Project 2" />
              <h3>Project 2</h3>
              <p>
                A brief description of Project 2.
              </p>
            </div>
            <Skills />
          </div>
        </section>
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
