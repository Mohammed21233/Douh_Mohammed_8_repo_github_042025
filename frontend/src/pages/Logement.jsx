import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

import "./logement.css";
import starActive from "../assets/star-active.png"; // Import image étoile

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  const [current, setCurrent] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const total = logement.pictures.length;

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  return (
    <div className="logement-container">
      {/* Carrousel */}
      <div className="carousel">
        <img
          src={logement.pictures[current]}
          alt={`Slide ${current + 1}`}
          className="carousel-image"
        />
        {total > 1 && (
          <>
            <button className="prev" onClick={prevSlide}>‹</button>
            <button className="next" onClick={nextSlide}>›</button>
            <span className="counter">{current + 1} / {total}</span>
          </>
        )}
      </div>

      {/* Infos logement */}
      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={star <= parseInt(logement.rating) ? starActive : ""}
                alt="star"
                className="star-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logement;
