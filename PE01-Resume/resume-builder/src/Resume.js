import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <h1>Student Name</h1>
      <div className="contact-info">
        <p>123 Main Street, Anytown USA, 12345 | (123) 456-7890 |</p>
        <p>studentname@email.com </p>
      </div>
      <h2>Education</h2>
      <ul className="education">
        <li>
          <h3>Master of Sciencec in Computer Science</h3>
          <p>University of xyz, Anytown USA | May 2023</p>
          <p>GPA 3.9/4.0</p>
        </li>
        <li>
          <h3>Bachelor of Sciencec in Computer Science</h3>
          <p>University of xyz, Anytown USA | May 2021</p>
          <p>GPA 3.7/4.0</p>
        </li>
      </ul>
      <h2>Skills</h2>
      <ul className="skills">
        <li>
            <p>Programming language: Java, Python, JavaScripts, C++ </p>
            <p>Framework and libraries:React, Spring Boot, Django, Node.js, Express.js</p>
            <p> Database system:MySQL, MongoDB</p>
            <p>Operating system: Windows, linux </p>
            <p> Version control: Git</p>
        </li>
        {/* Add more skills as needed */}
      </ul>
      <h2>Work Experience</h2>
      <ul className="experience">
        <li>
          <h3>Software Development Intern</h3>
          <p>XYZ corporation Anytown USA | May 2022 - Aug 2022</p>
          <p>
            Worked on a team to develop a new web application using React and Node.js
          </p>
          <p>
            Collaborate with team members to design and implement features
          </p>
          <p>
            Debugged and fixed issues in codebase
          </p>
        </li>
        <li>
          <h3>Teaching assistant </h3>
          <p>Department of computer science, University of XYZ | Aug 2021 - Present </p>
          <p>
            Assist with grading and holding office hours for undergraduate computer science cource
          </p>
          <p>
            Help students with assignment and answer questions about course material
          </p>
        </li>
        {/* Add more work experience items as needed */}
      </ul>
      <h2>Projects</h2>
      <ul className="projects">
        <li>
          <h3>Personal Website</h3>
          <p>
            Built a personal website using React and deployed it on GitHub pages
          </p>
          <p>
            source code: https://github.com/studentname/personal-website
          </p>
        </li>
        <li>
          <h3>Online Bookstore</h3>
          <p>
            Developed a web application for an online bookstore using Spring Boot and MySQL
          </p>
          <p>
            source code: https://github.com/studentname/Online-bookstore
          </p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
}

export default Resume;
