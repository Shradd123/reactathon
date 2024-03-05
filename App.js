// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and sav to reload.

//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
// import './App.css';
// Home Page Component
// const HomePage = () => {
//   return (
//     <div>
//       <center>
//       <h1>Welcome to My Portfolio</h1>
//       <p>Hi, I'm [Your Name], a passionate software engineer dedicated to crafting elegant solutions and building user-friendly applications.</p>
//     <img src={'https://images.herzindagi.info/image/2022/Oct/resume-building.jpg'}  alt="My Photo" width="600" height="300" />
//     </center></div>
//   );
// };

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to My Portfolio</h1>
      
      
      <h2 style={{ fontSize:'48px'}}>
        {/* <span style={{ color: '#FF6347' }}>J</span>
        <span style={{ color: '#4169E1' }}>o</span>
        <span style={{ color: '#32CD32' }}>h</span>
        <span style={{ color: '#FFD700' }}>n</span>
        <span style={{ color: '#9400D3' }}> </span> */}
        <span style={{ color: '#DC143C' }}>SAKSHI</span>
        {/* <span style={{ color: '#FF8C00' }}>o</span>
        <span style={{ color: '#00BFFF' }}>e</span> */}
      </h2>
      <p>Hi, I'm Sakshi , a passionate software engineer dedicated to crafting elegant solutions and building user-friendly applications.</p>
      <img src={'https://images.herzindagi.info/image/2022/Oct/resume-building.jpg'} alt="My Photo" />
      
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  return (
    <nav>
      <ul>
    
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// About Me Page Component
const AboutMePage = () => {
  return (
    <center>
    <div id="about">
      <h2>About Me</h2>
      <p>
        My name is Sakshi , and I'm a passionate software engineer dedicated to crafting high-quality code and building innovative solutions. I hold bachelor of engineering in Information Science from Sahyadri college of engineering. Throughout my academic and professional journey, I've gained experience in coding .
      </p>
      <p>
        I specialize in frontend coding, and I'm proficient in C ,C++ ,Python and Java. Apart from coding, I enjoy Coding ,Reading and Drawing . Some of my notable achievements include participating in hackathon.
      </p>
      <p>
        In the future, I aim to Software Engineering.
      </p>
      <hr></hr>
    </div>
    </center>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  return (

    <div id="projects">
      <h2>Projects</h2>
      <p>Showcase your projects here with titles, descriptions, and relevant images or videos.</p>
      <hr></hr>
    </div>
  );
};

// Skills Component
const Skills = () => {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <p>As a software engineer, I have honed a diverse set of technical skills that enable me to tackle a wide range of challenges in software development. My proficiency includes programming languages such as JavaScript, Python, and Java, along with expertise in popular frameworks and libraries such as React.js, Node.js, and Django. I am well-versed in database management systems like MySQL and MongoDB, and have experience in designing efficient data models and optimizing database queries. Additionally, I have a strong understanding of software development methodologies such as Agile and Scrum, allowing me to collaborate effectively in team environments and deliver high-quality solutions on time. Beyond technical skills, I possess excellent problem-solving abilities, attention to detail, and a continuous learning mindset, ensuring that I stay adaptable and thrive in dynamic and evolving technology landscapes.</p>

<hr></hr>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <p>phone no-134678920</p><br></br>
      <p>gmail-123@gmail.com</p><br></br>
      <p>Sakshilinkedin.com</p><br></br>
    </div>
  );
};

// Main App Component
const PortfolioApp = () => {
  return (
    <div>
      <Navigation />
      <HomePage />
      <AboutMePage />
      <ProjectsPage />
      <Skills />
      <Contact />
    </div>
  );
};

export default PortfolioApp;





