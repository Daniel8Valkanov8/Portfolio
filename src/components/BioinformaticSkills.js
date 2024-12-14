import React from "react";
import "./SkillPage.css";



const BioinformaticSkills = () => {
  return (
    <div className="skill-container">
      <div className="skill-header">
        <span>Bio</span>info and <span>Lab</span>
      </div>
      
      <div className="skill-content">
      <div className="divskills">
            <h1>Bioinformarics </h1>
            <p>Galaxy knowledge</p>
            <p>R statistics</p>
            <p>Working with FASTA and BED formats</p>
          </div>
          <div className="divskills">
            <h1>Lab</h1>
            <p>Laboratory Techniques (Pipetting, Vortexing, etc.)</p>
            <p>Agarose Gel Electrophoresis (DNA Purification and Separation)</p>
            <p>Adherence to Predefined Protocols for PCR, QPCR, etc.</p>
          </div>
      </div>
    </div>
  );
};

export default BioinformaticSkills;
