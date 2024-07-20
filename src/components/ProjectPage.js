import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>Pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>Part of my thesis</p>
          <p>TR-Viewer</p>
          <p>
            <span>2024</span>
            <a href="https://github.com/Daniel8Valkanov8/TR-Viewer-Final">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Course project</p>
          <p>Travel Agency Rest Api</p>
          <p>
            <span>2023</span>
            <a href="https://github.com/Daniel8Valkanov8/TravelAgencyRestApiFinal">
              Tap to view
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;