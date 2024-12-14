import React, { useState, useEffect, useCallback } from "react";
import "./DNAAnimation.css";

const DNAAnimation = () => {
  const [topLetters, setTopLetters] = useState(Array(12).fill("")); // Горни букви
  const [bottomLetters, setBottomLetters] = useState(Array(12).fill("")); // Долни букви
  const letters = ["G", "T", "A", "C"];

  // Функция за генериране на произволни букви
  const generateRandomLetters = useCallback(
    () =>
      Array(12)
        .fill("")
        .map(() => letters[Math.floor(Math.random() * letters.length)]),
    [letters]
  );

  useEffect(() => {
    // Задаване на начални букви
    setTopLetters(generateRandomLetters());
    setBottomLetters(generateRandomLetters());

    // Актуализиране на буквите на всеки завъртане
    const interval = setInterval(() => {
      setTopLetters(generateRandomLetters());
      setBottomLetters(generateRandomLetters());
    }, 1200);

    return () => clearInterval(interval); // Почистване на интервала при демонтиране
  }, [generateRandomLetters]);

  return (
    <div className="dna-rotation">
      <div className="dna">
        {[...Array(12)].map((_, index) => (
          <div className="base" key={index}>
            <div className="letter top">{topLetters[index]}</div>
            <div className="letter bottom">{bottomLetters[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DNAAnimation;
