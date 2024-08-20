import React from "react";
import "./SkillPage.css";
import javaImg from "../logos/java.png";
import mysqlImg from "../logos/mysql.png";
import reactImg from "../logos/react.png";
import springImg from "../logos/spring.png";
import github from "../logos/github.png"

const SkillPage = () => {
  return (
    <div className="skill-container">
      <div className="skill-header">
        <span>Ski</span>lls
      </div>
      <div className="skill-content">
        <div className="skill-left">
          <div className="divskills">
            <h1>Core Competencies</h1>
            <p>Analytical and Critical Thinking</p>
            <p>Attention to Detail</p>
            <p>Strong Sense of Responsibility</p>
          </div>
          <div className="divskills">
            <h1>Technical Skills</h1>
            <p>Advanced Java Skills:</p>
            <p>Spring Boot - 3.3.2 (Sequrity, REST, JDBC, MVC, etc.)</p>
            <p>JUnit and Mockito testing</p> 
            <p>Swing UI</p>
            <p>MySQL (Work Level)</p>
            <p>Reactjs (in progress)</p>
          </div>
          <div className="divskills">
            <h1>Laboratory Expertise</h1>
            <p>Laboratory Techniques (Pipetting, Vortexing, etc.)</p>
            <p>Agarose Gel Electrophoresis (DNA Purification and Separation)</p>
            <p>Adherence to Predefined Protocols</p>
            <p> Microscope Operation</p>
          </div>
        </div>
        <div className="skill-images">
          <img src={javaImg} alt="Java" className="skill-img" />
          <img src={mysqlImg} alt="MySQL" className="skill-img" />
          <img src={reactImg} alt="React" className="skill-img" />
          <img src={springImg} alt="Spring" className="skill-img" />
          <img src={github} alt="Github" className="skill-img" />
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
