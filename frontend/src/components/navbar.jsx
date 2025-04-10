import { Link } from "react-router-dom";
import "../styleComponents/navbar.css";
import logo from "../assets/LOGO.png"; // chemin vers l'image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Kasa" />
      </div>
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
