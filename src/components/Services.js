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
            <h1>Custom Outsourced Projects</h1>
            <p>I offer personalized project development services tailored to client needs, 
              whether frontend, backend, or full stack. 
              My technical toolkit includes React, Java, and SQL.</p>
            
          </div>
          <div className="services">
            <h1>Telegram Bot Development</h1>
            <p>I specialize in creating Telegram bots with custom logic as per client specifications. 
              These bots are capable of handling orders and payments.</p>
            
          </div>
          <div className="services">
            <h1>Portfolio Development</h1>
            <p>I provide services to design, 
              develop, and deploy personalized portfolios
               that showcase professional work.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
