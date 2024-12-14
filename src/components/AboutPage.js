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
        
        Professional in the field of software engineering with a deep interest 
        in bioinformatics, as well as a passion for emerging technologies and artificial intelligence. 
        My academic background is in bioinformatics, and I am motivated to bridge the gap between 
        biology and technology. 
        Currently, I am seeking opportunities in the scientific field where 
        I can expand my skills in biological 
        data analysis, as well as in the IT sector in the form of an internship or junior position.
        </div>
        <div className="about-right">
        
          <p>
          I hold a Bachelor's degree in <span>Bioinformatics</span> and have spent the last 
          three years honing my programming skills at <span>SoftUni</span>, 
          </p>


          <p>where I successfully completed the <span> Java Developer</span> pathway followed by a <span>DevOps</span> module and ongoing studies in <span>ReactJS</span>. </p> 
          <p>
          Currently, I am continuing my academic development with a<span> Master's degree</span> in <span>Applied Molecular Biology with Bioinformatics</span>.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default AboutPage;