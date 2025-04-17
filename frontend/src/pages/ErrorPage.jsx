import React from "react";
import { Link } from "react-router-dom";
import "./errorpage.css";

function ErrorPage() {
  return (
    <main className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default ErrorPage;
