import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data.json";
import ErrorPage from "./ErrorPage";
import Slideshow from "../components/Slideshow"; 
import Collapse from "../components/Collapse";
import "./logement.css";
import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  const rating = parseInt(logement.rating);
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? starActive : starInactive
  );

  return (
    <div className="logement-container">
      <Slideshow pictures={logement.pictures} /> 
      
      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-host-rating">
          <div className="host-info">
            <p className="host-name">{logement.host.name}</p>
            <img
              className="host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="rating">
            {stars.map((star, index) => (
              <img
                key={index}
                src={star}
                alt={index < rating ? "star filled" : "star empty"}
                className="star-image"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
