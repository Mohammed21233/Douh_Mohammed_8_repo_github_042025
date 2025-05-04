import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer"; // 👈 importe Footer
import Home from "./pages/Home.jsx";
import About from "./pages/about.jsx";
import Logement from "./pages/Logement.jsx"; // 👈 importe la page Logement
import ErrorPage from "./pages/ErrorPage.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} /> {/* 👈 route pour la fiche logement */}
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer /> {/* 👈 Footer après toutes les routes */}
    </>
  );
}

export default App;
