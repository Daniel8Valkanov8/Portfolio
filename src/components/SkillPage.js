import React from "react";
import "./SkillPage.css";
import javaImg from "../logos/java.png";
import mysqlImg from "../logos/mysql.png";
import reactImg from "../logos/react.png";
import springImg from "../logos/spring.png";

const SkillPage = () => {
  return (
    <div className="skill-container">
      <div className="skill-header">
        <span>Ski</span>lls
      </div>
      <div className="skill-content">
        <div className="skill-left">
          <div className="divskills">
            <h1>Key Skills</h1>
            <p>Analytical and critical thinking</p>
            <p>Attention to detail</p>
            <p>Problem Solving</p>
          </div>
          <div className="divskills">
            <h1>Code Skills</h1>
            <p>Java (Spring Framework, Swing UI, FX, etc)</p>
            <p>MySQL (Work Level)</p>
            <p>Reactjs (in progress)</p>
          </div>
          <div className="divskills">
            <h1>Some Lab Skills</h1>
            <p>Laboratory skills (pipetting, vortexing, etc.)</p>
            <p>Following predefined protocols</p>
            <p>Microscope operations</p>
          </div>
        </div>
        <div className="skill-images">
          <img src={javaImg} alt="Java" className="skill-img" />
          <img src={mysqlImg} alt="MySQL" className="skill-img" />
          <img src={reactImg} alt="React" className="skill-img" />
          <img src={springImg} alt="Spring" className="skill-img" />
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
