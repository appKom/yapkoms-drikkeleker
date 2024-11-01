import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./game/game.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mainpage">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
      </Router>
    </div>
  </StrictMode>
);
