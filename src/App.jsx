import { useState } from "react";
import Phasmo from "./components/phasmo";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function renderPage() {
    if (currentPage === "home") {
      return <Phasmo />;
    }

    if (currentPage === "ghosts") {
      return (
        <div className="content">
          <h1>Ghosts</h1>
          <p>Ghost page coming soon.</p>
        </div>
      );
    }

    if (currentPage === "about") {
      return (
        <div className="content">
          <h1>About Us</h1>
          <p>This project is a guide to Phasmophobia ghosts.</p>
        </div>
      );
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

      {renderPage()}

      <footer className="footer">
        <p>Thank you for visiting</p>
      </footer>
    </div>
  );
}
export default App;
