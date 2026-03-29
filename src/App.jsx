import { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [ghostPage, setGhostPage] = useState("spirit");

  // GHOST SECTION (like your manager tabs)
  function renderGhostPage() {
    if (ghostPage === "spirit") {
      return <p>Spirit: Very common ghost. No strengths.</p>;
    }

    if (ghostPage === "wraith") {
      return <p>Wraith: Can fly and never touches the ground.</p>;
    }

    if (ghostPage === "phantom") {
      return <p>Phantom: Looking at it reduces sanity.</p>;
    }

    if (ghostPage === "poltergeist") {
      return <p>Poltergeist: Throws many objects at once.</p>;
    }
  }

  // MAIN PAGE SWITCH
  function renderPage() {
    if (currentPage === "home") {
      return (
        <div className="content">
          <h1>Phasmophobia</h1>
          <p>Welcome to the ghost guide.</p>
        </div>
      );
    }

    if (currentPage === "ghosts") {
      return (
        <div className="content">
          <h1>Ghosts</h1>

          <div className="section-links">
            <span onClick={() => setGhostPage("spirit")}>Spirit</span>
            <span onClick={() => setGhostPage("wraith")}>Wraith</span>
            <span onClick={() => setGhostPage("phantom")}>Phantom</span>
            <span onClick={() => setGhostPage("poltergeist")}>Poltergeist</span>
          </div>

          <div className="ghost-info">{renderGhostPage()}</div>
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
  }

return (
  <div className="layout">

    {/* HEADER */}
    <div className="header">
      <img 
        src="https://kineticgames.co.uk/payload-api/media/file/Phasmophobia_logo.webp" 
        alt="logo" 
        className="logo"
      />

      <div className="nav-links">
        <span onClick={() => setCurrentPage("home")}>Phasmophobia</span>
        <span onClick={() => setCurrentPage("ghosts")}>Ghosts</span>
        <span onClick={() => setCurrentPage("about")}>About Us</span>
      </div>
    </div>

    {/* CONTENT */}
    {renderPage()}

    {/* FOOTER */}
    <footer className="footer">
      <p>Thank you for visiting</p>
    </footer>

  </div>
);
}

export default App;
 