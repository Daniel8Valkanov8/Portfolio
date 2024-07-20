import React from "react";
import "./Service.css";


const Services = () => {
  return (
    <div className="skill-container-service">
      <div className="skill-header-service">
        <span>Ser</span>vices
      </div>
      <div className="skill-content-service">
        <div className="skill-left-service">
          <div className="services">
            <h1>Personal Outsource Projects</h1>
            <p>Preparation of personalized projects upon request and by agreement with the client (Frontend, Backend, or Full Stack). Technologies used include React, Java, and SQL.</p>
            
          </div>
          <div className="services">
            <h1>Create Telegram Bot</h1>
            <p>Creation of a Telegram bot with custom logic
                 as specified by the client. Capable of handling orders and payments.</p>
            
          </div>
          <div className="services">
            <h1>Create Individual Portfolio</h1>
            <p>Development of a custom portfolio, design deployment.</p>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
