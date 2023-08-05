import React,{useState} from 'react';
import './App.css';

const projects = [
  {
    title: 'Lemonade',
    techStack: 'Django | html5 | bootstrap | SQLite',
    description:
      'A full-stack project for a QnA platform to read the latest tech gigs. Features include user profiles, voting, comments, and keyword search.',
  },
  {
    title: 'Sevamm',
    techStack: 'React.js | bootstrap | GitHub Pages',
    description:
      'A web application to calculate the optimal distribution of corpus money using React and Bootstrap for styling.',
  },
  {
    title: 'PyTeleBot',
    techStack: 'ES6(JS) | Python',
    description:
      'A Python script project for creating an interactive Telegram bot using Bot Father API.',
  },
  {
    title: 'IpLookUp',
    techStack: 'ES6(JS) | Chrome developer tools | html5',
    description:
      'An innovative Chrome extension to detect and alert users to the presence of suspicious characters in domain names.',
  },
];




const App = () => {
  // const [selectedProject, setSelectedProject] = useState(null);

  // const handleProjectClick = (index) => {
  //   setSelectedProject(projects[index]);
  // };


 const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = (index) => {
    setHoveredProject(projects[index]);
  };

  const handleProjectMouseLeave = () => {
    setHoveredProject(null);
  };



  return (
    <div className="portfolio">
      <header>
        <h1>ARUN KUMAR</h1>
        <h3>Software Engineer</h3>
        <ul className="contact-info">
          <li>Ó +91-7479707761</li>
          <li>[ 2245arunkumarz@gmail.com ]</li>
          <li>½ Bangalore - India</li>
          <li>¯ Linkedin  Github Leetcode</li>
        </ul>
      </header>

      <section className="education">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <h3>B.Tech. (CSE) - 8.0 CGPA</h3>
          <p>Jharkhand University of Technology</p>
          <p>August 2019 – June 2023</p>
        </div>
        <div className="education-item">
          <h3>Higher Secondary - 81%</h3>
          <p>Central Board of Secondary Education</p>
          <p>2017</p>
        </div>
        <div className="education-item">
          <h3>Secondary - 8.0 CGPA</h3>
          <p>Central Board of Secondary Education</p>
          <p>2015</p>
        </div>
      </section>

      <section className="projects">
        <h2>PROJECTS</h2>
        <div className="projects-container">
          <div className="project-list">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onMouseEnter={() => handleProjectHover(index)}
                onMouseLeave={handleProjectMouseLeave}
              >
                <h3>{project.title}</h3>
                <p>Tech stack: {project.techStack}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <div className="project-preview">
            {hoveredProject && (
              <div className="project-card-preview">
                <h3>{hoveredProject.title}</h3>
                <p>Tech stack: {hoveredProject.techStack}</p>
                <p>{hoveredProject.description}</p>
                {/* You can also add preview image here */}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="experience">
        <h2>EXPERIENCE</h2>
        <div className="experience-item">
          <h3>Frontend Development Intern</h3>
          <p>Techolution</p>
          <p>Dec 2021 – July 2022 | Hyderabad, India</p>
          <p>
            Prime React Library
            <br />
            Developed production-ready products with 95% code coverage under test-driven development.
            <br />
            Worked on the design, development, and integration of API.
          </p>
        </div>
        <div className="experience-item">
          <h3>Backend Development Intern</h3>
          <p>Desi QnA</p>
          <p>March 2023 – June 2023 | Mumbai, India</p>
          <p>
            Worked on User Verification/Authentication and engineering challenges of detecting and removing fake bots and posts.
            <br />
            Integrated Recaptcha with the website.
          </p>
        </div>
      </section>

      <section className="achievements">
        <h2>ACHIEVEMENTS</h2>
        <ul>
          <li>Solved Over 150 Coding Questions on Different Coding Websites.</li>
          <li>2nd Milestone achiever in a boot camp organized by the Google Cloud Team.</li>
          <li>Scored 8.44 CGPA in college till 8th Semester in CSE.</li>
          <li>More than 64 Repository in Web Development (Frontend + Backend) using Different Web Technologies.</li>
          <li>GSSOC’23 Open source developer contributor.</li>
        </ul>
      </section>

      <section className="skills">
        <h2>TECHNICAL SKILLS</h2>
        <div className="skills-section">
          <h3>Programming Languages</h3>
          <p>C++ | C | Javascript | Python</p>
        </div>
        <div className="skills-section">
          <h3>Frameworks & Libraries</h3>
          <p>HTML, CSS | ReactJS, NodeJS | Firebase, Django, Bootstrap | Prime React, Typescript</p>
        </div>
        <div className="skills-section">
          <h3>Version Control</h3>
          <p>Git</p>
        </div>
        <div className="skills-section">
          <h3>Other Tools</h3>
          <p>GCP | pythonAnywhere</p>
        </div>
      </section>
    </div>
  );
};

export default App;
