import React from "react";
import "./SkillPage.css";
import javaImg from "../logos/java.png";
import mysqlImg from "../logos/mysql.png";
import reactImg from "../logos/react.png";
import springImg from "../logos/spring.png";
import github from "../logos/github.png";
import git from "../logos/git.png";
import docker from "../logos/docker.png";
import aws from "../logos/aws.png";
import terraform from "../logos/terraform.png";


const CodeSkills = () => {
  return (
    <div className="skill-container">
      <div className="skill-header">
        <span>Dev</span>elopment
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
            <h1>Code Skills</h1>
            <p>Advanced Java Skills:</p>
            <p>Spring Boot - 3.3.2 (Sequrity, REST, JDBC, MVC, AOP, etc.)</p>
            <p>JUnit and Mockito testing</p> 
            <p>Swing UI</p>
            <p>MySQL (Work Level)</p>
            <p>Reactjs (in progress)</p>
          </div>
          <div className="divskills">
            <h1>Devops</h1>
            <p>Github Actions CI/CD</p>
            <p>Docker Containers</p>
            <p>Prefer Clouds - AWS, Azure</p> 
            <p>Terraform IaaC</p>
            <p>App Monitoring</p>
    
          </div>
          
        </div>
        <div className="skill-images">
          <img src={javaImg} alt="Java" className="skill-img" />
          <img src={mysqlImg} alt="MySQL" className="skill-img" />
          <img src={reactImg} alt="React" className="skill-img" />
          <img src={springImg} alt="Spring" className="skill-img" />
          <img src={github} alt="Github" className="skill-img" />
          <img src={git} alt="Git" className="skill-img" />
          <img src={docker} alt="Docker" className="skill-img" />
          <img src={aws} alt="Aws" className="skill-img" />
          <img src={terraform} alt="Terraform" className="skill-img" />
          
        </div>
      </div>
    </div>
  );
};

export default CodeSkills;
