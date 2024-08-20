import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import "./HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>

      
      <div className="home-page">
        <div>
          <span>Hey,</span>
          <p>
            I am <span> Daniel Valkanov</span>,
          </p>
        </div>
        <span>Bioinformatic 🧬</span>
        <span>and Java Developer 🖥️</span>
      </div>

      <div className="home-page-footer">
        <a
          href="https://github.com/Daniel8Valkanov8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-valkanov-a4b76221b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/dnv__dev?igsh=MWxmbmxwaHloNXRqNw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="mailto:daniel8valkanov8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        ><EmailIcon />
        </a>
        
      </div>
    </div>
  );
};

export default HomePage;
