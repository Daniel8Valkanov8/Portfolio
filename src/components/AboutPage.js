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
        
        I am a professional with a deep interest in full-stack software engineering, alongside a 
        passion for emerging technologies and artificial intelligence. My academic background 
        is in bioinformatics, and I am eager to bridge the gap between biology and technology. 
        Currently, I am seeking opportunities in the IT sector, particularly as a Java Backend or 
        Fullstack Developer, either in an internship or junior position. 
        A key objective of mine is to
         contribute to the development of 
         Java-based software solutions for biological applications.
        </div>
        <div className="about-right">
        
          <p>
          I hold a Bachelor's degree in <span>Bioinformatics</span> and have spent the last 
          three years honing my programming skills at <span>SoftUni</span>, 
          </p>
          <p>where I successfully completed the <span> Java Developer</span> pathway followed by a <span>DevOps</span> module and ongoing studies in <span>ReactJS</span>. </p> 
        </div>
      </div>
    </div>
  );
};

export default AboutPage;