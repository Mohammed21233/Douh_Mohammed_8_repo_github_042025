// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import bannerImage from "../assets/banner.jpg";
import Card from "../components/Card"; // ✅ IMPORT DU COMPOSANT
import "../pages/home.css";
import Footer from "../components/Footer";


const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des logements :", error)
      );
  }, []);

  return (
    <div className="home-container">
      {/* Section bannière */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      {/* Liste des logements */}
      <section className="location-grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
  

    </div>
  );
};

export default Home;
