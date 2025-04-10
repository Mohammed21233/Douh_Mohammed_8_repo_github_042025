import React from "react";
import "../styleComponents/footer.css";
import logoFooter from "../assets/logo-footer.png"; // Assure-toi d'avoir ce logo dans assets

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa logo" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
