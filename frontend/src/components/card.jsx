// src/components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styleComponents/card.css"; // ← Lien vers le CSS

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div
        className="card-background"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="card-overlay"></div>
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
