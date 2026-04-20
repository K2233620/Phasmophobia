import { useState } from "react";
import Phasmo from "./components/PhasmoPage";
import Ghost from "./components/ghost";
import About from "./components/about";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function renderPage() {
    if (currentPage === "home") {
      return <Phasmo />;
    }

    if (currentPage === "ghosts") {
      return <Ghost />;
    }

    if (currentPage === "about") {
      return <About />;
    }

    return <Phasmo />;
  }

  return (
    <div className="layout">
      <div className="header">
        <div className="nav-links">
          <span onClick={() => setCurrentPage("home")}>Phasmophobia</span>
          <span onClick={() => setCurrentPage("ghosts")}>Ghosts</span>
          <span onClick={() => setCurrentPage("about")}>About Us</span>
        </div>
      </div>

      <div className="content">{renderPage()}</div>

      <footer className="footer">
        <p>Thank you for visiting</p>
      </footer>
    </div>
  );
}

export default App;
