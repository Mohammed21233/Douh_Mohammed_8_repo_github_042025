import React, { useState } from "react";
import "../styleComponents/collapse.css";
import arrow from "../assets/arrow.png";

export default function Collapse({ title, content, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Si "content" est fourni, on l’utilise. Sinon, on utilise les enfants.
  const displayContent = content || children;
  const isArray = Array.isArray(displayContent);

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img
          src={arrow}
          alt="arrow"
          className={`arrow-icon ${isOpen ? "open" : "closed"}`}
        />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {isArray ? (
            <ul>
              {displayContent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <>{displayContent}</>
          )}
        </div>
      )}
    </div>
  );
}
