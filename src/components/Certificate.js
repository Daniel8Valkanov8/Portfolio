import React from "react";
import "./Certificate.css";

const Certificate = ({ name, pdfPath, imgPath }) => {
  return (
    <div className="certificate" onClick={() => window.open(pdfPath, '_blank')}>
      <img src={imgPath} alt={name} className="certificate-img" />
      <div className="certificate-name">{name}</div>
    </div>
  );
};

export default Certificate;
