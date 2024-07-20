import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        Ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
        
        My main interests are in full-stack software engineering, 
        but they don't end there. I am also interested in new technologies and AI🤖, 
        various biological disciplines🧬, physics and astronomy, photography📷, psychology📖. 
        One of my main goals is participating in the development of Java-based biological software.
        </div>
        <div className="about-right">
          <p>
          Hello, my name is Daniel Valkanov. I am about to complete my bachelor's degree in
          <span> Bioinformatics</span>.
          </p>
          <p>
          In the last three years,
           I have specialized and enriched my programming 
           knowledge at the  
            <span> SoftUni </span>school.
          </p>
          <p>
          With each passing day, my <span> knowledge </span> and <span>personal projects</span> grow.
          I am currently studying the fundamentals of <span>Reactjs</span> and <span>Spring Framework</span> in depth.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;