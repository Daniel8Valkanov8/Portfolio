import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import SkillPage from "./components/SkillPage";
import EducationPage from "./components/EducationPage";
import Services from "./components/Services";
import { motion } from 'framer-motion';

export default function App() {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentEmoji, setCurrentEmoji] = useState("🌐");
  const emojiArray = ["🌐", "🧪"];

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setShowBackToTopBtn(scrolled > 500);
    };
    window.addEventListener("scroll", toggleVisible);
  
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
  
    const interval = setInterval(() => {
      setCurrentEmoji((prevEmoji) =>
        prevEmoji === emojiArray[0] ? emojiArray[1] : emojiArray[0]
      );
    }, 10000);
  
    return () => {
      window.removeEventListener("scroll", toggleVisible);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [emojiArray]); // Добавете `emojiArray` тук
  ;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.p
        className="mouse-emoji"
        
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
        animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {currentEmoji}
      </motion.p>

      <div className="app-section" id="home">
        <HomePage />
      </div>
      <div className="app-section" id="about">
        <AboutPage />
      </div>
      <div className="app-section" id="skills">
        <SkillPage />
      </div>
      <div className="app-section" id="projects">
        <ProjectPage />
      </div>
      <div className="app-section">
        <EducationPage />
      </div>
      <div>
        <Services />
      </div>
      <div className="app-section-contact" id="contact">
        <ContactPage />
      </div>
      {showBackToTopBtn && (
        <button className="btn-back-to-top" onClick={scrollToTop}>
          <span> Back to Top</span>
          <ArrowUpwardIcon />
        </button>
      )}
    </>
  );
}
