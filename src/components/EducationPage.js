import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Certificate from "./Certificate";
import "./EducationPage.css";

const pdfFiles = [
  { name: 'Java OOP', pdfPath: require('./certificates/Java OOP.pdf'), imgPath: require('./certificates/Java OOP.jpg') },
  { name: 'JS Front-End', pdfPath: require('./certificates/JS Front-End.pdf'), imgPath: require('./certificates/JS Front-End.jpg') },
  { name: 'MySQL', pdfPath: require('./certificates/MySQL.pdf'), imgPath: require('./certificates/MySQL.jpg') },
  { name: 'Spring Fundamentals', pdfPath: require('./certificates/Spring Fundamentals.pdf'), imgPath: require('./certificates/Spring Fundamentals.jpg') }
];

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>Experience</p>
        <p>
          <span>&</span>Education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Bioinformatics - bachelor degree</p>
          <p>Plovdiv University "Paisii Hilendarski"</p>
          <p>
            <span>Sept 2020 - Jul 2024</span>
            <a href="https://bio.uni-plovdiv.bg" target="_blank" rel="noopener noreferrer">
              <LocationOnIcon />
              Plovdiv, Bulgaria
            </a>
          </p>
        </div>
        <div className="education">
          <p>Java Web Developer - vocational training certificate</p>
          <p>Software University</p>
          <p>
            <span>Feb 2022 - Aug 2024</span>
            <a href="https://softuni.bg/" target="_blank" rel="noopener noreferrer">
              <LocationOnIcon />
              Sofia, Bulgaria
            </a>
          </p>
        </div>
      </div>
      <div className="certificates-container">
        <div className="certificates">
          {pdfFiles.map((pdf, index) => (
            <Certificate key={index} name={pdf.name} pdfPath={pdf.pdfPath} imgPath={pdf.imgPath} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
